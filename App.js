import React from "react"
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Provider } from "react-redux"
import MainNavigator from "./src/navigator/MainNavigator"
import store from "./src/redux/store"

export default function App() {
	return (
		<Provider store={store}>
			<GestureHandlerRootView className="flex-1">
				<MainNavigator />
			</GestureHandlerRootView>
		</Provider>
	)
}
