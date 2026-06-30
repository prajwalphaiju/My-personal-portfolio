import {
  Lightbulb,
  Users,
  ShieldCheck,
  Terminal,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Finishing Strong",
    description:
      "I treat deadlines with professional accountability. I make sure work stays finished the first time, every time.",
  },
  {
    icon: Terminal,
    title: "Production-Ready",
    description:
      "I build for the real world, not just my local machine. I focus on writing stable code that actually stays up.",
  },
  {
    icon: CheckCircle2,
    title: "Catching Bugs Early",
    description:
      "I use TypeScript to keep patterns clean and predictable. Catching errors during development is my default.",
  },
  {
    icon: Users,
    title: "Team Mindset",
    description:
      "I treat code as a shared asset. I prioritize clear documentation to keep the whole team moving forward.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-30 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="animate-fade-in">
              <span className="text-3xl text-secondary-foreground text-medium font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl py-9 md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering Scalable Solutions with
              <span className="font-serif italic font-normal text-white">
                {" "}
                a Production-First Mindset.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I build with a production-first mindset — focusing on stability, scalability, and long-term maintainability over quick fixes. I believe “it works on my machine” isn’t good enough for real-world systems.
              </p>
              <p>
                I take pride in clean, reliable code. Whether it’s catching issues early with TypeScript or building responsive applications with modern frameworks, my goal is simple: deliver software that works consistently and adds real value.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                From side projects to production systems — I build code that lasts.
              </p>
            </div>
          </div>
          {/* Right Column Highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
