"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
      {/* Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        <span className="text-xs font-medium text-foreground">Premium Design Solution</span>
      </div>

      {/* Main Headline */}
      <h1
        className={`text-5xl md:text-7xl font-bold text-center max-w-4xl leading-tight mb-6 transition duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="text-pretty">Crafting Experiences that Matter</span>
      </h1>

      {/* Subheading */}
      <p
        className={`text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-8 transition duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        Transform your vision into reality with cutting-edge design and seamless integration. Elevate your brand with
        our innovative solutions.
      </p>

      {/* CTA Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 transition duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <button className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition font-medium">
          Get Started Now
        </button>
        <button className="px-8 py-3 rounded-lg border border-primary bg-transparent text-foreground hover:bg-primary/10 transition font-medium">
          See Projects
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 flex flex-col items-center gap-2 transition duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-xs text-muted-foreground">Scroll down</span>
        <div className="w-6 h-10 border border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}
