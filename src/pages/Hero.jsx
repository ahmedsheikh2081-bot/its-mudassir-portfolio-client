
import heroImage from "../assets/hero.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#070D0D] px-6 pb-16 pt-32 text-white font-sans md:px-12 lg:px-20"
    >
      {/* Background Lighting & Glow Effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[550px] w-[550px] rounded-full bg-[#75D6C0]/[0.05] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#75D6C0]/[0.04] blur-[150px]" />

      {/* Main Grid Section */}
      <div className="relative mx-auto grid min-h-[calc(100vh-160px)] max-w-[1440px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* Left Column */}
        <div className="order-2 py-6 lg:order-1 lg:py-0">

          {/* Top Category Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#75D6C0]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#75D6C0]">
              ITS MUDASIR OFFICIAL
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-[48px] font-normal leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
            Music <br />
            is not just sound, <br />
            <span className="font-light italic text-[#75D6C0]">
              it's my story.
            </span>
          </h1>

          {/* Intro Description */}
          <p className="mt-8 max-w-[460px] text-sm leading-relaxed text-[#A1AAA7] sm:text-base md:text-[15px]">
            I'm Mudasir — a singer and music lover, exploring different
            genres and emotions through my voice. Welcome to my space.
          </p>

          {/* Artist Signature */}
          <div className="mt-6">
            <span className="font-serif text-3xl italic tracking-wider text-[#75D6C0]/90">
              Mudasir
            </span>
          </div>

          {/* Artist Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/40">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#75D6C0]" />
              Singer
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#75D6C0]" />
              Musician
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#75D6C0]" />
              Artist
            </span>
          </div>
        </div>

        {/* Right Column - Portrait */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[480px]">

            {/* Circular Frame */}
            <div className="pointer-events-none absolute -inset-6 rounded-full border border-[#75D6C0]/20 bg-[#75D6C0]/[0.03] blur-sm" />
            <div className="pointer-events-none absolute -inset-12 rounded-full border border-[#75D6C0]/10" />

            {/* Portrait Image */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#111B19] shadow-2xl transition-all duration-500 hover:border-[#75D6C0]/40">
              <img
                src={heroImage}
                alt="Mudasir Hussain"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D0D] via-transparent to-transparent opacity-80" />

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-2 h-0.5 w-8 bg-[#75D6C0]" />
                <p className="font-serif text-2xl italic text-white sm:text-3xl">
                  The Art of Music
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-[#75D6C0]">
                  Sing • Feel • Connect
                </p>
              </div>
            </div>

            {/* Right Side Vertical Label */}
            <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-medium uppercase tracking-[0.5em] text-white/30 xl:block">
              SING • FEEL • CONNECT
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative mx-auto mt-12 flex max-w-[1440px] items-center justify-between border-t border-white/10 pt-6">
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            Scroll to explore
          </span>
          <span className="h-px w-12 bg-white/10" />
        </div>

        <a
          href="#music"
          aria-label="Scroll to next section"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#75D6C0]/40 text-[#75D6C0] transition-all duration-300 hover:bg-[#75D6C0] hover:text-[#070D0D]"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
