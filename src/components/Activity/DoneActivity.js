import { Ionicons, Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import useService from "../../hooks/useService"
import { getUserById } from "../../services/user"
import BadgeCustom from "../Badge/BadgeCustom"
import PrimaryBadge from "../Badge/PrimaryBadge"
import VerticalList from "../List/VerticalList"
import ActivityCard from "./ActivityCard"

const DoneActivity = () => {
	const navigation = useNavigation()
	const { data } = useService({
		service: () => getUserById("65268aed6d7dd5c94b27fc22"),
	})

	const activities = useSelector((state) => state.activityList)

	const [selected, setSelected] = useState("All")
	const categories = [
		"All",
		"Planting",
		"Wall Painting",
		"Cleanup",
		"Collect",
		"Workshop",
	]
	return (
		<>
			<View className="flex flex-row justify-between items-center">
				<Text className="text-title1 font-semibold">Finished Activities</Text>
				<TouchableOpacity
					className="text-xs"
					onPress={() => navigation.navigate("SearchScreen")}
				>
					<Text className="text-ink-light">
						<Text>On map </Text>
						<Feather className="my-auto" name="chevron-right" size={14} />
					</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={categories}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) =>
					item === selected ? (
						<PrimaryBadge
							value={item}
							onPress={() => setSelected(item)}
							style="py-1 rounded-lg"
						/>
					) : (
						<BadgeCustom
							value={item}
							onPress={() => setSelected(item)}
							style="py-1 rounded-lg"
							styleText={{ color: "#3E4E63" }}
						/>
					)
				}
			/>
			<VerticalList Item={ActivityCard} data={data?.activities.slice(0, 5)} />
		</>
	)
}

export default DoneActivity
