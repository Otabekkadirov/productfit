import React from "react";
import "../../css/arrows.css";

const LeftArrowButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="btn-arrow">
            <svg
                width="14"
                height="22"
                viewBox="0 0 14 22"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9381 1.61683C12.0452 0.72388 10.5974 0.72388 9.70446 1.61683L1.62031 9.70098C0.794989 10.5263 0.732479 11.8256 1.43278 12.7227C1.49111 12.7978 1.55477 12.8702 1.62376 12.9392L9.70498 21.0263C10.5976 21.9196 12.0448 21.9196 12.9375 21.0263C13.8301 20.1331 13.8301 18.6848 12.9375 17.7915L6.46964 11.319L12.9381 4.85049C13.8311 3.95754 13.8311 2.50978 12.9381 1.61683Z"
                />
            </svg>
        </button>
    );
};

export default LeftArrowButton;
