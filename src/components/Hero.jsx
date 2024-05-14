import Button from "./Button";
import heroBackground from "../assets/images/bg/hero-bg.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="wrapper hero__wrapper">
                <div className="hero__content">
                    <div className="hero__title">Разработка IT‑продуктов</div>
                    <p className="hero__description">
                        Разработаем проект с нуля, доработаем текущий проект или
                        усилим вашу ИТ-команду лучшими разработчиками на рынке
                    </p>
                    <Button buttonTitle={"НАЧАТЬ НОВЫЙ ПРОЕКТ"} />
                </div>
                <div className="hero__banner">
                    <img src={heroBackground} alt="hero banner" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
