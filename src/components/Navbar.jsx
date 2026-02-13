import React, { useEffect, useState } from "react";
import logo from "@/assets/logo/logo-white-phaiju.png";
import MobileLogo from "@/assets/logo/mobile-logo-white-phaiju.png";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScorlled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); //if ScrollY>50 then true otherwise false
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // adding this prevents memory leaks, (returns the callback function, this lets us remove the eventlistener )
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScorlled ? "glass-strong py-3" : "bg-transperant py-5"} z-50 `}
    >
      <nav className="container mx-2 px-6 flex items-center justify-between">
        <a href="#" className="group relative inline-block">
          {/* The "light" layer, initially hidden  */}
          <div className="absolute inset-0 bg-[#38BDF8] blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>

          {/* MOBILE LOGO: Show by default, hide at 'md' (768px) and above */}
          <img
            className="relative z-10 h-10 w-auto block md:hidden transition-all duration-300 group-hover:brightness-110"
            src={MobileLogo} // Make sure this is imported at the top of your file
            alt="Mobile Logo"
          />
          {/* DESKTOP LOGO: Hide by default, show at 'md' and above */}
          <img
            className="relative z-10 h-15 w-auto hidden md:block"
            src={logo}
            alt="Desktop Logo"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 shadow-sm shadow-black/20">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
          }}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/*Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
