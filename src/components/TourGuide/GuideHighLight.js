import BadgeCustom from "../Badge/BadgeCustom"
import { View, Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Feather, Entypo, Ionicons } from "@expo/vector-icons"
import { TourGuideList } from "../Tour/TourList"
import Avatar from "../Other/Avatar"



const GuideHighLight = ({ guideId }) => {
    const tags = ["Planting", "Near you", "Clean up"]

	const tourguide = TourGuideList.find(x => x.tourguideId == guideId)

	return (
		<View className="bg-white mx-4 rounded-medium shadow-md shadow-ink-light mb-4">
			<Text className='font-semibold text-xnormal text-ink-light mx-auto my-4'>Local Buddy</Text>
            <Avatar src={{uri: tourguide.avatar}} />
			<Text className="text-center text-title1 font-semibold">
				{tourguide?.name}
			</Text>
			<View className="flex flex-row justify-between mt-2 mx-3 mb-6">
				<View className="flex flex-row items-center gap-x-1">
					<Text className="text-small text-dark-darker">
						<Text className='font-bold'>3</Text>
                        <Text> years experience</Text>
					</Text>
				</View>
				<View className="flex flex-row items-center gap-x-1">
					<Text className="text-small text-ink-light">
                        <Text className='text-dark-darker font-bold'>{tourguide.rating} </Text>
                        <Ionicons
                                    name="star"
                                    size={14}
                                    color="black"
                            />
                    </Text>
				</View>
				<View className="flex flex-row items-center gap-x-1 text-small">
                    <Text className='font-bold'>{tourguide.numberOfRating}</Text>
					<Text className="text-ink-light">
						 reviews
					</Text>
				</View>
			</View>
		</View>
	)
}

export default GuideHighLight
