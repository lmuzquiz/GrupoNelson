import { HeroVideoCover } from "@/components/hero-video-cover"

export default function Home() {
  return (
    <main>
      <HeroVideoCover
        videoSrc="parques-industriales-mexicali-nelson-2.mp4"
        posterSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nave-rheem-gulfstream-en-parque-industrial-pknQcmfrQHtzGpMRMRhxfNW4JS5loL.jpg"
        alt="Parque Industrial Gulfstream - Vista aérea de instalaciones modernas"
        overlayOpacity={0.30}
      />
    </main>
  )
}
