import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    data: [],
    isLoading : false,
    isError : false,
}

export const getWomenProducts = createAsyncThunk("women/getWomenProducts", async()=>{
    const womenData = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
    return womenData.data
})

const womenSlice = createSlice({
    name: 'womenData',
    initialState,
    extraReducers : (builders) => {
        builders.addCase(getWomenProducts.pending, (state)=>{
            state.isLoading = true
        })
        builders.addCase(getWomenProducts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builders.addCase(getWomenProducts.rejected, (state)=>{
            state.isLoading = false
            state.isError = true
        })
    }
})

export default womenSlice.reducer