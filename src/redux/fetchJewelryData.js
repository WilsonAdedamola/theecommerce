import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
}

export const getJewelryProducts = createAsyncThunk('men/getJewelryProducts', async() => {
    const jewelryData = await axios.get("https://fakestoreapi.com/products/category/jewelery")
    return jewelryData.data
})

const jewelrySlice = createSlice({
    name:'jewelryData',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getJewelryProducts.pending, (state) => {
            state.isLoading = true
        })
        builders.addCase(getJewelryProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builders.addCase(getJewelryProducts.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default jewelrySlice.reducer