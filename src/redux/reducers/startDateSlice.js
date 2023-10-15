import { createSlice } from "@reduxjs/toolkit"

const startDateSlice = createSlice({
	name: "startDate",
	initialState: Date.now(),
	reducers: {
		actStartDate: (_, action) => action.payload,
	},
})

export const { actStartDate } = startDateSlice.actions
export default startDateSlice