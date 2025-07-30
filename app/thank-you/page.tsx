"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react" // Using Lucide for the checkmark icon
import pattern from "../../public/pattern1.png"
 import logo from"../../public/og-img.svg"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-8 text-center bg-cover bg-center bg-no-repeat"style={{
            backgroundImage: `url('${pattern.src}')`,
          }}>
      {/* Icon */}
      <div className="mb-8 text-[#db85bc]">
            <img 
              src={logo.src}
              alt="Logo" 
              className="h-12 w-auto"
            />
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-league-gothic tracking-wider uppercase mb-6 text-[#ffffff]">
        THANKS FOR SIGNING UP!
      </h1>

      {/* Body Text */}
      <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-[#ffffff]/90 font-sans">
        <p>
          We'll be in touch via email with updates and invites to our upcoming events.
        </p>
        
        <p className="italic text-[#db85bc]">
          Stay tuned, your money-circle just got bigger,
        </p>
      </div>

      {/* Signature */}
      <div className="mt-12 font-league-gothic text-4xl text-[#db85bc] tracking-wider">
        in
      </div>
    </div>
  )
}