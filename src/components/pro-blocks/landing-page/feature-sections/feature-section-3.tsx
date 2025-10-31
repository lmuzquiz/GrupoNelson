"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Rocket } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection3() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8 md:gap-12">
          <div className="section-title-gap-lg flex flex-col">
            <Tagline>Turnkey Solutions (Soluciones llave en mano)</Tagline>
            <h2 className="heading-lg text-foreground">
              Headline that shows solution's impact on user success
            </h2>
            <p className="text-muted-foreground text-base">
              Explain in one or two concise sentences how your solution
              transforms users' challenges into positive outcomes. Focus on the
              end benefits that matter most to your target audience. Keep it
              clear and compelling.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
                <Rocket className="text-primary h-5 w-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground font-semibold">
                  Benefit driven feature title
                </h3>
                <p className="text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
                <Rocket className="text-primary h-5 w-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground font-semibold">
                  Benefit driven feature title
                </h3>
                <p className="text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-1">
          <AspectRatio ratio={1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Feature section image"
              fill
              className="rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
