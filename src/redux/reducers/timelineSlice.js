import { createSlice } from "@reduxjs/toolkit";

const timelineSlice = createSlice({
    name: 'timeline',
    initialState: [Date.now()],
    addRangeDate(state, action) {
        console.log('Dispatch ', action.payload)
        state.push(action.payload)
    }
})

export const { addRangeDate } = timelineSlice.actions
export default timelineSlice