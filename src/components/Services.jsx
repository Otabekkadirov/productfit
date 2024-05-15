import ServiceCard from "./ServiceCard";
import serviceImg1 from "../assets/images/icons/service1.svg";
import serviceImg2 from "../assets/images/icons/service2.svg";
import serviceImg3 from "../assets/images/icons/service3.svg";
import serviceImg4 from "../assets/images/icons/service4.svg";
import serviceImg5 from "../assets/images/icons/service5.svg";
import servicebg from "../assets/images/bg/service-bg.png";
import Button from "./Button";

const Services = () => {
    return (
        <section className="services">
            <div className="wrapper services__wrapper">
                <div className="service__cards">
                    <ServiceCard
                        serviceCardImg={serviceImg1}
                        serviceCardText="Проведём интервью"
                    />
                    <ServiceCard
                        serviceCardImg={serviceImg2}
                        serviceCardText="Составим план"
                    />
                    <ServiceCard
                        serviceCardImg={serviceImg3}
                        serviceCardText="Соберём команду"
                    />
                    <ServiceCard
                        serviceCardImg={serviceImg4}
                        serviceCardText="Разработаем продукт"
                    />
                    <ServiceCard
                        serviceCardImg={serviceImg5}
                        serviceCardText="Улучшим метрики"
                    />
                </div>

                <div className="wrapper service__info">
                    <div className="service__img">
                        <img src={servicebg} alt="background" />
                    </div>
                    <div className="service__content">
                        <h2 className="service__title">
                            Проведём интервью и подготовим проект к разработке
                        </h2>
                        <p className="service__description">
                            Проведём продуктовое интервью онлайн и дадим
                            рекомендации по подготовке проекта к разработке.
                            <span> Это бесплатно.</span>
                        </p>
                        <Button buttonTitle={"Записаться на интервью"} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
