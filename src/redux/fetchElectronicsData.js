import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
}

export const getElectronicsProducts = createAsyncThunk('electronics/getElectronicsProducts', async() => {
    const electronicsData = await axios.get("https://fakestoreapi.com/products/category/electronics")
    return electronicsData.data
})

const electronicsSlice = createSlice({
    name:'electronicsData',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getElectronicsProducts.pending, (state) => {
            state.isLoading = true
        })
        builders.addCase(getElectronicsProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builders.addCase(getElectronicsProducts.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default electronicsSlice.reducer