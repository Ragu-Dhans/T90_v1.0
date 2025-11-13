"use client"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded bg-accent"></div>
            </div>
            <span className="text-lg font-semibold text-foreground">Theta</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
              Services
            </Link>
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
