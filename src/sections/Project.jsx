import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Feature <span className="text-lavender"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some ofmy recent projects. Each project was crafted with
          attention to detail, performance, user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-lavender/6 rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div h-48 overflow-hidden>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-lavender transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-lavender transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/obviouslynotdim" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};
