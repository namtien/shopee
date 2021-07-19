const {createSlice} = require("@reduxjs/toolkit");
const cartSlice = createSlice({
   name: "cartReducer",
   initialState: {
      productList: JSON.parse(localStorage.getItem('productList')) || []
   },
   reducers: {
      addToCart: (state, action) => {
         const {product} = action.payload;

         // tim ra vi tri cua product da ton tai trong danh sach san pham
         let indexOfExistedProduct = null;

         for (let i = 0; i < state.productList.length; i++) {
            if (state.productList[i].id === product.id) {
               indexOfExistedProduct = i;
               break;
            }
         }

         if (indexOfExistedProduct === null) {
            product.quality = 1
            state.productList.unshift(product)
         } else {
            state.productList[indexOfExistedProduct].quality += 1;
         }

         alert("Success")
         localStorage.setItem("productList", JSON.stringify(state.productList));
      },

      plusQuality: (state, action) => {
         const {index} = action.payload
         const temp = [...state.productList];
         temp[index].quality += 1
         state.productList = temp;
         localStorage.setItem("productList", JSON.stringify(temp));
      },

      minusQuality: (state, action) => {
         const {index} = action.payload
         if (state.productList[index].quality <= 1) {
            return;
         }
         const temp = [...state.productList];
         temp[index].quality -= 1
         state.productList = temp;
         localStorage.setItem("productList", JSON.stringify(temp));
      },

      removeProduct: (state, action) => {
         const {index} = action.payload
         state.productList.splice(index, 1)
         const temp = [...state.productList]
         state.productList = temp
         localStorage.setItem("productList", JSON.stringify(temp));
      }

   }
})

export const {addToCart, minusQuality, plusQuality, removeProduct} = cartSlice.actions
export default cartSlice.reducer