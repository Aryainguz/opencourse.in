import { CallToAction } from "@/app/_components/CallToAction";
import { Footer } from "@/app/_components/Footer";
import Hero from "@/app/_components/Hero";
import { LogoTicker } from "@/app/_components/LogoTicker";
import Navbar from "@/app/_components/Navbar";
import { Pricing } from "@/app/_components/Pricing";
import { ProductShowcase } from "@/app/_components/ProductShowcase";
import { Testimonials } from "@/app/_components/Testimonials";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero/>
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
      </>
  );
}
