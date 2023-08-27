import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
}

export const getMenProducts = createAsyncThunk('men/getMenProducts', async() => {
    const menData = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
    return menData.data
})

const menSlice = createSlice({
    name:'menData',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getMenProducts.pending, (state) => {
            state.isLoading = true
        })
        builders.addCase(getMenProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builders.addCase(getMenProducts.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default menSlice.reducer