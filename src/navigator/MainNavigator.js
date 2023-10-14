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
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== "granted") {
				//setErrorMsg("Permission to access location was denied")
				return
			}

			let location = await Location.getCurrentPositionAsync({})
			dispatch(locationSlice.actions.setLocation(location))
		})()
	}, [])
	const routes = {
		Home: "home",
		Discovery: "search",
		Achievement: "trophy",
		User: "user",
	}
	return (
		<NavigationContainer initialRouteName="HomeNavigator">
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name={routes[route.name]} size={size} color={color} />
					),
					tabBarActiveTintColor: theme.colors.primary.normal,
					tabBarInactiveTintColor: "gray",
					headerShown: false,
				})}
			>
				<Tab.Screen name="Home" component={HomeNavigator} />
				<Tab.Screen name="Discovery" component={SearchScreen} />
				<Tab.Screen name="Achievement" component={AchievementMapScreen} />
				<Tab.Screen name="User" component={UserScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default MainNavigator
