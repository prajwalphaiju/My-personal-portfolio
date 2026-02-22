const experiences = [
  {
    period: "2025, Jan — 2025, April",
    role: "IT support intern",
    company: "909IT Solutions (The-Prime IT services)",
    location: "Fyshwick, ACT",
    description:
      "Provided technical support to clients, troubleshooting hardware and software issues, and ensuring smooth IT operations.",
    technologies: [
      "Microsoft Intune",
      "FreshService",
      "Active Directory",
      "Remote Desktop",
    ],
    current: false,
  },
  {
    period: "Completed on 2025", 
    role: "Bachelor of Information Technology",
    company: "Crown Institute of Higher Education (CIHE)",
    location: "Gungahlin, ACT",
    description:
      "Focused on software development and systems architecture, providing the core foundation for my current engineering projects.",
    technologies: [
      "Software Engineering",
      "Data Structures",
      "Web Development",
    ],
    current: false,
    type: "education",
  },
  {
    period: "2022, Aug — Present",
    role: "Replenishment Team Member",
    company: "Bunnings Warehouse",
    location: "Tuggeranong, ACT",
    description:
      "Responsible for maintaining stock levels, organizing inventory, and ensuring that products are replenished efficiently to meet customer demand.",
    technologies: [
      "Inventory Management Systems",
      "Teams",
      "Zebra Mobile Devices",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-medium font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience &{" "}
            <span className="font-serif italic font-normal text-white">
              education.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A mix of technical support and operational roles that have shaped my
            problem-solving skills and attention to detail.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0,8)]" />
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className=" absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {experience.current && (
                    <span
                      /* Current Role Indicator */ className="absolute inset-0 rounded-full bg-primary/50 animate-ping"
                    />
                  )}
                </div>
                {/* Experience Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border ${
                      experience.type === "education"
                        ? "border-highlight/30"
                        : "border-primary/30"
                    } hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium ">
                      {experience.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {experience.role}
                    </h3>
                    <p className="text-muted-foreground">
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground">
                      {experience.location}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {experience.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
