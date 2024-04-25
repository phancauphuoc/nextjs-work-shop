import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiClient from '@/utils/fetcher/axiosConfig'
import { urlAPI } from "@/constant/url";
import get from "lodash/get";
import { setError } from "../errorSlice";

export const getListFeaturedProduct: any = createAsyncThunk(
    "feature/list",
    async (params, thunkApi) => {
        try {
            const res = await ApiClient.get(`http://localhost:8000/${urlAPI.FAKE_DATA.FEATURED_PRODUCT}`, { params });
            return get(res, 'data', null);
        } catch (error) {
            thunkApi.dispatch(setError(error))
            return null;
        }
    }
)