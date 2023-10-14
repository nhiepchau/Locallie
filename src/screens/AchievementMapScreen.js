import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useMemo, useRef, useState } from "react"
import { View } from "react-native"
import { useSelector } from "react-redux"
import AchievementCard from "../components/Achievement/AchievementCard"
import CustomTextInput from "../components/Input/CustomTextInput"
import Layout from "../components/Layout/Layout"
import Map from "../components/Map/Map"
import useService from "../hooks/useService"
import { getActivityById } from "../services/activity"
import { getSuggestBuddies } from "../services/user"


const AchievementMapScreen = () => {
	const sheetRef = useRef(null)

	const snapPoints = useMemo(() => ["25%", "50%", "90%"], [])


	const userId = useSelector((state) => state.user._id)
	const [chosen, setChosen] = useState("65268aed6d7dd5c94b27fc22")
	const [markers, setMarkers] = useState([])
	const [image, setImage] = useState("")

	const { data } = useService({
			service: () => getSuggestBuddies(userId),
		})

	const changeChosen = async (chosen) => {
		const activityIds = chosen?.activities?.map((activity) => {
			if (activity.activityId !== undefined) return activity.activityId
		})

		const markers = await Promise.all(
			activityIds.map(async (activityId) => {
				try {
					const activityLocation = await getActivityById(activityId)
					return activityLocation?.data?.location
				} catch (error) {
					console.log(error)
				}
			})
		)

		setChosen(chosen._id)
		setImage(chosen?.image)
		setMarkers(markers)
	}

	return (
		<Layout>
			<Map markers={markers} team={true} img={image}></Map>
			<BottomSheet ref={sheetRef} snapPoints={snapPoints}>
				<CustomTextInput placeholder={"Search your team"} />
				<BottomSheetFlatList
					data={data?.reduce((acc, buddy) => buddy?.obj?.buddy?.includes(userId) || buddy?.obj?._id === userId ?[...acc, buddy?.obj] : acc, [])}
					keyExtractor={(_, i) => i}
					renderItem={({ item }) => (
						<AchievementCard
							{...item}
							active={item._id == chosen}
							onPress={() => changeChosen(item)}
						/>
					)}
					ItemSeparatorComponent={() => <View className="mx-6 bg-gray h-[1]" />}
				/>
			</BottomSheet>
		</Layout>
	)
}

export default AchievementMapScreen
