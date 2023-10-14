import { request } from "../configs/axios"

const getAllActivies = async () => {
	return request({ method: "GET", url: `/activities` })
}

const getActivityById = async (id) => {
	return request({ method: "GET", url: `/activities/${id}` })
}

const registerActivity = async (userId, activityId) => {
	return request({
		method: "PUT",
		url: `/users/${userId}/added-activity`,
		data: {
			"activityId": `${activityId}`,
		},
	})
}

export { getActivityById, getAllActivies, registerActivity }
