import { Briefcase, Code, User } from "lucide-react"
import resumePdf from "/assets/pdf/Setha_Vathanak-Resume.pdf";

export const About = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-lavender">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate WebDeveloper & Learner
                    </h3>

                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium odio praesentium est eius facilis odit expedita dolorum inventore in.
                    </p>

                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium odio praesentium est eius facilis odit expedita dolorum inventore in.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start items-center">
                        <a href="#contact" className="cosmic-button px-6 py-2 rounded-full bg-lavender"> 
                            {" "}
                            Get In Touch
                        </a>

                        <a href={resumePdf} download="Setha_Vathanak-Resume.pdf" className="px-6 py-2 rounded-full border border-lavender text-white hover:bg-lavender transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover bg-lavender/6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-lavender/10">
                                <Code className="h-6 w-6 text-lavender"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive mobile applications using Flutter and modern UI frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover bg-lavender/6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-lavender/10">
                                <User className="h-6 w-6 text-lavender"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Developer</h4>
                                <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover bg-lavender/6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-lavender/10">
                                <Briefcase className="h-6 w-6 text-lavender"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}