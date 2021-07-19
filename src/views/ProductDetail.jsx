import {useLocation} from "react-router-dom";
import "../assets/css/product-detail.scss"
import {useDispatch} from "react-redux";
import {addToCart} from "../reducers/cart";

export const ProductDetail = () => {
   const location = useLocation();
   const product = location.state;
   const dispatch = useDispatch()


   return (

      <div className="container">
         <div className="product-detail shadow p-3 mt-5 bg-white">
            <div className="row">
               <div className="col-lg-6">
                  <div className="image">
                     <img src={product.image} alt=""/>
                  </div>
               </div>
               <div className="col-lg-6">
                  <h1>{product.name}</h1>
                  <h3 className="mt-4">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} vnđ</h3>
                  <p className="mt-4">
                     {product.description}
                  </p>
                  <button onClick={() => dispatch(addToCart({product}))} className="mt-4">Add to Cart</button>
               </div>
            </div>
         </div>
      </div>
   )
}