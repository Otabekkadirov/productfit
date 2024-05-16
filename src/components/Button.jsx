import "../css/button.css";

const Button = ({ buttonType, buttonTitle }) => {
    return <button className={`btn ${buttonType}`}>{buttonTitle}</button>;
};

export default Button;
