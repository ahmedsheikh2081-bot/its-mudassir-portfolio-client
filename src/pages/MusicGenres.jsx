import { Music2 } from "lucide-react";

const genres = [
  "Sufi",
  "Folk",
  "Pop",
  "Rock",
  "Funk",
  "Semi-Classical",
  "Love Songs",
  "Live Shows", // Naya button add kiya gaya hai
];

const MusicGenres = () => {
  return (
    <section
      id="music"
      className="relative isolate overflow-hidden border-y border-[#75D6C0]/20 bg-[#070D0D] px-6 py-20 text-white md:px-12 lg:px-24 font-sans"
    >
      {/* Background Wave / Glow Effects */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-[#75D6C0]/20 opacity-30 blur-[1px]" />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-[#75D6C0]/20 opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-[#75D6C0]/20 opacity-30 blur-[1px]" />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* Left Content */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#75D6C0]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#75D6C0]">
              MUSIC & GENRES
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
            Different Vibes, <br />
            Same <span className="font-normal italic text-[#75D6C0]">Passion.</span>
          </h2>

          <p className="mt-6 max-w-[420px] text-sm font-normal leading-relaxed text-[#A1AAA7] sm:text-[15px]">
            From soulful Sufi to energetic pop — I love exploring a variety of sounds and emotions.
          </p>
        </div>

        {/* Right Genre Pills Grid layout */}
        <div className="flex flex-wrap gap-3.5 max-w-[460px]">
          {genres.map((genre) => (
            <div
              key={genre}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[#75D6C0]/40 bg-[#070D0D]/90 px-6 py-3 text-xs font-semibold tracking-wider text-white shadow-lg transition-all duration-300 hover:border-[#75D6C0] hover:bg-[#75D6C0]/15 hover:text-[#75D6C0] hover:shadow-[0_0_20px_rgba(117,214,192,0.25)]"
            >
              <Music2
                size={15}
                className="text-[#75D6C0] transition-transform duration-300 group-hover:scale-110"
              />
              <span>{genre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicGenres;