"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg px-12 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Heading */}
            <div>
              <h2 className="font-display text-5xl lg:text-6xl font-bold text-[#6B7280]">
                Our Newsletter
              </h2>
            </div>

            {/* Right: Email Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="w-14 h-14 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-display text-xl font-semibold text-[#0D1B2A]">
                    Thank you for subscribing!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Email Label */}
                  <label htmlFor="newsletter-email" className="block font-body text-lg text-[#6B7280] mb-4">
                    Email
                  </label>

                  {/* Input and Button */}
                  <div className="flex gap-3">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 font-body text-base text-gray-700 placeholder:text-[#C9A588] bg-[#F3F4F6] px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C9A227]/30 transition-all"
                    />
                    <button 
                      type="submit" 
                      className="font-body font-semibold text-base text-white bg-[#C9A227] hover:bg-[#A8841A] px-10 py-4 rounded-xl transition-all duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
