import partner1 from "../assets/images/icons/partner1.svg";
import partner2 from "../assets/images/icons/partner2.svg";
import partner3 from "../assets/images/icons/partner3.svg";
import partner4 from "../assets/images/icons/partner4.svg";
import partner5 from "../assets/images/icons/partner5.svg";
import "../css/partners.css";
import LeftArrowButton from "./ArrowButtons/LeftArrowButton";
import RightArrowButton from "./ArrowButtons/RightArrowButton";
import { useState } from "react";

const Partners = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const sliderImages = [partner1, partner2, partner3, partner4, partner5];

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
        <section className="partners">
            <div className="wrapper partners__wrapper">
                <LeftArrowButton onClick={showPrevImage} />

                <div className="partners__slider">
                    {sliderImages.map((partner) => (
                        <img
                            key={partner}
                            style={{ translate: `${-100 * imageIndex}%` }}
                            src={partner}
                            alt="partner"
                        />
                    ))}
                </div>
                <RightArrowButton onClick={showNextImage} />
            </div>
        </section>
    );
};

export default Partners;
