import ShaderHeroBackground from "@/components/shader-hero-background"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import RotatingGallery from "@/components/rotating-gallery"
import CTASection from "@/components/cta-section"
import ClientLogos from "@/components/client-logos"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero with background */}
      <div className="relative w-full h-screen overflow-hidden">
        <ShaderHeroBackground />
        <Navigation />
        <HeroSection />
      </div>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Rotating Gallery */}
      <RotatingGallery />

      {/* CTA Section */}
      <CTASection />

      {/* Client Logos */}
      <ClientLogos />

      {/* Footer */}
      <Footer />
    </div>
  )
}
