import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EditObjectType } from "../../types/types";

type ModalStateType = {
    open: boolean;
    fields: EditObjectType | null;
};

const initialState: ModalStateType = {
    open: false,
    fields: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state) {
            state.fields = null;
            state.open = true;
        },
        closeModal(state) {
            state.open = false;
        },
        openModalWithInfo(state, action: PayloadAction<EditObjectType>) {
            state.open = true;
            state.fields = action.payload;
        },
    },
});

export const modalSliceActions = modalSlice.actions;

export default modalSlice.reducer;
