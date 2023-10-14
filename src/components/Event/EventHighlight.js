import BadgeCustom from "../Badge/BadgeCustom"
import { View, Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Feather, Entypo, Ionicons } from "@expo/vector-icons"
import moment from "moment"
import useService from "../../hooks/useService"
import { getActivityById } from "../../services/activity"
import { useSelector } from "react-redux"

const tags = ["Planting", "Near you", "Clean up"]

const EventHighLight = ({ eventId }) => {
	const { data } = useService({ service: () => getActivityById(eventId) })
	const location = useSelector((state) => state.location)

	return (
		<View className="bg-white mx-4 rounded-medium shadow-sm shadow-ink-light mb-4">
			<FlatList
				horizontal={true}
				className="mt-4 mb-5 mx-auto"
				data={tags}
				renderItem={({ item }) => <BadgeCustom value={item}></BadgeCustom>}
			></FlatList>
			<Text className="text-center text-title1 font-semibold">
				{data?.name}
			</Text>
			<View className="flex flex-row justify-between mt-2 mx-3 mb-6">
				<View className="flex flex-row items-center gap-x-1">
					<Ionicons name="calendar-sharp" size={14} color="#006657" />
					<Text className="text-xs text-ink-light">
						{moment(data?.startDate).utc().format("ddd, MMM DD")} -{" "}
						{moment(data?.endDate).utc().format("ddd, MMM DD")}
					</Text>
				</View>
				<View className="flex flex-row items-center gap-x-1">
					<Entypo name="location-pin" size={18} color="#006657" />
					<Text className="text-xs text-ink-light">{location ? Math.sqrt(Math.pow((location?.coords?.latitude - data?.location.lat), 2) + Math.pow((location?.coords?.longitude - data?.location.long), 2)).toFixed(2) : 2} km</Text>
				</View>
				<View className="flex flex-row items-center gap-x-1">
					<Feather name="users" size={14} color="#006657" />
					<Text className="text-xs text-ink-light">
						{data?.joinedUser?.length} / 100
					</Text>
				</View>
			</View>
		</View>
	)
}

export default EventHighLight
