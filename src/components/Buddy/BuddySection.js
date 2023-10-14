import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import useService from "../../hooks/useService"
import { getSuggestBuddies } from '../../services/user'
import VerticalList from "../List/VerticalList"
import BuddyCard from "./BuddyCard"

const BuddySection = () => {
	const userId = useSelector((state) => state.user._id)
	const { data } = useService({
		service: () => getSuggestBuddies(userId),
	})
	return (
		<View className="mt-5 mb-6">
			<Text className="text-title1 font-semibold mb-3">More Buddies</Text>
			<VerticalList Item={BuddyCard} data={data?.reduce((acc, buddy) => !buddy?.obj?.buddy?.includes(userId) && buddy?.obj?._id !== userId ?[...acc, buddy?.obj] : acc, [])} />
		</View>
	)
}

export default BuddySection
