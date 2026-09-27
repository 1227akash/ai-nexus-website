"use client";

import TextAnimation from "@/components/ui/text-animation";

export default function TextAnimationDemo() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 gap-8 bg-[#09090b] text-white overflow-x-hidden"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(2rem, 5vw, 4rem) 1rem",
        gap: "clamp(2rem, 4vw, 3.5rem)",
        backgroundColor: "#09090b",
        color: "#ffffff",
        fontFamily: "'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div className="flex flex-col items-center gap-4 text-center w-full max-w-5xl mx-auto">
        {/* Subtle Eyebrow */}
        <TextAnimation
          size="sm"
          as="p"
          blockColor="#34d399"
          duration={0.7}
          className="uppercase tracking-widest font-mono font-semibold text-emerald-400"
          style={{ letterSpacing: "0.2em", maxWidth: "36rem" }}
          text="Block-Wipe Motion Design"
        />

        {/* Big Responsive Display Headline */}
        <TextAnimation
          size="display"
          as="h1"
          delay={0.15}
          blockColor="#aaff00"
          duration={0.85}
          className="text-white font-bold max-w-4xl"
          text="Design is not just what it looks like. It is how it feels."
        />

        {/* Responsive Secondary Subtitle */}
        <TextAnimation
          size="base"
          as="p"
          delay={0.35}
          blockColor="#c084fc"
          duration={0.8}
          className="text-neutral-400 max-w-2xl font-normal"
          style={{ lineHeight: 1.6 }}
          text="Craft is the invisible detail separating ordinary from unforgettable experiences."
        />
      </div>
    </div>
  );
}
