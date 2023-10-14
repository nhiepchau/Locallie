import { AntDesign, Feather, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import moment from "moment"
import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import useService from "../../hooks/useService"
import { addActivity, markJoin, markJoined } from "../../redux/reducers/activitySlice"
import { getActivityById, registerActivity } from "../../services/activity"
import FilledButton from "../Button/FilledButton"
const ActivityCard = ({
	_id,
	activityId,
	status,
}) => {
	const navigation = useNavigation()
	const { data } = useService({
		service: () => {
			if (activityId !== undefined) {
				return getActivityById(activityId)
			} else {
				return getActivityById(_id)
			}
		},
	})

	const location = useSelector((state) => state.location)

	const [action, setAction] = useState(
		status === 0 ? "JOINED" : status === 1 ? "FINISHED" : "JOIN"
	)

	const dispatch = useDispatch();

	return (
		<TouchableOpacity
			className="flex gap-y-2 bg-white rounded-primary px-5 pt-3 pb-5"
			onPress={() =>
				navigation.navigate("DetailScreen", {
					eventId: activityId !== undefined ? activityId : _id,
					image: data?.image
				})
			}
		>
			<View className="flex flex-row justify-between items-start">
				<View className="gap-y-2 basis-3/4">
					<Text className="text-title2 font-bold ">{data?.name}</Text>
					<Text className="text-primary-darker italic">
						{data?.organizerID?.name}
					</Text>
				</View>
				<FilledButton
					title={action}
					className="bg-primary-lighter px-4 py-2"
					styleText={{ color: "#276831", fontWeight: 500 }}
					onPress={() => {
						if (action == 'JOIN') {
							const { status } = registerActivity('65268aed6d7dd5c94b27fc22', data?._id)
							setAction('JOINED')
							dispatch(addActivity(data))
							alert(`Join activity ${data?.name} successfully!`)
						}
					}}
				/>
			</View>

			<View className="flex flex-row justify-between">
				<Text className="text-gray text-xs basis-4/5">{data?.address}</Text>
				<Text className="text-xs">{location ? Math.sqrt(Math.pow((location?.coords?.latitude - data?.location.lat), 2) + Math.pow((location?.coords?.longitude - data?.location.long), 2)).toFixed(2) : 2}km</Text>
			</View>
			<View className="flex flex-row justify-between ">
				<View className="flex flex-row items-center gap-x-1">
					<Ionicons name="calendar-sharp" size={14} color="#3E4E63" />
					<Text className="text-xs">
						{moment(data?.startDate).utc().format("ddd, MMM DD")}
					</Text>
					<AntDesign name="arrowright" size={10} color="black" />
					<Text className="text-xs">
						{moment(data?.endDate).utc().format("ddd, MMM DD")}
					</Text>
				</View>
				<View className="flex flex-row items-center gap-x-1">
					<Feather name="users" size={14} color="black" />
					<Text className="text-xs">{data?.joinedUser?.length} / 100</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
export default ActivityCard
