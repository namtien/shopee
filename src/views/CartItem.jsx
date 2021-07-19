import {useDispatch, useSelector} from "react-redux";
import {minusQuality, plusQuality, removeProduct} from "../reducers/cart";

export const CartItem = () => {
   const productList = useSelector(state => state.cartReducer.productList);
   const dispatch = useDispatch();

   return (
      <div>
         <table className="table table-bordered">
            <tbody>
            {
               productList.map((value, index) => {
                  return <tr key={index}>
                     <td>{value.name}</td>
                     <td>{value.price * value.quality}</td>
                     <td>
                        <button onClick={() => dispatch(plusQuality({index}))}>+</button>
                        {value.quality}
                        <button onClick={() => dispatch(minusQuality({index}))}>-</button>
                     </td>
                     <td>
                        <button onClick={() => dispatch(removeProduct({index}))}>delete</button>
                     </td>
                  </tr>
               })
            }
            </tbody>
         </table>

      </div>
   )
}