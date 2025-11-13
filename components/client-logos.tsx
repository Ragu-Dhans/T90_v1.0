"use client"

import { useEffect, useRef, useState } from "react"

const clients = [
  { name: "Ferisk", symbol: "F" },
  { name: "Books", symbol: "B" },
  { name: "Opal", symbol: "O" },
  { name: "Dune", symbol: "D" },
  { name: "Oasis", symbol: "S" },
]

export default function ClientLogos() {
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
    <section ref={ref} className="py-16 px-4 bg-gradient-to-b from-background to-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <p
          className={`text-center text-muted-foreground text-sm mb-8 transition duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Trusted by leading companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, idx) => (
            <div
              key={client.name}
              className={`flex items-center gap-2 text-foreground/60 hover:text-foreground transition duration-300 delay-${idx * 100} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="w-8 h-8 rounded-lg border border-primary/30 flex items-center justify-center text-xs font-semibold">
                {client.symbol}
              </div>
              <span className="font-medium text-sm">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
