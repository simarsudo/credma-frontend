import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

type Products = {
    name: string;
};

const initialState: Products = {
    name: "",
};

export const ProductsSlice = createSlice({
    name: "Products",
    initialState,
    // Temporary Reducers Added
    reducers: {
        add: (state) => {
            state.name = "Simar";
        },
    },
});

export const { add } = ProductsSlice.actions;

export default ProductsSlice.reducer;
