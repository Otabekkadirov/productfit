const ServiceCard = ({ serviceCardImg, serviceCardText }) => {
    return (
        <div className="service__card">
            <img
                src={serviceCardImg}
                alt="card image"
                className="service__card-img"
            />
            <p className="service__card-text">{serviceCardText}</p>
        </div>
    );
};

export default ServiceCard;
