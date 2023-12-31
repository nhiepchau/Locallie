import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"
import VerticalList from "../List/VerticalList"
import { TourList } from "./TourList"
import TourCard from "./TourCard"
import { useSelector } from "react-redux"

const TourSection = () => {
	const location = useSelector((state) => state.location)
	const startDate = useSelector((state) => state.startDate)
	const endDate = useSelector((state) => state.endDate)
	const tripType = useSelector((state) => state.tripType)

	const filterCondition = () => {
		let result = TourList
		if (location !== "I'm flexible")
			result = result?.filter(x => x.city == location)
		if (endDate != null)
			result = result?.filter(x => new Date(startDate) >= x.startDate && new Date(endDate) <= x.endDate)
		if (tripType !== "I'm all in")
			result = result?.filter(x => tripType.includes(x.travelType))

		return result
	}
	return (
		<>
			<View className="flex flex-row justify-between items-center">
				<Text className="text-title1 font-semibold">Tours Suggestion</Text>
			</View>
			<View className="flex flex-row items-center">
				<Ionicons name="location" size={18} color="#222222" />
				<Text className="text-ink-light"> Find tours that you find most interesting</Text>
			</View>
			<VerticalList Item={TourCard} data={filterCondition().slice(0, 5)} />
		</>
	)
}

export default TourSection
