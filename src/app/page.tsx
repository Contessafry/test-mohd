import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ButtonCopy } from "@/components/Header/partials/ButtonCopy";
import { Navbar } from "@/components/Navbar";
import { SectionCopyCta } from "@/components/SectionCopyCta";
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
      <SectionCopyCta />
      <Footer />
    </div>
  );
}
