import { createSlice } from "@reduxjs/toolkit"

const locationSlice = createSlice({
	name: "location",
	initialState: null,
	reducers: {
		setLocation: (_, action) => action.payload,
	},
})

export const { setLocation } = locationSlice.actions
export default locationSlice
