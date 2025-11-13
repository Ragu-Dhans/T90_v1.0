"use client"

import { useEffect, useRef, useState } from "react"

const benefits = [
  {
    id: 1,
    title: "Real-Time Intelligence",
    description: "Access accurate, real-time data to drive smarter decisions",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Measurable Impact",
    description: "Track performance, uncover insights, and achieve data-backed growth",
    icon: "📊",
  },
  {
    id: 3,
    title: "Seamless Integration",
    description: "Connect tools, teams, and workflows with intelligent automation",
    icon: "🔗",
  },
]

export default function BenefitsSection() {
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
    <section ref={ref} id="benefits" className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs font-medium text-foreground">WHY CHOOSE US</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="text-pretty">Why Choose Our Solution?</span>
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Everything you need to automate, optimize, and scale your business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.id}
              className={`group p-8 rounded-2xl border border-primary/20 hover:border-accent/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition duration-300 delay-${idx * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">{benefit.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>

              {/* Hover line */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-primary group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
