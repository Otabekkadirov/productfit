import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import Services from "./components/Services";
import News from "./components/News";
import Products from "./components/Products";
import RequestSection from "./components/RequestSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Partners />
            <Services />
            <Projects />
            <News />
            <Products />
            <RequestSection />
            <Footer />
        </>
    );
};

export default App;
