import { createSlice } from "@reduxjs/toolkit"
import { getListFeaturedProduct } from "./action"
import { get } from "lodash"

const initialState = {
    loading: false,
    featureProduct: null,
}

const FeatureSlice = createSlice({
    name: "feature-product",
    initialState,
    reducers: {},
    extraReducers(builer) {
        builer
            .addCase(getListFeaturedProduct.pending, (state, action) => {
                state.featureProduct = null;
                state.loading = false
            })
            .addCase(getListFeaturedProduct.fulfilled, (state, action) => {
                state.featureProduct = get(action, 'payload', null)
                state.loading = false
            })
            .addCase(getListFeaturedProduct.rejected, (state, action) => {
                state.featureProduct = null;
                state.loading = true;
            })
    }
})

export default FeatureSlice.reducer;