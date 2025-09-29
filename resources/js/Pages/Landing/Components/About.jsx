import { Award, Heart, Stethoscope } from "lucide-react"

export function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/img/professional-female-veterinarian-portrait-smiling-.jpg" alt="Dr. Sarah Mitchell" className="w-full h-auto" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Meet Dr. Sarah Mitchell</h2>

            <p className="text-lg leading-relaxed mb-6 text-foreground">
              With over 10 years of experience in veterinary medicine, I've dedicated my career to providing
              compassionate, personalized care for pets and peace of mind for their owners.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-foreground">
              I believe that the best veterinary care comes from building lasting relationships. When you bring your pet
              to me, you're not just a client number—you're part of my extended family, and I treat every animal as if
              they were my own.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Board Certified</h3>
                  <p className="text-muted-foreground">DVM from Cornell University, specialized in small animal care</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Compassionate Approach</h3>
                  <p className="text-muted-foreground">
                    Fear-free certified, ensuring stress-free visits for your pets
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Comprehensive Care</h3>
                  <p className="text-muted-foreground">From wellness exams to complex medical cases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
