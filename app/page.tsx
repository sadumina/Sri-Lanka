import Navbar from "@/components/Navbar";
import Hero from "@/components/Hreo";
import WhyChoose from "@/components/WhyChoose";
import WhySriLanka from "@/components/WhySriLanka";
import Blog from "@/components/Blog";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import InspirationSection from "@/components/InspirationSection";
import WhyChoose1 from "@/components/Tour_Guide";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <WhySriLanka />
      <HowItWorksSteps />
      <Blog />
      <WhyChoose1 />
      <HowItWorks />
      <Testimonial />
      {/* Newsletter crossing effect */}
      <div className="relative z-10 -mb-16">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}