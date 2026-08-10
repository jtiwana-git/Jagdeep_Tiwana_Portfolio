import Weather from "../assets/projects/WeatherImg.jpg";
import ToDo from "../assets/projects/ToDoImg.jpg";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Weather App",
    description:
      "Weather App is a web application that provides real-time weather information for any location. It uses the OpenWeatherMap API to fetch current weather data and displays it in a user-friendly interface.",
    image: Weather,
    tags: ["React", "API", "CSS"],
    github: "https://github.com/jtiwana-git/Weather-2026-app",
  },
  {
    title: "Task Manager",
    description:
      "Task Manager is a productivity tool that helps users organize and manage their tasks efficiently. It allows users to create, edit, and delete tasks, set deadlines, and track progress.",
    image: ToDo,
    tags: ["React", "CSS"],
    github: "https://github.com/jtiwana-git/To_do_list_2026",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            My <span className=" text-secondary-foreground">Projects.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are some of the projects I have worked on recently.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* OVERLAY LINKS */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary-foreground"
                  >
                    <FaGithub size={64} className="text-secondary-foreground" />
                  </a>
                </div>
              </div>
              {/* project details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hoover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
        {/* VIEW ALL PROJECTS BUTTON */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
