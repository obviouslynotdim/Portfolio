import { Navbar } from "./sections/Navbar";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import { About } from "./sections/About";
import { Project } from "./sections/Project";
// import Skills from "./sections/Skills";

const App = () => {
  return <div className="Container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    {/* <Skills /> */}
    <Project />
    <Contact />
    <Footer />
    {/* <section className="min-h-screen" /> */}
  </div>;
};

export default App;