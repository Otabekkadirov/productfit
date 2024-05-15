import styles from "../css/button.module.css";

const Button = ({ buttonTitle }) => {
    return <button className={styles.btn}>{buttonTitle}</button>;
};

export default Button;
