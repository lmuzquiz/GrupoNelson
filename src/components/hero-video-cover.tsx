"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroVideoCoverProps {
  videoSrc: string
  posterSrc: string
  alt?: string
  overlayOpacity?: number
  className?: string
}

export function HeroVideoCover({
  videoSrc,
  posterSrc,
  alt = "Hero background",
  overlayOpacity = 0.4,
  className = "",
}: HeroVideoCoverProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const attemptPlay = async () => {
      if (hasStartedRef.current) return
      hasStartedRef.current = true

      try {
        video.muted = true
        video.playsInline = true
        const playPromise = video.play()

        if (playPromise !== undefined) {
          await playPromise
          setTimeout(() => {
            setIsVideoLoaded(true)
          }, 100)
        }
      } catch (error) {
        setIsVideoLoaded(true)
      }
    }

    const handleCanPlay = () => {
      if (!hasStartedRef.current && video.readyState >= 2) {
        attemptPlay()
      }
    }

    const handleCanPlayThrough = () => {
      if (!hasStartedRef.current) {
        attemptPlay()
      }
    }

    const handleLoadedData = () => {
      if (!hasStartedRef.current && video.readyState >= 2) {
        attemptPlay()
      }
    }

    if (video.readyState >= 2) {
      attemptPlay()
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("canplaythrough", handleCanPlayThrough)
    video.addEventListener("loadeddata", handleLoadedData)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("canplaythrough", handleCanPlayThrough)
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

  const topOpacity = Math.round(overlayOpacity * 0.75 * 100)
  const midOpacity = Math.round(overlayOpacity * 0.5 * 100)
  const bottomOpacity = Math.round(overlayOpacity * 0.25 * 100)

  return (
    <section className={`relative w-full h-screen overflow-hidden ${className}`} aria-label="Hero section">
      {/* Fixed aspect ratio container to prevent CLS */}
      <div className="absolute inset-0">
        {/* Static image - loads immediately for optimal FCP */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${posterSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label={alt}
        />

        {/* Video element - transitions in smoothly */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-label={alt}
        >
          <source src={videoSrc} type="video/mp4" />
          {"Your browser does not support the video tag."}
        </video>

        {/* Intelligent overlay for contrast control */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,${topOpacity / 100}), rgba(0,0,0,${midOpacity / 100}), rgba(0,0,0,${bottomOpacity / 100}))`,
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 ">
          <div className="max-w-md bg-blue-600/60 backdrop-blur-sm rounded-2xl p-8 border-1 border-white/20 shadow-lg">
            {/* Badge section */}
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">{"Built to Suit"}</span>
              </div>
              <div className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <span className="text-sm font-medium">{"Sustainable Design"}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold tracking-tight text-white text-balance md:text-4xl lg:text-5xl xl:text-5xl mb-6">
              {"Los Expertos en Parques Industriales en Méxicali"}
            </h1>

            {/* Description */}
            <p className="text-lg text-white/70 text-pretty md:text-xl lg:text-xl max-w-3xl mb-10 leading-relaxed">
              {
                "60 años creando soluciones llave en mano para empresas globales en parques y espacios industriales en Méxicali"
              }
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6 h-auto">
                {"Conocer más"}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-base px-8 py-6 h-auto text-white border border-white/20 hover:bg-white/10 hover:text-white"
              >
                <span>{"Contactar"}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
