import { request } from "../configs/axios"

const getUserById = async (id) => {
	return request({ method: "GET", url: `/users/${id}` })
}

const getAllBuddies = async (id) => { 
	return request({ method: "GET", url: `/users/${id}` })
}

const getSuggestBuddies = async (id) => {
	return request({ method: "GET", url: `/users/${id}/near-buddies` })
}

const addBuddy = async (id, data) => {
	return request({ method: "PUT", url: `/users/${id}/buddy`, data })
}
export { addBuddy, getAllBuddies, getSuggestBuddies, getUserById }

