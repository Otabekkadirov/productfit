import Projects from "../components/Projects";
import RequestSection from "../components/RequestSection";
import ProjectsHero from "../components/ProjectsHero";
import SingleProject from "../components/SingleProject";

const ProjectsPage = () => {
    return (
        <>
            <ProjectsHero />
            <SingleProject />
            <Projects />
            <RequestSection />
        </>
    );
};

export default ProjectsPage;
