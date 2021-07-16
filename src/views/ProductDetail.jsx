import {useLocation} from "react-router-dom";
import "../assets/css/product-detail.scss"

export const ProductDetail = () => {
    const location = useLocation();
    const state = location.state;

    function addToCart(value) {
        const product = localStorage.getItem('productCart') ? JSON.parse(localStorage.getItem('productCart')) : []
        product.push(value)
        localStorage.setItem('productCart', JSON.stringify(product))
    }

    return (

        <div className="container">
            <div className="product-detail shadow p-3 mt-5 bg-white">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={state.image} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1>{state.name}</h1>
                        <h3 className="mt-4">{state.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} vnđ</h3>
                        <p className="mt-4">
                            {state.description}
                        </p>
                        <button onClick={() => addToCart(state)} className="mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}