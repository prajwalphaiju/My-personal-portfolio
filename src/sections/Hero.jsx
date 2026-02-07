import backgroundImage from "@/assets/background.png";

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
                Software Enginner
              </span>
            </div>
            {/* Headline */}
            <div>
              <h1 className="space-y-4">
                Turning <span className="text-primary glow text">Ideas</span>{" "}
                into Interactive Reality.
              </h1>
            </div>
          </div>
          {/* Right section - Profile Image */}
        </div>
      </div>
    </section>
  );
};
