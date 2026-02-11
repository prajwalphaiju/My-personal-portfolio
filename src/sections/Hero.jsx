import { Button } from "@/components/Button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import backgroundImage from "@/assets/background.png";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}

      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/80 to-background
        "
        />
      </div>

      {/* Blue DOts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 animate-pulse"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${5 + Math.random() * 25}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div className="container mx-auto px-6 pt-32 pb-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left section - Text Content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass ">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Turning <span className="text-primary glow-text">Ideas</span>{" "}
                into
                <br />{" "}
                <span className="font-serif italic font-normal text-white">
                  Interactive Reality.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Prajwal Phaiju — IT Graduate and Software Engineer. I
                build production-ready applications with a strong focus on
                stability, performance, and reliability.
                <br />
                <br />
                <span className="font-serif  font-normal text-white">
                  React, TypeScript, Node.js — engineered for real-world use.
                </span>
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download Resume
              </AnimatedBorderButton>
            </div>
            {/* Social Links*/}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                { icon: Github, href: "https://github.com/prajwalphaiju" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/prajwalphaiju/",
                },
              ].map((social, index) => (
                <a key={index} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon  className="w-6 h-6"/>}
                </a>
              ))}
            </div>
          </div>
          {/* Right section - Profile Image */}
        </div>
      </div>
    </section>
  );
}; 
