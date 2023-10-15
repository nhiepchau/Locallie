import { ScrollView, Text } from "react-native"
import { TourList } from "../Tour/TourList"
import VerticalList from "../List/VerticalList"
import { useRoute } from "@react-navigation/native"
import TourCard from "../Tour/TourCard"

const EventReward = () => {
	const route = useRoute()
	const guideId = route.params.id

	return (
		<ScrollView className="h-full bg-white px-2 pt-5 pb-10">
			<Text className="font-semibold text-normal">My Available Tours</Text>
			<VerticalList Item={TourCard} data={TourList.filter(x => x.tourguideId == guideId).slice(0, 5)} />
		</ScrollView>
	)
}

export default EventReward
