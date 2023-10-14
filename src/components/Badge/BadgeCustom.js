import { TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "react-native"

const BadgeCustom = ({ value, onPress, style, styleText }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={"bg-cloud-normal mr-2 rounded-normal px-2 " + style}
		>
			<Text className="text-center text-primary-darker" style={styleText}>
				{value}
			</Text>
		</TouchableOpacity>
	)
}

export default BadgeCustom
