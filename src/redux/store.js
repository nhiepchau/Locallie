import { configureStore } from "@reduxjs/toolkit"
import activityListReducer from "./reducers/activitySlice"
import locationReducer from "./reducers/locationSlice"
import userReducer from "./reducers/userSlice"
import startDateReducer from "./reducers/startDateSlice"
import endDateReducer from "./reducers/endDateSlice"
import tripTypeReducer from "./reducers/tripTypeSlice"

export default store = configureStore({
	reducer: {
		location: locationReducer.reducer,
        user: userReducer.reducer,
		activityList: activityListReducer.reducer,
		startDate: startDateReducer.reducer,
		endDate: endDateReducer.reducer,
		tripType: tripTypeReducer.reducer
	},
})
