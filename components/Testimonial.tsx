"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    occupation: "Accountant",
    review: "Our trip to Sri Lanka was absolutely amazing. From Sigiriya to Mirissa, everything was perfectly organized. The safari in Yala was the highlight of our journey!",
    image: "/person1.png",
  },
  {
    id: 2,
    name: "John Smith",
    occupation: "Journalist, HWO News",
    review: "The train ride from Kandy to Ella was breathtaking. The team made everything smooth and stress-free. Highly recommended for anyone visiting Sri Lanka.",
    image: "/person2.png",
  },
  {
    id: 3,
    name: "Tamara Lee",
    occupation: "Managing Director",
    review: "Beautiful beaches, incredible culture, and warm hospitality. The cultural triangle tour was exceptional. Will definitely return for another adventure!",
    image: "/person3.png",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate which testimonials to show
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <Image
          src="/sri-lanka-outline.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] uppercase mb-4">
            Traveler's <span className="text-[#C9A227]">Experiences</span>
          </h2>
          <p className="font-body text-base text-gray-600 max-w-2xl">
            Hear what our guests say about their Sri Lanka journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="flex justify-start mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Review Text */}
              <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                {testimonial.review}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#C9A227] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Name and Occupation */}
              <div>
                <p className="font-body text-base font-semibold text-[#0D1B2A]">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-gray-500">
                  {testimonial.occupation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-lg bg-[#2C2C2C] hover:bg-[#0D1B2A] text-white flex items-center justify-center transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-lg bg-[#C9A227] hover:bg-[#A8841A] text-white flex items-center justify-center transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
