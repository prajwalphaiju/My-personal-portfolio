import { Github, Linkedin } from "lucide-react";
import MobileLogo from "@/assets/logo/mobile-logo-white-phaiju.png";
import logo from "@/assets/logo/logo-white-phaiju.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/prajwalphaiju", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/prajwalphaiju/",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
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
            <p className="text-sm text-muted-foreground mt-2">
              {" "}
              © {currentYear} Prajwal Phaiju, All rights reserved.
            </p>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="glass p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
