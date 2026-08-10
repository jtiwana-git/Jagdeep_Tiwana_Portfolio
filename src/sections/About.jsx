import { Code2, Users, Rocket, User } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Write clean, maintainable, and efficient code.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work effectively with team members and stakeholders.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Optimize applications for maximum speed and scalability.",
  },
  {
    icon: User,
    title: "User Experience",
    description: "Design intuitive and engaging user experiences.",
  },
];

// 1:25:22
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building for the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a passionate software developer with a strong focus on
                creating efficient and scalable web applications. With a keen
                eye for detail and a commitment to clean code, I strive to
                deliver high-quality solutions that meet user needs and exceed
                expectations.
              </p>
              <p>
                My expertise spans across various technologies, including React,
                Node.js, and modern front-end frameworks. I enjoy collaborating
                with cross-functional teams to bring innovative ideas to life
                and continuously improve the user experience.
              </p>
              <p>
                In addition to my technical skills, I am dedicated to staying
                up-to-date with industry trends and best practices (such as
                attending courses and participating in online materials). I
                believe in continuous learning and actively seek opportunities
                to enhance my knowledge and contribute to the developer
                community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to create impactful software that not only meets
                business objectives but also provides a seamless and enjoyable
                experience for users. I am excited to take on new challenges and
                contribute to projects that make a difference in the digital
                landscape.
              </p>
            </div>
          </div>
          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
