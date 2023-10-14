import { createSlice } from "@reduxjs/toolkit"

const locationSlice = createSlice({
	name: "location",
	initialState: "I'm flexible",
	reducers: {
		setLocation: (_, action) => action.payload,
	},
})

export const { setLocation } = locationSlice.actions
export default locationSlice
