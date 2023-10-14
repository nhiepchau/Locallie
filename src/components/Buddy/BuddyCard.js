import { Ionicons } from "@expo/vector-icons"
import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { getActivityById } from "../../services/activity"
import { addBuddy } from "../../services/user"
import OutlinedButton from "../Button/OutlinedButton"
import Avatar from "../Other/Avatar"
import SocialPoint from "../Other/SocialPoint"

const BuddyCard = ({ _id, name, city, activities, image, buddy }) => {
	const [activityNames, setActivityNames] = useState("")
	const userId = useSelector((state) => state.user._id)
	const [isConnected, setIsConnected] = useState(buddy?.includes(userId) ? "Connected" : "Connect")
	useEffect(() => {
		const fetchData = async () => {
			const activityIds = activities?.map((activity) => {
				if (activity.activityId !== undefined) return activity.activityId
			})
		
			const activityNamesList = await Promise.all(
				activityIds.map(async (activityId) => {
					try {
						const activityDetail = await getActivityById(activityId)
						return activityDetail?.data?.name
					} catch (error) {
						console.log(error)
					}
				})
			)
			setActivityNames(activityNamesList.join(" "))
		}

		fetchData()
	}, [])

	const connect = async (buddyId) => {
		try {
			const res = await addBuddy(userId, {
				buddyId: buddyId,
			})
			console.log(res.data)
			setIsConnected("Connected")
		} catch (error) {
			console.log(error)
		}

	}

	return (
		<TouchableOpacity className="bg-white rounded-primary p-4">
			<View className="flex-row mb-1">
				<View className="flex-row">
					<Avatar
						src={{
							uri: image,
						}}
					/>
					<View className="ml-2">
						<SocialPoint className="flex-1" name={name} number={activities.length}  />
						<Text className="text-ink-light mt-[8px]">{city}</Text>
					</View>
				</View>
				<View className="flex-1 items-end">
					<OutlinedButton title={`${isConnected}`} className="px-4" onPress={() => connect(_id)}/>
				</View>
			</View>
			{activityNames && <Text>
				<Ionicons name="calendar-sharp" size={14} color="#009580" />
				{activityNames}
			</Text>}
		</TouchableOpacity>
	)
}
export default BuddyCard
