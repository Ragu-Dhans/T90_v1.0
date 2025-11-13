"use client"

import { useEffect, useRef, useState } from "react"

export default function CTASection() {
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
    <section ref={ref} className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div
          className={`text-center transition duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pretty">Ready to Transform Your Ideas?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join hundreds of creators and agencies who have already elevated their projects with our premium design
            solutions. Let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition font-medium">
              Start Free Trial
            </button>
            <button className="px-8 py-3 rounded-lg border border-primary bg-transparent text-foreground hover:bg-primary/10 transition font-medium">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
