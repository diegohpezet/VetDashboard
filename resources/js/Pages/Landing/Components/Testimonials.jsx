"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Jennifer Thompson",
    pet: "Max (Golden Retriever)",
    image: "/img/happy-golden-retriever-smiling.jpg",
    text: "Dr. Sarah is absolutely wonderful! She took the time to explain everything about Max's condition and made us both feel so comfortable. I wouldn't trust anyone else with my furry best friend.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    pet: "Luna (Persian Cat)",
    image: "/img/beautiful-persian-cat-with-blue-eyes.jpg",
    text: "Luna used to be terrified of vet visits, but Dr. Sarah's gentle approach has completely changed that. She genuinely cares about each animal she treats. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    pet: "Charlie (Beagle)",
    image: "/img/cute-beagle-dog-looking-happy.jpg",
    text: "The personalized care Charlie receives is outstanding. Dr. Sarah remembers details about him from visit to visit and always takes time to answer all my questions. She's the best!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Happy Pets, Happy Owners</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Don't just take my word for it—hear from the families I've had the privilege to serve
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Pet Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].pet}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-foreground">"{testimonials[currentIndex].text}"</p>

                  <div>
                    <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].pet}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
