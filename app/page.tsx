"use client"

import CarouselSection from "@/components/CarouselSection"
import FormSection from "@/components/FormSection"
import { useRef } from "react"

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {/* Section 1: Carousel */}
      <section className="h-screen snap-start">
        <CarouselSection onScrollToForm={scrollToForm} />
      </section>

      {/* Section 2: Form */}
      <section ref={formRef} className="h-screen snap-start">
        <FormSection />
      </section>
    </div>
  )
}
