import { motion } from "motion/react";
import { useEffect, useState } from "react";

const showcaseImages = [
    "/assets/me1.jpg",
    "/assets/me2.jpg",
    "/assets/me3.JPG",
];

const skillSet = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
        name: "Jinja",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@13.11.0/icons/jinja.svg",
    },
    {
        name: "Chakra UI",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@13.11.0/icons/chakraui.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
        name: "XAMPP",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@13.11.0/icons/xampp.svg",
    },
    {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
        name: "Github",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
];

const Skills = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % showcaseImages.length);
        }, 2800);

        return () => clearInterval(sliderInterval);
    }, []);

    const getCardOffset = (index) => {
        const rawOffset = (index - activeSlide + showcaseImages.length) % showcaseImages.length;
        if (rawOffset === 0) return 0;
        if (rawOffset === 1) return 1;
        return -1;
    };

  return (
    <section id="skills" className="py-22 px-4 relative">
      <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Skill <span className="text-lavender">Stack</span>
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                        Tools and technologies I use to design, build, and ship projects from idea to production.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="gradient-border rounded-2xl p-px bg-linear-to-br from-lavender/80 via-coral/40 to-aqua/50">
                        <div className="relative h-85 md:h-97.5 rounded-2xl bg-primary/85 backdrop-blur-sm overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,87,219,0.35),transparent_65%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(51,194,204,0.25),transparent_62%)]" />

                            <div className="relative h-full w-full flex items-center justify-center">
                                {showcaseImages.map((image, index) => {
                                    const offset = getCardOffset(index);
                                    const isActive = offset === 0;

                                    return (
                                        <motion.div
                                            key={image}
                                            className="absolute w-[78%] md:w-[74%]"
                                            initial={false}
                                            animate={{
                                                x: offset * 34,
                                                y: Math.abs(offset) * 18,
                                                scale: isActive ? 1 : 0.92,
                                                rotate: offset * 5,
                                                opacity: isActive ? 1 : 0.45,
                                                zIndex: isActive ? 30 : 10,
                                            }}
                                            transition={{ type: "spring", stiffness: 160, damping: 20 }}
                                        >
                                            <div className="rounded-xl overflow-hidden border border-white/12 shadow-[0_18px_45px_rgba(122,87,219,0.35)]">
                                                <img
                                                    src={image}
                                                    alt={`Showcase ${index + 1}`}
                                                    className="w-full h-55 md:h-62.5 object-cover"
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                                {showcaseImages.map((_, index) => (
                                    <button
                                        key={`slide-dot-${index}`}
                                        type="button"
                                        onClick={() => setActiveSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            activeSlide === index ? "w-8 bg-lavender" : "w-2 bg-white/35 hover:bg-white/60"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {skillSet.map((skill) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.45 }}
                                className="group rounded-xl border border-white/10 bg-lavender/8 backdrop-blur-sm px-3 py-4 flex flex-col items-center justify-center gap-2 hover:border-lavender/60 hover:bg-lavender/15 transition-all duration-300"
                            >
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} logo`}
                                    loading="lazy"
                                    className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(122,87,219,0.5)] group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="text-sm font-medium text-white/90">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Skills
