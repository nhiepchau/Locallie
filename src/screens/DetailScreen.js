import { View, Image, Text } from "react-native"
import EventHighLight from "../components/Event/EventHighlight"
import Layout from "../components/Layout/Layout"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import EventOverview from "../components/Event/EventOverview"
import EventReview from "../components/Event/EventReview"
import EventReward from "../components/Event/EventReward"
import { useRoute } from "@react-navigation/native"

const event = {
	title: "Plant for future",
	current: 20,
	max: 100,
	distance: 1.2,
	start: "Fri, Jul 14",
	end: "Sun, Jul 17",
	organization: "Vietnam Women’s Union",
	address: "Đ. Võ Thị Sáu, Quận 1",
	socialDays: 2,
	socialPoints: 100,
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
}

const Tab = createMaterialTopTabNavigator()

const DetailScreen = () => {
	const route = useRoute()
	const eventId = route.params.eventId
	const image = route.params.image

	return (
		<Layout>
			<View className="flex-1 pt-32 bg-white">
				<Image
					className="w-full h-1/3 absolute"
					source={{uri: image}}
				></Image>
				<EventHighLight eventId={eventId}></EventHighLight>
				<Tab.Navigator
					className="mx-4"
					screenOptions={{
						tabBarActiveTintColor: "#009580",
						tabBarInactiveTintColor: "#4A617C",
						tabBarIndicatorStyle: { backgroundColor: "#009580" },
					}}
				>
					<Tab.Screen
						name="OVERVIEW"
						component={EventOverview}
						initialParams={{ id: eventId }}
					/>
					<Tab.Screen name="REWARD" component={EventReward} />
					<Tab.Screen name="REVIEW" component={EventReview} />
				</Tab.Navigator>
			</View>
		</Layout>
	)
}

export default DetailScreen
