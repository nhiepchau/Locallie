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
import { addActivity } from "../../redux/reducers/activitySlice"

const EventOverview = () => {
	const route = useRoute()
	const eventId = route.params.id
	const { data } = useService({ service: () => getActivityById(eventId) })
	const [title, setTitle] = useState('JOIN NOW!')
	const dispatch = useDispatch()

	return (
		<ScrollView className="h-full bg-white px-2 pt-5">
			<View>
				<Text className="font-semibold text-normal">{data?.name}</Text>
				<Text className="italic text-primary-normal mt-2">
					{data?.organizerID.name}
				</Text>
				<View className="flex flex-row justify-between mt-4">
					<Text className="text-xsmall">{data?.address}</Text>
					<Text className="text-xsmall font-semibold">2 km</Text>
				</View>

				<View className="flex flex-row justify-between mt-2">
					<View className="flex flex-row items-center gap-x-1">
						<Ionicons name="calendar-sharp" size={12} color="black" />
						<Text className="text-xsmall">
							{moment(data?.startDate).utc().format("ddd, MMM DD")} -{" "}
							{moment(data?.endDate).utc().format("ddd, MMM DD")}
						</Text>
					</View>
					<View className="flex flex-row items-center gap-x-1">
						<Feather name="users" size={12} color="black" />
						<Text className="text-xsmall font-semibold">
							{data?.joinedUser?.length} / 100
						</Text>
					</View>
				</View>
			</View>
			<View className="mt-3 bg-primary-lighter rounded border-primary-light border-primary py-2 px-3">
				<Text className="font-semibold text-small">Point</Text>
				<View className="flex flex-row gap-x-5 mt-3">
					<Text className="text-small text-primary-normal">2 social days</Text>
					<Text className="text-small text-primary-normal">100 points</Text>
				</View>
			</View>
			<View className="mt-3">
				<Text className="font-semibold text-small">Description</Text>
				<Text className="text-ink-light text-xsmall">{data?.description}</Text>
			</View>
			<View className="flex-row gap-x-2 mt-4 mb-10 justify-end">
				<OutlinedButton title="JOIN WITH TEAM"></OutlinedButton>
				<FilledButton title={title} onPress={() => {
					if (title == 'JOIN NOW!') {
						const { status } = registerActivity('65268aed6d7dd5c94b27fc22', eventId)
						setTitle('JOINED')
						dispatch(addActivity(data))
					}
				}}></FilledButton>
			</View>
		</ScrollView>
	)
}

export default EventOverview
