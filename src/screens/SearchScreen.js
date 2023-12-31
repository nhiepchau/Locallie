import { View, Text } from "react-native"
import Layout from "../components/Layout/Layout"
import { theme } from "../../tailwind.config"
import { useState } from "react"
import WhereCustom from "../components/Filter/WhereCustom"
import WhenCustom from "../components/Filter/WhenCustom"
import WhoCustom from "../components/Filter/WhoCustom"
import TripTypeCustom from "../components/Filter/TripTypeCustom"
import { ScrollView } from "react-native-gesture-handler"

const SearchScreen = () => {
	return (
		<Layout>
			<ScrollView className='h-full pt-5 px-4 pb-7 flex-col gap-y-3' style={{backgroundColor: '#F8F8F8'}}>
				<Text className='text-title1 font-semibold mb-3'>Where do you want to go today?</Text>
				<WhereCustom />
				<WhenCustom />
				<WhoCustom />
				<TripTypeCustom />
			</ScrollView>
		</Layout>
	)
}

export default SearchScreen
