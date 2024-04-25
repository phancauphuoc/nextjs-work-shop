import { createSlice } from "@reduxjs/toolkit"
import get from 'lodash/get'

const initialState = {
    error: null
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action) {
            state.error = get(action, 'payload', null);
        }
    }
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
