import { createSlice } from "@reduxjs/toolkit";

const tripTypeSlice = createSlice({
    name: 'tripType',
    initialState: "I'm all in",
    reducers: {
        setTripType: (state, action) => action.payload
    }
})

export const { setTripType } = tripTypeSlice.actions
export default tripTypeSlice