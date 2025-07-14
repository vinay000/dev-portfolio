import { ProfileSection } from "@/components/sections/ProfileSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
// import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactSection } from "@/components/sections/ContactSection";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { ProductsSection } from "@/components/sections/ProductsSection";
// import { MorvaLabsSection } from "@/components/sections/MorvaLabsSection";
// import { WorkTogetherSection } from "@/components/sections/WorkTogetherSection";
// import { ProductsSection } from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-transparent rounded-md">
      <div className="w-full max-w-2xl mx-auto">
        <ProfileSection />
        <PortfolioSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        {/* <ContactFormSection /> */}
        {/* <ProjectsSection /> */}
        {/* <ProductsSection /> */}
        {/* <WorkTogetherSection /> */}
        {/* <MorvaLabsSection /> */}
      </div>
    </div>
  );
}
