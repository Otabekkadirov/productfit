import newsBackground from "../assets/images/bg/news-bg.png";

const News = () => {
    return (
        <section className="news">
            <div className="wrapper news__wrapper">
                <div className="news__content">
                    <h3 className="news__date">09 Августа 2021</h3>
                    <h2 className="news__title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </h2>
                </div>

                <div className="news__banner">
                    <img src={newsBackground} alt="news banner" />
                </div>

                <div className="news__arrows">
                    <div className="arrow left-arrow">
                        <svg
                            width="14"
                            height="22"
                            viewBox="0 0 14 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                // opacity="0.15"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.9381 1.61683C12.0452 0.72388 10.5974 0.72388 9.70446 1.61683L1.62031 9.70098C0.794989 10.5263 0.732479 11.8256 1.43278 12.7227C1.49111 12.7978 1.55477 12.8702 1.62376 12.9392L9.70498 21.0263C10.5976 21.9196 12.0448 21.9196 12.9375 21.0263C13.8301 20.1331 13.8301 18.6848 12.9375 17.7915L6.46964 11.319L12.9381 4.85049C13.8311 3.95754 13.8311 2.50978 12.9381 1.61683Z"
                                fill="#1E959B"
                            />
                        </svg>
                    </div>
                    <div className="arrow right-arrow">
                        <svg
                            width="13"
                            height="22"
                            viewBox="0 0 13 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                // opacity="0.15"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.704459 1.61683C1.59741 0.72388 3.04517 0.72388 3.93812 1.61683L12.0223 9.70098C12.8476 10.5263 12.9101 11.8256 12.2098 12.7227C12.1515 12.7978 12.0878 12.8702 12.0188 12.9392L3.9376 21.0263C3.04497 21.9196 1.59774 21.9196 0.705111 21.0263C-0.187517 20.1331 -0.187515 18.6848 0.705112 17.7915L7.17294 11.319L0.704459 4.85049C-0.188492 3.95754 -0.188492 2.50978 0.704459 1.61683Z"
                                fill="#1E959B"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
