import project3 from "../assets/images/icons/project3.png";

const ProjectCard = ({ img, title, text }) => {
    return (
        <div className="project__card">
            <div className="project__card-img">
                {/* <img src={img} alt="card image" /> */}
                <img src={project3} alt="card image" />
            </div>
            <h3 className="project__card-title">{title}</h3>
            <p className="project__card-text">{text}</p>
        </div>
    );
};

export default ProjectCard;
