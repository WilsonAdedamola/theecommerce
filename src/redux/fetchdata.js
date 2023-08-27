import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getHomeProducts = createAsyncThunk("home/getHomeProducts", async () => {
    const homeData = await axios.get("https://fakestoreapi.com/products")
    return homeData.data;
  }
);

export const homeSlice = createSlice({
  name: "homeData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHomeProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getHomeProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      builder.addCase(getHomeProducts.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
}
});

export default homeSlice.reducer
