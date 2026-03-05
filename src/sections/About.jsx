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
              <span className="text-secondary-foreground text-medium font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering Scalable Solutions with
              <span className="font-serif italic font-normal text-white">
                {" "}
                a Production-First Mindset.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I've learned that the "it works on my machine" mindset is the
                fastest way to slow down a team. I don't just write code to
                finish a ticket; I build with the long-term maintenance in mind.
                For me, that means choosing stability and scalability over quick
                hacks, ensuring that what I deploy today doesn't become someone
                else's headache tomorrow.
              </p>
              <p>
                I take a lot of pride in the technical details. Whether it's
                using TypeScript to catch a breaking bug before it ever hits the
                browser or structuring a Next.js app to be truly responsive, I
                treat every project with professional discipline. I'm not just
                looking to hit a deadline; I'm looking to deliver something that
                is reliable enough for real people to use every day.
              </p>
              <p>
                At the end of the day, I'm a problem solver who actually enjoys
                the grind of figuring out a complex technical blocker. I thrive
                in environments where I can dive into new tools, adapt quickly,
                and contribute to a codebase that values quality over shortcuts.
                I'm looking for a team that wants a developer who takes
                ownership of their work and doesn't need constant hand-holding
                to get things across the finish line.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My goal is simple: I want to build stuff that doesn't break. I'm
                focused on moving past "it works on my machine" and actually
                delivering code that is stable, clean, and easy for a team to
                maintain. I'm here to bridge the gap between a side project and
                a production-ready app, making sure every line of code I write
                adds real value to the product.
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
