"use client"

import { useEffect, useRef } from "react"

export default function ShaderHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2", {
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })

    if (!gl) return

    const dpr = Math.min(window.devicePixelRatio, 2)
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    gl.viewport(0, 0, canvas.width, canvas.height)

    // Vertex shader for full-screen quad
    const vertexShader = `#version 300 es
precision highp float;

in vec3 position;
out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position, 1.0);
}
`

    const fragmentShader = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform float uTime;
uniform vec2 uResolution;

// Simplex-like noise for organic shapes
float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float n = mix(
    mix(mix(sin(i.x) * 71.0, sin(i.x + 1.0) * 71.0, f.x),
        mix(sin(i.x) * 71.0, sin(i.x + 1.0) * 71.0, f.x), f.y),
    mix(mix(sin(i.x) * 71.0, sin(i.x + 1.0) * 71.0, f.x),
        mix(sin(i.x) * 71.0, sin(i.x + 1.0) * 71.0, f.x), f.y),
    f.z
  );
  return fract(sin(n) * 43758.5453) * 2.0 - 1.0;
}

// Fractal Brownian motion for organic flow
float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p * frequency);
    p *= 2.0;
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 center = vec2(0.5);
  float aspect = uResolution.x / uResolution.y;
  
  float waves = fbm(vec3(uv.x * 2.0, uv.y * 2.0, uTime * 0.3));
  uv += waves * 0.02;
  
  float layer1 = fbm(vec3(uv * 3.0 + uTime * 0.1, uTime * 0.15));
  float layer2 = fbm(vec3(uv * 2.0 + uTime * 0.05, uTime * 0.1));
  float layer3 = fbm(vec3(uv * 1.5, uTime * 0.08));
  
  float dist = distance(uv, center) * 1.2;
  float radial = smoothstep(1.2, 0.0, dist);
  
  float noise = mix(layer1, layer2, 0.5);
  noise = mix(noise, layer3, 0.3);
  
  // Deep purple, black, white, muted violet color palette
  vec3 col1 = vec3(0.25, 0.1, 0.35);  // Deep purple
  vec3 col2 = vec3(0.08, 0.04, 0.15); // Deep black-purple
  vec3 col3 = vec3(0.15, 0.08, 0.25); // Muted violet
  vec3 col4 = vec3(0.95, 0.95, 0.98); // Near white
  
  vec3 color = mix(col2, col1, noise * 0.5 + 0.5);
  color = mix(color, col3, fbm(vec3(uv, uTime * 0.1)) * 0.3);
  color = mix(color, col4, smoothstep(0.5, -0.5, noise) * 0.08 * radial);
  
  color += vec3(0.15, 0.08, 0.2) * smoothstep(1.5, 0.0, dist) * 0.4;
  
  color += vec3(0.05, 0.02, 0.08) * sin(uTime * 0.5) * 0.1;
  
  fragColor = vec4(color, 1.0);
}
`

    // Compile shader program
    const createShader = (source: string, type: number) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = createShader(vertexShader, gl.VERTEX_SHADER)
    const fs = createShader(fragmentShader, gl.FRAGMENT_SHADER)

    if (!vs || !fs) return

    const program = gl.createProgram()
    if (!program) return

    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program))
      return
    }

    // Create full-screen quad
    const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0])

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const positionLoc = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0)

    // Get uniform locations
    const timeLoc = gl.getUniformLocation(program, "uTime")
    const resolutionLoc = gl.getUniformLocation(program, "uResolution")

    // Animation loop
    let animationId: number

    const render = (time: number) => {
      const seconds = time * 0.001

      gl.uniform1f(timeLoc, seconds)
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)

      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animationId = requestAnimationFrame(render)
    }

    animationId = requestAnimationFrame(render)

    // Handle resize
    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect()
      const newDpr = Math.min(window.devicePixelRatio, 2)
      const newWidth = newRect.width * newDpr
      const newHeight = newRect.height * newDpr

      if (newWidth !== canvas.width || newHeight !== canvas.height) {
        canvas.width = newWidth
        canvas.height = newHeight
        gl.viewport(0, 0, canvas.width, canvas.height)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(positionBuffer)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full block" style={{ display: "block" }} />
}
