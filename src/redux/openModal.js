import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTrue: false,
  modalItem: [],
};

const modalSlice = createSlice({
  name: "modalItem",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isTrue = false;
      state.modalItem = [];
    },
    populateModal: (state, action) => {
      state.modalItem.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        image: action.payload.image,
        category: action.payload.category,
        price: action.payload.price,
      });
      if (state.modalItem.length !== 0) {
        state.isTrue = true;
      }
    },
  },
});

export const { openModal, closeModal, populateModal } = modalSlice.actions;

export default modalSlice.reducer;
