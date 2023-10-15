import { FontAwesome } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import * as Location from "expo-location"
import React, { useEffect } from "react"
import "react-native-gesture-handler"
import { useDispatch } from "react-redux"
import { theme } from "../../tailwind.config.js"
import locationSlice from "../redux/reducers/locationSlice"
import AchievementMapScreen from "../screens/AchievementMapScreen.js"
import SearchScreen from "../screens/SearchScreen.js"
import UserScreen from "../screens/UserScreen.js"
import HomeNavigator from "./HomeNavigator.js"

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
	const routes = {
		Home: "home",
	}
	return (
		<NavigationContainer initialRouteName="HomeNavigator">
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name={routes[route.name]} size={size} color={color} />
					),
					tabBarActiveTintColor: theme.colors.red.normal,
					tabBarInactiveTintColor: "gray",
					headerShown: false,
				})}
			>
				<Tab.Screen name="Home" component={HomeNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default MainNavigator
