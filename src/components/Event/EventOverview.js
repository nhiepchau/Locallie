import { Feather, Ionicons } from "@expo/vector-icons"
import FilledButton from "../Button/FilledButton"
import OutlinedButton from "../Button/OutlinedButton"
import { View, Text } from "react-native"
import moment from "moment"
import useService from "../../hooks/useService"
import { getActivityById } from "../../services/activity"
import { useRoute } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { useState } from "react"
import { registerActivity } from "../../services/activity"
import { useDispatch } from "react-redux"
import { TourGuideList } from "../Tour/TourList"
import { addActivity } from "../../redux/reducers/activitySlice"
import SecondBadge from "../Badge/SecondBadge"

const EventOverview = () => {
	const route = useRoute()
	const guideId = route.params.id
	const tourguide = TourGuideList.find(x => x.tourguideId == guideId)

	const tripType = tourguide.hobby

    let typeList = []
    let index = 0
    let temp = []
    tripType.forEach(element => {
        if ((index % 2 == 0 && index != 0) || index == tripType.length - 1) {
            temp.push((<SecondBadge value={element} />))
            typeList.push((<View className='flex-row gap-x-2'>{temp}</View>))
            temp = []
        } else {
            temp.push((<SecondBadge value={element} />))
        }
        index++
	})

	return (
		<ScrollView className="h-full bg-white px-2 pt-5">
			<View>
				<Text className="font-semibold text-normal">About</Text>

			</View>
			<View className="mt-3">
				<Text className="font-semibold text-small">Ask {tourguide.name} about</Text>
				<View className='grid grid-cols-3'>{typeList}</View>
			</View>
			<View className="mt-3">
				<Text className="font-semibold text-small">Description</Text>
				<Text className="text-ink-light text-xsmall">{tourguide.description}</Text>
			</View>
			<View className="flex-row gap-x-2 mt-4 mb-10 justify-end">
				<FilledButton title={'BOOK TOUR'} ></FilledButton>
			</View>
		</ScrollView>
	)
}

export default EventOverview
