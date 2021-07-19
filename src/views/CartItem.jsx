import {useDispatch, useSelector} from "react-redux";
import {minusQuality, plusQuality, removeProduct} from "../reducers/cart";
import "../assets/css/cart.scss"

export const CartItem = () => {
    const productList = useSelector(state => state.cartReducer.productList);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-cart shadow p-3 mt-5 bg-white">
                        <div className="alert alert-primary fs-6 fw-bold" role="alert">
                            Cart
                        </div>
                        <table className="table table-bordered align-middle">
                            <thead>
                            <tr align="center">
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quality</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                productList.map((value, index) => {
                                    return <tr key={index}>
                                        <td>{value.name}</td>
                                        <td><img src={value.image} alt=""/></td>
                                        <td>{(value.price * value.quality).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
                                        <td>
                                            <button onClick={() => dispatch(plusQuality({index}))}><i
                                                className="fad fa-plus-square"></i></button>
                                            {value.quality}
                                            <button onClick={() => dispatch(minusQuality({index}))}><i
                                                className="fad fa-minus-square"></i></button>
                                        </td>
                                        <td>
                                            <button onClick={() => dispatch(removeProduct({index}))}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}