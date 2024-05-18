import Button from "./Button";

const ProductCard = ({ img, title }) => {
    return (
        <div className="product__card">
            <div className="product__card-img">
                <img src={img} alt="product card image" />
            </div>
            <h3 className="product__card-title">{title}</h3>
            <Button buttonType="btn-colored" buttonTitle="ЗАКАЗАТЬ" />
        </div>
    );
};

export default ProductCard;
