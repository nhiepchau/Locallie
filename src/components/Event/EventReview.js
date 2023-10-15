import { FlatList } from "react-native-gesture-handler"
import ReviewItem from "./ReviewItem"
import { View, Text, Image, StyleSheet } from "react-native"

const reviews = [
	{
		user: "Nguyen Thanh Truc",
		avatar: "https://2sao.vietnamnetjsc.vn/images/2022/09/03/14/16/tinh-duc-2.jpg",
		postedTime: "2 hours ago",
		comment:
			"Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum",
		rating: 3,
	},
	{
		user: "Nhiep Bao Chau",
		avatar: "https://media.istockphoto.com/id/513474980/vi/anh/ch%C3%A2n-dung-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-ch%C3%A2u-%C3%A1-%C4%91%E1%BA%B9p-trai-nh%E1%BA%A5t.jpg?s=612x612&w=0&k=20&c=zDHVqWI36wWiHskvh70KcjtePBE2pKUwpa49rjIsa3Y=",
		postedTime: "A day ago",
		comment:
			"Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est",
		rating: 5,
	},
	{
		user: "Huynh Ngoc Nhu",
		avatar: "https://2sao.vietnamnetjsc.vn/images/2022/09/03/14/16/tinh-duc-2.jpg",
		postedTime: "A month ago",
		comment:
			"Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est",
		rating: 4,
	},
	{
		user: "Doan Thuc Quyen",
		avatar: "https://media.istockphoto.com/id/513474980/vi/anh/ch%C3%A2n-dung-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-ch%C3%A2u-%C3%A1-%C4%91%E1%BA%B9p-trai-nh%E1%BA%A5t.jpg?s=612x612&w=0&k=20&c=zDHVqWI36wWiHskvh70KcjtePBE2pKUwpa49rjIsa3Y=",
		postedTime: "3 months ago",
		comment:
			"Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est",
		rating: 5,
	},
]

const avgRating =
	(reviews.map((x) => x.rating).reduce((sum, x) => sum + x, 0) * 1.0) /
	reviews.length

const EventReview = () => {
	return (
		<View className="h-full bg-white px-2 pt-5">
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<ReviewItem
						user={item.user}
						avatar={item.avatar}
						postedTime={item.postedTime}
						comment={item.comment}
						rating={item.rating}
					></ReviewItem>
				)}
			></FlatList>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 25,
		height: 25,
	},
})

export default EventReview
