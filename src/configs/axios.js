import axios from "axios"
const BASE_URL = "http://103.200.20.117:5500/api"

const request = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json" },
})

export { request }
