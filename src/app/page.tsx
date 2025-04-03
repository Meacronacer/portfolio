import AboutSection from "@/components/aboutSection";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projectsSection";

export default function Home() {
  return (
    <section className="max-w-[1280px] flex flex-col items-center justify-center mx-auto">
      <Navbar />
      <Header />
      <AboutSection />
      <ProjectsSection />
    </section>
  );
}
