import { configureStore } from "@reduxjs/toolkit"
import activityListReducer from "./reducers/activitySlice"
import locationReducer from "./reducers/locationSlice"
import userReducer from "./reducers/userSlice"

export default store = configureStore({
	reducer: {
		location: locationReducer.reducer,
        user: userReducer.reducer,
		activityList: activityListReducer.reducer
	},
})
