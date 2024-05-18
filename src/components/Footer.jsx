import logoProductfit from "../assets/images/logo/logo-productfit.svg";
import paperplane from "../assets/images/icons/paperplane.png";
import envelope from "../assets/images/icons/envelope.png";
import phone from "../assets/images/icons/phone.png";

const Footer = () => {
    return (
        <nav className="navbar">
            <div className="wrapper navbar__wrapper">
                <div className="logo">
                    <a href="#!">
                        <img src={logoProductfit} alt="logo" />
                    </a>
                </div>
                <div className="navbar-icons">
                    <a href="#!">
                        <img src={paperplane} alt="paperplane" />
                    </a>
                    <a href="#!">
                        <img src={envelope} alt="envelope" />
                    </a>
                    <a href="#!">
                        <img src={phone} alt="phone" />
                        +7 800 301-79-27
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Footer;
