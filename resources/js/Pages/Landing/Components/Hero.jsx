import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
import { Heart, Phone } from "lucide-react"


export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/img/friendly-veterinarian-with-happy-golden-retriever-.jpg" alt="Dr. Sarah with pets" className="w-full h-full object-cover" />
        {/* Violet gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Auth Links */}
        <div className="absolute top-4 right-4 z-10 space-x-4">
            <Link href="/login" className="text-white font-semibold hover:underline">Login</Link>
            <Link href="/register" className="text-white font-semibold hover:underline">Register</Link>
        </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-8 h-8 text-accent fill-accent animate-pulse" />
          <span className="text-accent font-semibold text-lg">Compassionate Care Since 2015</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Your Trusted Partner in Pet Care</h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Hi, I'm Dr. Sarah Mitchell. I believe every pet deserves personalized, loving care. Let me be your partner in
          keeping your furry family members healthy and happy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            Book an Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  )
}
