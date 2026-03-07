import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MhobFinder 🥙",
    description: "MhobFinder is a web-based platform that helps users find recipes using the ingredients they already have at home. It simplifies meal planning, promotes healthier cooking, and reduces food waste.",
    image: "/projects/mhobfinder.png",
    tags: ["ReactJS", "JavaScript", "Node", "Express", "MySQL", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/obviouslynotdim/MhobFinder",
  },
  {
    id: 2,
    title: "Friend Media ",
    description: "This is a Flask-based web application that allows users to register, manage accounts, and store Friend Profiles, with user authentication, profile image handling, and a relational database linking profiles to users.",
    image: "/projects/friendpython.png",
    tags: ["Python", "Flask", "SQLite", "Flask-Authentication", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/obviouslynotdim/friendmedia-miniproject",
  },
  {
    id: 3,
    title: "Friend Store 🚀",
    description: "Features full CRUD functionality, follows best development practices, and is deployed on Render. It includes a responsive design, modern UI components, and light/dark mode support for a better user experience.",
    image: "/projects/flaskjsonweb.png",
    tags: ["Python", "React", "SQlite", "SQLAlchemy", "Flask", "ChakraUI"],
    demoUrl: "#",
    githubUrl: "https://github.com/obviouslynotdim/webapp-flask-json",
  },
  {
    id: 4,
    title: "MedicTrack 💊",
    description: "Mobile Application that helps users remember to take their medication by setting pill reminders and receiving real-time notifications",
    image: "/projects/medictrack.png",
    tags: ["Flutter", "Dart", "C++", "SQLite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "SoulLike - Unity",
    description: "Game Developer, third-person action game with state-driven combat. Features 3-hit combos, dodging, blocking, C# locomotion and AI triggers, plus menu, win, and loss UI states.",
    image: "/projects/soullike.png",
    tags: ["Unity", "C#", "JavaScript", "Blender", "Animation"],
    demoUrl: "#",
    githubUrl: "https://github.com/obviouslynotdim/SoulLike-Unity",
  },
  {
    id: 6,
    title: "Ecommerce For Clothing",
    description: "My First Web Development Project using HTML CSS, a simple webshop for clothing. It features a clean design, product listings, and basic shopping cart functionality.",
    image: "/projects/webshop.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://vercel.com/obviouslynotdims-projects?repo=https://github.com/obviouslynotdim/teedeployment-test",
    githubUrl: "https://github.com/obviouslynotdim/teedeployment-test",
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
