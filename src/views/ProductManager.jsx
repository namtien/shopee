import "../assets/css/product-manager.scss"
import {AddProduct} from "../components/AddProduct";
import {TableProduct} from "../components/TableProduct";
import {useState} from "react";

export const ProductManager = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    return (
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
}