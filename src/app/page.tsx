import EduCard from "@/components/EduCard";
import { Hero } from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import SpotlightComponent from "@/components/SpotlightComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <SpotlightComponent/>
      <EduCard/>
      <Portfolio />
      <Skills />
    </main>
  );
}
