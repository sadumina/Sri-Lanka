import Navbar from "@/components/Navbar";
import Hero from "@/components/Hreo";
import ExclusiveJourneys from "@/components/ExclusiveJourneys";
import WhySriLanka from "@/components/WhySriLanka";
import Features from "@/components/Features";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import Blog from "@/components/Blog";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExclusiveJourneys />
      <WhySriLanka />
      <Features />
      <HowItWorksSteps />
      <Blog />
      <WhyChoose />
      <HowItWorks />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}