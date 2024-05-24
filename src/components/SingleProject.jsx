import Button from "./Button";
import singleProjectImage from "../assets/images/projects/single-project.png";
import blockchainIcon from "../assets/images/icons/technologies/blockchain.svg";
import pythonIcon from "../assets/images/icons/technologies/python.svg";
import reactIcon from "../assets/images/icons/technologies/react.svg";
import "../css/single-project.css";

const SingleProject = () => {
    return (
        <section className="single-project">
            <div className="wrapper single-project__wrapper">
                <div className="single-project__card">
                    <div className="single-project-img">
                        <img src={singleProjectImage} alt="single project" />
                    </div>
                    <div className="single-project__description">
                        <div className="single-project-duration">
                            <h2 className="single-project-time">
                                Длительность
                                <span>10 недель</span>
                            </h2>
                            <div className="side-line"></div>
                            <h2 className="single-project-sprints">
                                Колличество спринтов
                                <span>20 Спринтов</span>
                            </h2>
                        </div>
                        <div className="single-project-stack">
                            <img src={blockchainIcon} alt="blockchain" />
                            <img src={pythonIcon} alt="python" />
                            <img src={reactIcon} alt="react" />
                        </div>

                        <a href="#!" className="single-project-link">
                            opengift.io
                        </a>
                    </div>
                    <Button
                        buttonTitle="УЗНАТЬ СТОИМОСТЬ ПРОЕКТА "
                        buttonType="btn-colored"
                    />
                </div>
                <div className="single-project__content">
                    <h2 className="single-project__title">
                        OpenGift – это система монетизации OpenSource-проектов
                        на основе блокчейна hyperledger fabric.
                    </h2>
                    <p className="single-project__text">
                        К разработке платформы было привлечено более 5000
                        разработчиков. Ее интегрировали с сетью блокчейнов.
                        Альфа-версия была запущена в январе 2018 года. OpenGIft
                        был создан для решения проблем, унаследованных от
                        разработки программного обеспечения. Платформа позволяет
                        компаниям разделять расходы на программное обеспечение,
                        а управление проектами является основной функцией,
                        помогающей в сотрудничестве. Для монетизации
                        используются смарт-контракты, чтобы создать пассивный,
                        периодический потенциал дохода. Уникальность проекта в
                        видении на разработку с открытым исходным кодом.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleProject;
