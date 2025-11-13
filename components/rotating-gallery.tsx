"use client"

import { useEffect, useRef, useState } from "react"

const galleryItems = [
  { id: 1, color: "from-purple-600 to-purple-400", delay: 0 },
  { id: 2, color: "from-blue-600 to-blue-400", delay: 1 },
  { id: 3, color: "from-pink-600 to-pink-400", delay: 2 },
  { id: 4, color: "from-indigo-600 to-indigo-400", delay: 3 },
  { id: 5, color: "from-violet-600 to-violet-400", delay: 4 },
  { id: 6, color: "from-cyan-600 to-cyan-400", delay: 5 },
  { id: 7, color: "from-amber-600 to-amber-400", delay: 6 },
  { id: 8, color: "from-rose-600 to-rose-400", delay: 7 },
]

export default function RotatingGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs font-medium text-foreground">FEATURES</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="text-pretty">Packed with Innovation</span>
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-8 transition duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Cutting-edge features designed to elevate your creative agency or portfolio
          </p>
        </div>

        {/* Rotating Gallery Container */}
        <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
          {/* Orbiting Items */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96">
            {galleryItems.map((item, idx) => {
              const angle = (idx / galleryItems.length) * Math.PI * 2
              const radius = 150

              return (
                <div
                  key={item.id}
                  className={`absolute w-24 h-24 md:w-32 md:h-32 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                    top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    transform: "translate(-50%, -50%)",
                    transitionDelay: `${item.delay * 50}ms`,
                  }}
                >
                  <div
                    className={`w-full h-full rounded-2xl shadow-2xl hover:shadow-accent/50 hover:scale-110 transition-all duration-300 cursor-pointer transform-gpu bg-gradient-to-br ${item.color} opacity-80 hover:opacity-100 backdrop-blur-sm flex items-center justify-center border border-white/20`}
                  >
                    <span className="text-white/60 font-semibold text-sm">Item {item.id}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center Content */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 transition duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center mb-4">
              <div className="w-6 h-6 rounded-full bg-accent"></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Gallery</h3>
            <p className="text-sm text-muted-foreground">Hover over items to explore</p>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`flex justify-center mt-12 transition duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <button className="px-8 py-3 rounded-lg bg-accent/10 text-accent border border-accent/50 hover:bg-accent hover:text-accent-foreground transition font-medium">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
