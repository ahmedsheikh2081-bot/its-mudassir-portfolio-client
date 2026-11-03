import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiFacebook,
  SiSnapchat,
  SiThreads,
  SiWhatsapp,
} from "react-icons/si";

import { FiArrowRight } from "react-icons/fi";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/itsmudasirofficial/?hl=en",
    icon: SiInstagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@its.mudasir.official",
    icon: SiTiktok,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@itsmudasirofficial",
    icon: SiYoutube,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Mudasir.Hussain.Official",
    icon: SiFacebook,
  },
  {
    name: "Snapchat",
    url: "https://www.snapchat.com/@mudasir5555",
    icon: SiSnapchat,
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@itsmudasirofficial",
    icon: SiThreads,
  },
];

const whatsappLink = {
  name: "WhatsApp",
  url: "https://wa.me/923126535278",
  icon: SiWhatsapp,
};

const SocialLinks = () => {
  const WhatsappIcon = whatsappLink.icon;

  return (
    <section
      id="connect"
      className="relative isolate overflow-hidden bg-[#070D0D] px-6 py-24 font-sans text-white md:px-12 lg:px-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#75D6C0]/[0.04] blur-[150px]" />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[1.1fr_1.2fr] lg:gap-16">

        {/* Left Side: Heading & Description matching image layout */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#75D6C0]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#75D6C0]">
              FOLLOW & CONNECT
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[60px]">
            Let’s Stay <br />
            <span className="font-normal italic text-[#75D6C0]">Connected.</span>
          </h2>

          <p className="mt-6 max-w-[390px] text-sm font-normal leading-relaxed text-[#A1AAA7] sm:text-[15px]">
            Follow me on my social media platforms for the latest updates, covers and more.
          </p>
        </div>

        {/* Right Side: Pill Buttons Grid */}
        <div className="flex flex-col gap-3.5">
          {/* Top 6 Grid Pills */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-full border border-[#75D6C0]/30 bg-[#070D0D]/90 px-6 py-3.5 transition-all duration-300 hover:border-[#75D6C0] hover:bg-[#75D6C0]/10 hover:shadow-[0_0_20px_rgba(117,214,192,0.2)]"
                >
                  <div className="flex items-center gap-3.5">
                    <Icon size={18} className="text-white transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-semibold tracking-wide text-white">
                      {social.name}
                    </span>
                  </div>

                  <div className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#75D6C0]">
                    <FiArrowRight size={16} />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom Full-Width WhatsApp Pill */}
          <div>
            <a
              href={whatsappLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-full border border-[#75D6C0]/30 bg-[#070D0D]/90 px-6 py-3.5 transition-all duration-300 hover:border-[#75D6C0] hover:bg-[#75D6C0]/10 hover:shadow-[0_0_20px_rgba(117,214,192,0.2)]"
            >
              <div className="flex items-center gap-3.5">
                <WhatsappIcon size={18} className="text-white transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs font-semibold tracking-wide text-white">
                  {whatsappLink.name}
                </span>
              </div>

              <div className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#75D6C0]">
                <FiArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialLinks;