import { ScrollView } from "react-native-gesture-handler"
import { FlatList } from "react-native-gesture-handler"
import { theme } from "../../tailwind.config"
import BuddySection from "../components/Buddy/BuddySection"
import MainInput from "../components/Input/MainInput"
import Layout from "../components/Layout/Layout"
import Section from "../components/Layout/Section"
import useService from "../hooks/useService"
import { getUserById } from "../services/user"
import { useState } from "react"
import PrimaryBadge from "../components/Badge/PrimaryBadge"
import BadgeCustom from "../components/Badge/BadgeCustom"
import TourSection from "../components/Tour/TourSection"

const HomeScreen = ({ navigation }) => {
	const { data } = useService({
		service: () => getUserById("65268aed6d7dd5c94b27fc22"),
	})
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
		<Layout statusBarBgColor={theme.colors.primary.darker}>
			<ScrollView refreshing={false}>
				<Section className="flex-1 py-5 bg-white shadow-md shadow-ink-light">
					<MainInput
						placeholder={"Where do you want to go today?"}
						onPress={() => navigation.navigate("SearchScreen")}
					/>

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
				</Section>
				<Section className="flex-1 mt-5">
					<TourSection />
				</Section>
				<Section className="flex-1">
					<BuddySection />
				</Section>
			</ScrollView>
		</Layout>
	)
}

export default HomeScreen
