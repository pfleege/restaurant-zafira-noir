// src/app/page.tsx

import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/content-sections/Hero";
import Story from "@/components/content-sections/Story";
import MenuShowcase from "@/components/content-sections/MenuShowcase";
import Gallery from "@/components/content-sections/Gallery";
import Reservation from "@/components/content-sections/Reservation";
import Footer from "@/components/content-sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <MenuShowcase />
      <Gallery />
      <Reservation />
      <Footer />
    </>
  );
}
