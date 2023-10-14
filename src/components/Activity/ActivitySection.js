import { Ionicons, Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import useService from "../../hooks/useService"
import { getAllActivies } from "../../services/activity"
import BadgeCustom from "../Badge/BadgeCustom"
import PrimaryBadge from "../Badge/PrimaryBadge"
import VerticalList from "../List/VerticalList"
import ActivityCard from "./ActivityCard"

const ActivitySection = () => {
	const navigation = useNavigation()
	const { data } = useService({ service: () => getAllActivies() })
	console.log(data?.filter(t => !t.joinedUser?.includes("65268aed6d7dd5c94b27fc22")))
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
				<Text className="text-title1 font-semibold">Activities Suggestion</Text>
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
			<View className="flex flex-row items-center">
				<Ionicons name="location" size={18} color="#009580" />
				<Text className="text-ink-light"> Find activities near you</Text>
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
			<VerticalList Item={ActivityCard} data={data?.filter(t => !t.joinedUser?.includes("65268aed6d7dd5c94b27fc22"))?.slice(0, 5)} />
		</>
	)
}

export default ActivitySection
