import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen.js"
import SearchScreen from "../screens/SearchScreen.js"
import DetailScreen from "../screens/DetailScreen.js"

const Stack = createStackNavigator()

const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="SearchScreen" component={SearchScreen} />
			<Stack.Screen name="DetailScreen" component={DetailScreen} />
		</Stack.Navigator>
	)
}

export default HomeNavigator
