import React from "react";
import "../../css/arrows.css";

const RightArrowButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="btn-arrow">
            <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.704459 1.61683C1.59741 0.72388 3.04517 0.72388 3.93812 1.61683L12.0223 9.70098C12.8476 10.5263 12.9101 11.8256 12.2098 12.7227C12.1515 12.7978 12.0878 12.8702 12.0188 12.9392L3.9376 21.0263C3.04497 21.9196 1.59774 21.9196 0.705111 21.0263C-0.187517 20.1331 -0.187515 18.6848 0.705112 17.7915L7.17294 11.319L0.704459 4.85049C-0.188492 3.95754 -0.188492 2.50978 0.704459 1.61683Z"
                />
            </svg>
        </button>
    );
};

export default RightArrowButton;
