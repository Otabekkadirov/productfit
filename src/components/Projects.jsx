import ProjectCard from "./ProjectCard";
import projects from "../projects.json";
import Button from "./Button";

const Projects = () => {
    return (
        <section className="projects">
            <div className="wrapper projects__wrapper">
                <h1 className="projects__title">ПРОЕКТЫ КОМАНДЫ PRODUCTFIT</h1>

                <div className="projects__cards">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            img={project.icon}
                            title={project.title}
                            text={project.text}
                        />
                    ))}
                </div>

                <Button buttonType="btn-bordered" buttonTitle="Все проекты" />
            </div>
        </section>
    );
};

export default Projects;
