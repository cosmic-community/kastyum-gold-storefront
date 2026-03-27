'use client'

import { useState } from 'react'

type HeroSlide = {
  title: string
  subtitle: string
  imageUrl: string
}

export default function Hero({ slides }: { slides: HeroSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = slides[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (!activeSlide) {
    return null
  }

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Changed: Added slider hero with gradient overlay */}
      <img
        src={activeSlide.imageUrl}
        alt={activeSlide.title}
        width={1400}
        height={700}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <p className="text-xs uppercase tracking-wide text-white/70">Kastyum Gold</p>
          <h1 className="text-4xl font-semibold mt-3">{activeSlide.title}</h1>
          <p className="text-lg mt-4 max-w-lg text-white/90">{activeSlide.subtitle}</p>
          <div className="flex gap-3 mt-6">
            <button className="bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-medium">
              Shop now
            </button>
            <button className="border border-white/40 text-white px-5 py-2 rounded-full text-sm">
              Explore collections
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={activeSlide.imageUrl}
            alt={activeSlide.title}
            width={520}
            height={520}
            className="rounded-3xl shadow-xl object-cover h-[360px] w-full"
          />
        </div>
      </div>

      <div className="absolute left-6 bottom-6 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="h-8 w-8 rounded-full bg-white/20 text-white text-xs"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="h-8 w-8 rounded-full bg-white/20 text-white text-xs"
          aria-label="Next slide"
        >
          ›
        </button>
        <div className="flex gap-2 ml-2">
          {slides.map((_, index) => (
            <button
              key={`hero-dot-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full ${
                index === activeIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}