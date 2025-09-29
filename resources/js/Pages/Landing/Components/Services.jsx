import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Syringe, Scissors, Pill, Activity, Bone, Sparkles } from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Wellness Exams",
    description: "Comprehensive health checkups to keep your pet in optimal condition",
    image: "/img/veterinarian-examining-happy-dog-with-stethoscope.jpg",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Up-to-date immunizations to protect your pet from preventable diseases",
    image: "/img/cute-puppy-getting-vaccination-from-caring-vet.jpg",
  },
  {
    icon: Scissors,
    title: "Surgery",
    description: "Safe surgical procedures with modern equipment and careful monitoring",
    image: "/img/veterinary-surgical-suite-with-modern-equipment.jpg",
  },
  {
    icon: Pill,
    title: "Dental Care",
    description: "Professional teeth cleaning and oral health maintenance",
    image: "/img/cat-getting-dental-checkup-from-veterinarian.jpg",
  },
  {
    icon: Bone,
    title: "Nutrition Counseling",
    description: "Personalized diet plans for your pet's specific needs and lifestyle",
    image: "/img/healthy-pet-food-and-nutrition-consultation.jpg",
  },
  {
    icon: Sparkles,
    title: "Grooming Services",
    description: "Professional grooming to keep your pet looking and feeling their best",
    image: "/img/fluffy-dog-after-professional-grooming-session.jpg",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Services I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive veterinary care tailored to your pet's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover object-[75%_25%]"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
