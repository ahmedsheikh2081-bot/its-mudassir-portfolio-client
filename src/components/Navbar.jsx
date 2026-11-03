
import { useState } from "react";
import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiFacebook,
  SiSnapchat,
  SiThreads,
  SiWhatsapp,
} from "react-icons/si";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Social Media Links
  const socialLinks = [
    {
      name: "Instagram",
      icon: SiInstagram,
      url: "https://www.instagram.com/itsmudasirofficial/?hl=en",
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      url: "https://www.tiktok.com/@its.mudasir.official",
    },
    {
      name: "YouTube",
      icon: SiYoutube,
      url: "https://www.youtube.com/@itsmudasirofficial",
    },
    {
      name: "Facebook",
      icon: SiFacebook,
      url: "https://www.facebook.com/Mudasir.Hussain.Official",
    },
    {
      name: "Snapchat",
      icon: SiSnapchat,
      url: "https://www.snapchat.com/@mudasir5555",
    },
    {
      name: "Threads",
      icon: SiThreads,
      url: "https://www.threads.com/@itsmudasirofficial",
    },
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      url: "https://wa.me/923126535278",
    },
  ];

  // Navigation Links
  const navLinks = [
    { name: "HOME", url: "#home" },
    { name: "CONTACT", url: "#connect" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#75D6C0]/20 bg-[#070D0D]/95 backdrop-blur-md">
      <nav className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-20">

        {/* Brand Logo */}
        <a href="#home" className="flex shrink-0 items-center gap-4">
          <span className="font-serif text-[48px] italic leading-none text-[#75D6C0]">
            M
          </span>

          <span className="flex flex-col font-serif text-white">
            <span className="text-[13px] tracking-[0.22em]">
              ITS MUDASSIR
            </span>

            <span className="mt-1 text-[9px] tracking-[0.42em] text-gray-400">
              OFFICIAL
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="border-none text-[11px] font-semibold tracking-[0.2em] text-white no-underline transition-colors duration-300 hover:text-[#75D6C0]"
              style={{ textDecoration: "none" }}
            >
              {link.name}
            </a>
          ))}

          {/* Desktop Social Icons */}
          <div className="ml-4 flex items-center gap-5 border-l border-white/20 pl-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  title={social.name}
                  target={social.url === "#" ? undefined : "_blank"}
                  rel={social.url === "#" ? undefined : "noopener noreferrer"}
                  className="text-[19px] text-white transition duration-300 hover:-translate-y-1 hover:text-[#75D6C0]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white transition-colors duration-300 hover:text-[#75D6C0] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#75D6C0]/20 bg-[#070D0D] px-6 py-6 lg:hidden">

          {/* Mobile Navigation */}
          <div className="mb-7 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                onClick={() => setIsOpen(false)}
                className="border-none text-xs font-semibold tracking-[0.2em] text-white no-underline transition-colors duration-300 hover:text-[#75D6C0]"
                style={{ textDecoration: "none" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Social Icons */}
          <div className="flex flex-wrap items-center gap-7 border-t border-white/10 pt-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  title={social.name}
                  target={social.url === "#" ? undefined : "_blank"}
                  rel={social.url === "#" ? undefined : "noopener noreferrer"}
                  className="text-2xl text-white transition duration-300 hover:-translate-y-1 hover:text-[#75D6C0]"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
