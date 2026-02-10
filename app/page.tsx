import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Skills />
      <Projects />
      <Encryption />
    </main>
  );
}
