import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from './fetchdata'
import fetchMenData from "./fetchMenData";
import fetchWomenData from "./fetchWomenData";
import fetchJewelryData from "./fetchJewelryData";
import fetchElectronicsData from "./fetchElectronicsData";
import showCart from "./showCart";
import addToCart from "./addToCart";




export const store = configureStore({
    reducer: {
        fetchAll : fetchDataReducer,
        fetchMen : fetchMenData,
        fetchWomen : fetchWomenData,
        fetchJewelry : fetchJewelryData,
        fetchElectronics : fetchElectronicsData,
        cartState : showCart,
        cartData : addToCart,
    }
}) 