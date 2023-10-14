import { View, Text } from "react-native"

const EventReward = () => {
	return (
		<View className="h-full bg-white px-2 pt-5">
			<Text className="font-semibold text-normal">Benefits</Text>
			<View className="mt-3 bg-primary-lighter rounded border-primary-light border-primary py-2 px-3">
				<Text className="font-semibold text-small">Point</Text>
				<View className="flex flex-row gap-x-5 mt-3">
					<Text className="text-small text-primary-normal">2 social days</Text>
					<Text className="text-small text-primary-normal">100 points</Text>
				</View>
			</View>
		</View>
	)
}

export default EventReward
