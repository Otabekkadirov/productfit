import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import Services from "./components/Services";
import News from "./components/News";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Partners />
            <Services />
            <Projects />
            <News />
        </>
    );
};

export default App;
