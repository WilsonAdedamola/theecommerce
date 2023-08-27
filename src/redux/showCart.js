import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "ShowCart",
    initialState : {
        show: false
    },
    reducers : {
        open: (state)=>{
            state.show = true
        },
        close: (state)=>{
            state.show = false
        }
    }
})

export const {open, close} = cartSlice.actions

export default cartSlice.reducer