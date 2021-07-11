import "../assets/css/product-manager.scss"
import {AddProduct} from "../components/AddProduct";
import {TableProduct} from "../components/TableProduct";
import {useState} from "react";

export const ProductManager = () => {

   const [selectedProduct, setSelectedProduct] = useState(null)

   function setProduct(product) {
      setSelectedProduct(product)
   }

   return (
      <div className="product-manager">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-4">
                  <AddProduct selectedProduct={selectedProduct}/>
               </div>
               <div className="col-lg-8">
                  <TableProduct setSelectedProduct={setProduct}/>
               </div>
            </div>
         </div>
      </div>
   )
}