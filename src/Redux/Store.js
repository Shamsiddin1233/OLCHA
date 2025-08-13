import { configureStore } from "@reduxjs/toolkit";

import ShopReducer from "./ShopSlice"

export let store =configureStore({
    reducer:{
        shop:ShopReducer
    }
})