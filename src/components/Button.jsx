/* eslint-disable react/prop-types */
import "../css/button.css";

const Button = ({ buttonTitle }) => {
    return <button className="btn primary-btn">{buttonTitle}</button>;
};

export default Button;
