import product1 from "../assets/images/icons/products/product1.svg";
import product2 from "../assets/images/icons/products/product2.svg";
import product3 from "../assets/images/icons/products/product3.svg";
import product4 from "../assets/images/icons/products/product4.svg";
import product5 from "../assets/images/icons/products/product5.svg";
import product6 from "../assets/images/icons/products/product6.svg";
import product7 from "../assets/images/icons/products/product7.svg";
import product8 from "../assets/images/icons/products/product8.svg";
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <section className="products">
            <div className="wrapper products__wrapper">
                <div className="products__cards">
                    <ProductCard img={product1} title="Ecommerce" />
                    <ProductCard img={product2} title="SaaS-платформы" />
                    <ProductCard img={product3} title="Мобильное приложение" />
                    <ProductCard img={product4} title="IОT-приложения" />
                    <ProductCard img={product5} title="AR/VR" />
                    <ProductCard img={product6} title="MVP" />
                    <ProductCard img={product7} title="CRM/ERP" />
                    <ProductCard img={product8} title="Blockchain" />
                </div>
            </div>
        </section>
    );
};

export default Products;
