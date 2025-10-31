import { HeroVideoCover } from "@/components/hero-video-cover"
import { WorldClass } from "@/components/sections/world-class"
import { TurnkeySolutions } from "@/components/sections/turnkey-solutions"
import { BuildToSuit } from "@/components/sections/build-to-suit"
import { IndustrialExcellence } from "@/components/sections/industrial-excellence"
import { EngineeringInnovation } from "@/components/sections/engineering-innovation"
import { TrustedPartner } from "@/components/sections/trusted-partner"
import { SustainableDesign } from "@/components/sections/sustainable-design"
import { OperationalReliability } from "@/components/sections/operational-reliability"
import { ProvenExperience } from "@/components/sections/proven-experience"
import { GlobalStandards } from "@/components/sections/global-standards"
import { FAQs } from "@/components/sections/faqs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroVideoCover
        videoSrc="parques-industriales-mexicali-nelson-2.mp4"
        posterSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nave-rheem-gulfstream-en-parque-industrial-pknQcmfrQHtzGpMRMRhxfNW4JS5loL.jpg"
        alt="Parque Industrial Gulfstream - Vista aérea de instalaciones modernas"
        overlayOpacity={0.30}
      />
      <WorldClass />
      <TurnkeySolutions />
      <BuildToSuit />
      <IndustrialExcellence />
      <EngineeringInnovation />
      <TrustedPartner />
      <SustainableDesign />
      <OperationalReliability />
      <ProvenExperience />
      <GlobalStandards />
      <FAQs />
      <Footer />
    </main>
  )
}
