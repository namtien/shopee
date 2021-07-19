import "../assets/css/product-manager.scss"
import {AddProduct} from "../components/AddProduct";
import {TableProduct} from "../components/TableProduct";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Login} from "./Login";

export const ProductManager = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const isLogin = useSelector(state => state.loginReducer.isLogin)
    return isLogin === true ? (
        (
            <div className="product-manager">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <AddProduct selectedProduct={selectedProduct}/>
                        </div>
                        <div className="col-lg-8">
                            <TableProduct setSelectedProduct={setSelectedProduct}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : (
        <Login/>
    )
}