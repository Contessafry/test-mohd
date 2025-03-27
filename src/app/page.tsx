import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { SectionProducts } from "@/components/SectionProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full text">
      <Navbar />
      <Header />

      <main className="mt-16">
        <SectionProducts />
      </main>
      <Footer />
    </div>
  );
}
