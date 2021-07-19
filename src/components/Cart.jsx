import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const Cart = () => {
    const productList = useSelector(state => state.cartReducer.productList)
    return (
        <div className="cart">
            <Link to="/cart-item">
                <button>
                    <i className="fas fa-shopping-cart"></i>
                    <span>{productList.length}</span>
                </button>
            </Link>
        </div>
    )
}