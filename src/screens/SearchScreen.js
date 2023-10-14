import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useMemo, useRef } from "react"
import { View } from "react-native"
import ActivityCard from "../components/Activity/ActivityCard"
import CustomTextInput from "../components/Input/CustomTextInput"
import Layout from "../components/Layout/Layout"
import Map from "../components/Map/Map"
import useService from "../hooks/useService"
import { getAllActivies } from "../services/activity"

const SearchScreen = () => {
	const sheetRef = useRef(null)

	const snapPoints = useMemo(() => ["25%", "50%", "90%"], [])

	const { data } = useService({ service: () => getAllActivies() })

	const markers = data?.map((activity) => activity.location)

	return (
		<Layout>
			<Map markers={markers}></Map>
			<BottomSheet ref={sheetRef} snapPoints={snapPoints}>
				<CustomTextInput placeholder={"What do you want to do today?"} />
				<BottomSheetFlatList
					data={data}
					keyExtractor={(_, i) => i}
					renderItem={({ item }) => (
						<View className="my-4">
							<ActivityCard {...item} />
						</View>
					)}
					ItemSeparatorComponent={() => <View className="mx-6 bg-gray h-[1]" />}
				/>
			</BottomSheet>
		</Layout>
	)
}

export default SearchScreen
