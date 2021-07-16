import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const Cart = () => {
    const [countCart, setCountCart] = useState(0)
    useEffect(() => {
        setCountCart(JSON.parse(localStorage.getItem('productCart')).length)
    }, [])
    return (
        <div className="cart">
            <Link to="/cart-item">
                <button>
                    <i className="fas fa-shopping-cart"></i>
                    <span>{countCart}</span>
                </button>
            </Link>
        </div>
    )
}