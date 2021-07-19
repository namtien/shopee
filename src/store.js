import {configureStore} from '@reduxjs/toolkit'

import cartReducer from "./reducers/cart";
import loginReducer from "./reducers/login"

export const store = configureStore({
   reducer: {
      cartReducer,
      loginReducer
   },
})
