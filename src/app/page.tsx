import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full text">
      <Navbar />
      <Header />
      <main className="flex h-screen flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <Footer />
    </div>
  );
}
