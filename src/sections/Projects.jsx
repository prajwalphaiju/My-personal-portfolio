import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import EcommerceWebsiteImage from "@/assets/project_images/ecommerce-project.png";

const projects = [
  {
    title: "Full-Stack Storefront & API",
    description:
      "A complete shopping system built with a React frontend and a custom Node.js backend. I moved the heavy logic—like price totals and delivery dates—to the server to keep the app secure. I'm currently refactoring the codebase into TypeScript to make it more reliable.",
    image: { EcommerceWebsiteImage },
    tags: ["React", "Node.js", "Express", "Custom API"],
    link: "http://ecommerce-project-react-env.eba-puubxmwv.ap-southeast-2.elasticbeanstalk.com/",
    github: "https://github.com/prajwalphaiju/Ecommerce-Fullstack",
  },
  {
    title: "Full-Stack Storefront & API",
    description:
      "A complete shopping system built with a React frontend and a custom Node.js backend. I moved the heavy logic—like price totals and delivery dates—to the server to keep the app secure. I’m currently refactoring the codebase into TypeScript to make it more reliable.",
    image: { EcommerceWebsiteImage },
    tags: ["React", "Node.js", "Express", "Custom API"],
    link: "#",
    github: "https://github.com/prajwalphaiju/Ecommerce-Fullstack",
  },
  {
    title: "Full-Stack Storefront & API",
    description:
      "A complete shopping system built with a React frontend and a custom Node.js backend. I moved the heavy logic—like price totals and delivery dates—to the server to keep the app secure. I’m currently refactoring the codebase into TypeScript to make it more reliable.",
    image: { EcommerceWebsiteImage },
    tags: ["React", "Node.js", "Express", "Custom API"],
    link: "#",
    github: "https://github.com/prajwalphaiju/Ecommerce-Fullstack",
  },
  {
    title: "Full-Stack Storefront & API",
    description:
      "A complete shopping system built with a React frontend and a custom Node.js backend. I moved the heavy logic—like price totals and delivery dates—to the server to keep the app secure. I’m currently refactoring the codebase into TypeScript to make it more reliable.",
    image: { EcommerceWebsiteImage },
    tags: ["React", "Node.js", "Express", "Custom API"],
    link: "#",
    github: "https://github.com/prajwalphaiju/Ecommerce-Fullstack",
  },
  {
    title: "Full-Stack Storefront & API",
    description:
      "A complete shopping system built with a React frontend and a custom Node.js backend. I moved the heavy logic—like price totals and delivery dates—to the server to keep the app secure. I’m currently refactoring the codebase into TypeScript to make it more reliable.",
    image: { EcommerceWebsiteImage },
    tags: ["React", "Node.js", "Express", "Custom API"],
    link: "#",
    github: "https://github.com/prajwalphaiju/Ecommerce-Fullstack",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-30 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Learning through
            <span className="font-serif italic font-normal text-white">
              {" "}
              building.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A look at my journey through code—from building functional
            interfaces to solving complex logic. I focus on creating clean,
            usable tools that actually solve problems.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video ">
                <img
                  src={Object.values(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/*Overlay links */}\
                <div className="absolute inset-0 flex items-center gap-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View all Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
