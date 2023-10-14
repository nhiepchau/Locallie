import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Image, View } from "react-native"

const ActivityMarker = ({ name, team, img }) => {
	return (
		<View
			className="items-center justify-end"
			style={{ position: "relative", width: 80, height: 120 }}
		>
			<View
				className="bg-primary-lighter border-2 border-primary-darker justify-center items-center p-1"
				style={{ borderRadius: 9999, width: 50, height: 50 }}
			>
				<View className="bg-primary-darker p-1" style={{ borderRadius: 9999 }}>
					<MaterialCommunityIcons name={name} size={20} color="white" />
				</View>
			</View>
			{team && (
				<View
					className="bg-primary-lighter p-2 border-2 border-dashed border-primary-darker w-[80] h-[80]"
					style={{ position: "absolute", top: 0, left: 0, borderRadius: 9999 }}
				>
					<Image
						className="w-full h-full bg-primary-dark"
						style={{ borderRadius: 9999 }}
						source={{
							uri: img,
						}}
					/>
				</View>
			)}
		</View>
	)
}

export default ActivityMarker
