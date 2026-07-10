import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Vision from "@/components/Vision";
import OurJourney from "@/components/OurJourney";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <Products />
       <WhyUs />
       <Vision />
       <OurJourney />
       <ContactStrip />
      <Footer />
    </>
  );
}