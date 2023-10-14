import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useState } from "react"

const useServices = ({ service, deps = [] }) => {
	const [data, setData] = useState(null)

	useFocusEffect(
		useCallback(() => {
		const fetchData = async () => {
			try {
				const res = await service()
				setData(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
		}, deps)
	)

	return { data }
}

export default useServices
