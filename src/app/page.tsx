import AboutSection from "@/components/aboutSection";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projectsSection";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Header />
      <AboutSection />
      <ProjectsSection />
    </section>
  );
}
