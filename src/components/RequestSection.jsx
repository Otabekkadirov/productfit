import Button from "./Button";
import requestBackground from "../assets/images/bg/request-bg.png";

const RequestSection = () => {
    return (
        <section className="request">
            <div className="wrapper request__wrapper">
                <div className="request__img">
                    <img src={requestBackground} alt="request banner" />
                </div>
                <Button
                    buttonTitle="ОСТАВИТЬ ЗАЯВКУ"
                    buttonType="btn-colored"
                />
            </div>
        </section>
    );
};

export default RequestSection;
