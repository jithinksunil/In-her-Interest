"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import logo from "../public/IHI_logo new_secondary logo_new 1.svg"
import img0 from "../public/carouselImages/img0.jpg"
import img1 from "../public/carouselImages/img1.jpg"
import img2 from "../public/carouselImages/img2.jpg"
import img3 from "../public/carouselImages/img3.jpg"
import img4 from "../public/carouselImages/img4.jpg"
import img5 from "../public/carouselImages/img5.jpg"
import img6 from "../public/carouselImages/img6.jpg"
import img7 from "../public/carouselImages/img7.jpg"
import img8 from "../public/carouselImages/img8.jpg"
import img9 from "../public/carouselImages/img9.jpg"


const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9]

export default function CarouselSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden snap-start">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`carousel-${idx}`}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/50 to-transparent" />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-28 z-30">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Text Content - Updated to match image */}
      <div className="absolute bottom-32 left-28 z-20 text-[#f7e7d6] space-y-20">
        <div>

        <div className="space-y-2">
          <h1 className="text-7xl font-bold  font-league-gothic tracking-[0.03em] uppercase leading-none ">MONEY TALK THAT</h1>
          <h1 className="text-7xl font-bold  font-league-gothic tracking-[0.03em] uppercase leading-none">
            FEELS LIKE A <span className="text-[#db85bc]">GROUP CHAT.</span>
          </h1>
        </div>
        <p className="text-2xl tracking-wide">No jargon. No shame. Just clarity.</p>
        </div>
        <button
          onClick={onScrollToForm}
          className="px-8 py-3 border text-white text-[#3c1c1a] text-xl font-bold rounded-md hover:bg-[#e9a5d1] hover:text-black hover:border-black transition-colors duration-300"
        >
          Become a Member
        </button>
      </div>
    </div>
  )
}