import Button from "./Button";
import heroBackground from "../assets/images/bg/hero-bg.png";
import "../css/hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="wrapper hero__wrapper">
                <div className="hero__content">
                    <h2 className="hero__title">Разработка IT‑продуктов</h2>
                    <p className="hero__description">
                        Разработаем проект с нуля, доработаем текущий проект или
                        усилим вашу ИТ-команду лучшими разработчиками на рынке
                    </p>
                    <Button
                        buttonType="btn-colored"
                        buttonTitle="НАЧАТЬ НОВЫЙ ПРОЕКТ"
                    />
                </div>
                <div className="hero__banner">
                    <img src={heroBackground} alt="hero banner" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
