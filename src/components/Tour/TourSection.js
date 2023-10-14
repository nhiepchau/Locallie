import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"
import VerticalList from "../List/VerticalList"
import TourList from "./TourList"
import TourCard from "./TourCard"

const TourSection = () => {
	const navigation = useNavigation()
	return (
		<>
			<View className="flex flex-row justify-between items-center">
				<Text className="text-title1 font-semibold">Tours Suggestion</Text>
			</View>
			<View className="flex flex-row items-center">
				<Ionicons name="location" size={18} color="#222222" />
				<Text className="text-ink-light"> Find tours that you find most interesting</Text>
			</View>
			<VerticalList Item={TourCard} data={TourList?.slice(0, 5)} />
		</>
	)
}

export default TourSection
