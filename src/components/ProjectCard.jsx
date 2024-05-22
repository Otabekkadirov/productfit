import { Link } from "react-router-dom";

const ProjectCard = ({ img, title, text }) => {
    return (
        <Link to="/projects">
            <div className="project__card">
                <div className="project__card-img">
                    <img src={img} alt="card image" />
                </div>
                <h3 className="project__card-title">{title}</h3>
                <p className="project__card-text">{text}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;
