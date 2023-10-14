import { FontAwesome } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { theme } from "../../../tailwind.config"

const SocialPoint = ({ name, number }) => {
	return (
		<View className="flex-row gap-x-2 rounded-primary items-center">
			<Text className="text-title2 font-bold">{name}</Text>
			<View className="flex-row items-center">
				<Text className="text-primary-normal">{number} </Text>
				<FontAwesome
					name="tree"
					size={16}
					color={theme.colors.primary.normal}
				/>
			</View>
		</View>
	)
}

export default SocialPoint
