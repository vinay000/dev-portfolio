import { ProfileSection } from "@/components/sections/ProfileSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ProductsSection } from "@/components/sections/ProductsSection"
import { ContactFormSection } from "@/components/sections/ContactFormSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { MorvaLabsSection } from "@/components/sections/MorvaLabsSection"
import { WorkTogetherSection } from "@/components/sections/WorkTogetherSection"

export default function Home() {
    return (

        <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-transparent rounded-md">
            <div className="w-full max-w-2xl mx-auto">
                <ProfileSection />
                <ProjectsSection />
                <PortfolioSection />
                <ProductsSection />
                <WorkTogetherSection />
                <MorvaLabsSection />
                <ContactFormSection />
            </div>
        </div>

    )
}


