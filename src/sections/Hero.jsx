import HeroBackground from "../assets/hero-bg.jpg";
import { Button } from "../components/button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import selfImage from "../assets/Avatar.png";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GraphQL",
  "SQL",
  "REST APIs",
  "Material-UI",
  "Bootstrap",
  "Jest",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={HeroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* GREEN DOTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift 50s ${15 + Math.random() * 20}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer | Full Stack Developer
              </span>
            </div>

            {/* HEADLINE */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Welcome to my{" "}
                <span className="text-primary glow-text">portfolio</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Jagdeeo Tiwana - I am a passionate software engineer
                with expertise in building scalable web applications and
                creating intuitive user experiences. Explore my projects and
                skills to see how I can contribute to your team.
              </p>
            </div>
            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/jtiwana-git?tab=repositories",
                },
                {
                  icon: FaLinkedin,
                  href: "https://uk.linkedin.com/in/jagdeep-tiwana-02954a226",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={selfImage}
                  alt="Jagdeep Tiwana"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies that I have worked with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-6 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary "
        ></a>
        <span className="text-sm uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce " />
      </div>
    </section>
  );
};
