import { configureStore } from "@reduxjs/toolkit"
import FeatureSlice from "./slices/feature-product";
import { createWrapper } from "next-redux-wrapper";

export const makeStore: any = () => {
    configureStore({
        reducer: {
            feature: FeatureSlice
        },
        devTools: true,
    })
}

export const wrapper = createWrapper(makeStore);