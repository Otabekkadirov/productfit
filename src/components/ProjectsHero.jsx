import projectsHeroBackground from "../assets/images/bg/projects-hero.png";
import "../css/projects-hero.css";
import { useState } from "react";
import LeftArrowButton from "./ArrowButtons/LeftArrowButton";
import RightArrowButton from "./ArrowButtons/RightArrowButton";

const ProjectsHero = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const sliderImages = [
        projectsHeroBackground,
        projectsHeroBackground,
        projectsHeroBackground,
    ];

    const showPrevImage = () => {
        setImageIndex((index) => {
            if (index == 0) return sliderImages.length - 1;
            return index - 1;
        });
    };
    const showNextImage = () => {
        setImageIndex((index) => {
            if (index == sliderImages.length - 1) return 0;
            return index + 1;
        });
    };

    return (
        <section className="projects-hero">
            <div className="wrapper projects-hero__wrapper">
                <div className="projects-slider">
                    {sliderImages.map((img) => (
                        <img
                            key={img}
                            style={{ translate: `${-100 * imageIndex}%` }}
                            src={img}
                            alt="projects hero image"
                        />
                    ))}
                </div>
                <div className="wrapper projects-slider-arrows">
                    <LeftArrowButton onClick={showNextImage} />
                    {sliderImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setImageIndex(index)}
                            className="slider-dots"
                            style={
                                index == imageIndex
                                    ? { opacity: 1 }
                                    : { opacity: 0.15 }
                            }
                        ></button>
                    ))}
                    <RightArrowButton onClick={showPrevImage} />
                </div>
            </div>
        </section>
    );
};

export default ProjectsHero;
