import { createSlice } from "@reduxjs/toolkit"

const endDateSlice = createSlice({
	name: "endDate",
	initialState: null,
	reducers: {
		actEndDate: (_, action) => action.payload,
	},
})

export const { actEndDate } = endDateSlice.actions
export default endDateSlice