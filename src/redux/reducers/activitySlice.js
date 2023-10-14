import { createSlice } from "@reduxjs/toolkit";

const activityListSlice = createSlice({
    name: 'activityList',
    initialState: [],
    reducers: {
        addActivity: (state, action) => {
            state.push({
                activityId: action.payload.activityId != undefined ? action.payload.activityId : action.payload._id,
                status: 0
            })

            console.log('Check add activity', state, action)
        }
    }
})

export const { addActivity, markJoined, markJoin } = activityListSlice.actions
export default activityListSlice