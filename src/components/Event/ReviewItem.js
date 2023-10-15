import { View, Text, Image } from "react-native"
import { Rating } from "react-native-ratings"

const ReviewItem = ({ avatar, user, rating, comment, postedTime }) => {
	return (
		<View className="bg-cloud-light rounded-md p-3 mb-3">
			<View className="flex-row justify-between">
				<View className="flex-row gap-x-3">
					<Image className='w-[60px] h-[60px] rounded-full' source={{uri: avatar}} />
					<View className="my-auto">
						<Text className="text-small font-semibold">{user}</Text>
						<Text className="text-ink-light">{postedTime}</Text>
					</View>
				</View>
				<Rating
					className="my-auto"
					ratingImage={'https://clipart-library.com/images/8T6og67ac.png'}
					ratingColor="#F5F7F9"
					ratingBackgroundColor="#F5F7F9"
					type="custom"
					ratingCount={rating}
					imageSize={20}
				></Rating>
			</View>
			<Text className="mt-2">{comment}</Text>
		</View>
	)
}

export default ReviewItem
