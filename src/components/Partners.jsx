import partner1 from "../assets/images/icons/partner1.svg";
import partner2 from "../assets/images/icons/partner2.svg";
import partner3 from "../assets/images/icons/partner3.svg";
import partner4 from "../assets/images/icons/partner4.svg";
import partner5 from "../assets/images/icons/partner5.svg";

const Partners = () => {
    return (
        <section className="partners">
            <div className="wrapper partners__wrapper">
                <img src={partner1} alt="partner" />
                <img src={partner2} alt="partner" />
                <img src={partner3} alt="partner" />
                <img src={partner4} alt="partner" />
                <img src={partner5} alt="partner" />
            </div>
        </section>
    );
};

export default Partners;
