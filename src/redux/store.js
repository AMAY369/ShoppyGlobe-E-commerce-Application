import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchReducer";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer, // Add search reducer
    }
})

export default store