import projectsHeroBackground from "../assets/images/bg/projects-hero.png";
import "../css/projects-hero.css";
import { useState } from "react";

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
                    <button onClick={showPrevImage} className="btn-arrow">
                        <svg
                            width="14"
                            height="22"
                            viewBox="0 0 14 22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.9381 1.61683C12.0452 0.72388 10.5974 0.72388 9.70446 1.61683L1.62031 9.70098C0.794989 10.5263 0.732479 11.8256 1.43278 12.7227C1.49111 12.7978 1.55477 12.8702 1.62376 12.9392L9.70498 21.0263C10.5976 21.9196 12.0448 21.9196 12.9375 21.0263C13.8301 20.1331 13.8301 18.6848 12.9375 17.7915L6.46964 11.319L12.9381 4.85049C13.8311 3.95754 13.8311 2.50978 12.9381 1.61683Z"
                            />
                        </svg>
                    </button>

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

                    <button onClick={showNextImage} className="btn-arrow">
                        <svg
                            width="13"
                            height="22"
                            viewBox="0 0 13 22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.704459 1.61683C1.59741 0.72388 3.04517 0.72388 3.93812 1.61683L12.0223 9.70098C12.8476 10.5263 12.9101 11.8256 12.2098 12.7227C12.1515 12.7978 12.0878 12.8702 12.0188 12.9392L3.9376 21.0263C3.04497 21.9196 1.59774 21.9196 0.705111 21.0263C-0.187517 20.1331 -0.187515 18.6848 0.705112 17.7915L7.17294 11.319L0.704459 4.85049C-0.188492 3.95754 -0.188492 2.50978 0.704459 1.61683Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsHero;
