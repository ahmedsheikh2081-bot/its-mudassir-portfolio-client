import React from "react";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-[#75D6C0]/20 bg-[#070D0D] px-6 py-12 text-white md:px-12 lg:px-24 font-sans">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#75D6C0]/40 bg-[#75D6C0]/10 font-serif text-xl italic text-[#75D6C0]">
            M
          </div>
          <div>
            <span className="block font-serif text-sm tracking-[0.2em] text-white">
              ITS MUDASSIR
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#75D6C0]">
              OFFICIAL
            </span>
          </div>
        </div>

        {/* Center: Tagline / Values */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#75D6C0]">
          <span>Music</span>
          <span className="text-white/30">•</span>
          <span>Passion</span>
          <span className="text-white/30">•</span>
          <span>Always</span>
        </div>

        {/* Right: Copyright, Clickable Developer Tag & Back to Top Button */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <div className="text-center md:text-right">
            <p className="text-[11px] tracking-wider text-[#A1AAA7]">
              © 2026 Its Mudassir Official. All rights reserved.
            </p>
            <p className="mt-1 text-[10px] tracking-widest text-[#75D6C0]">
              Developed & Designed by{" "}
              <a
                href="https://www.linkedin.com/in/muhammad-ahmed-56a42a3aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-white"
              >
                AhmedSheikh
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#75D6C0]/40 text-[#75D6C0] transition-all duration-300 hover:bg-[#75D6C0] hover:text-[#070D0D] hover:shadow-[0_0_15px_rgba(117,214,192,0.4)]"
          >
            <FiArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;