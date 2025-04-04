import AboutSection from "@/components/aboutSection";
import EmailSection from "@/components/emailSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projectsSection";

export default function Home() {
  return (
    <section className="max-w-[1280px] flex flex-col items-center justify-center mx-auto">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
      <Footer />
    </section>
  );
}
