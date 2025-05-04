import HeroSectionPage from "@/components/hero-section/page";
import AboutSectionPage from "@/components/about-section/page";
import SkillsSectionPage from "@/components/skills-section/page";
import ProjectsSectionPage from "@/components/projects-section/page";
import TestiSectionPage from "@/components/testi-section/page";
import ContactSectionPage from "@/components/contact-section/page";

export default function HomePage() {
  return (
    <main>
      <div>
        <HeroSectionPage />
        <AboutSectionPage />
        <SkillsSectionPage />
        <ProjectsSectionPage />
        <TestiSectionPage />
        <ContactSectionPage />
      </div>
    </main>
  );
}
