import { Text, TouchableOpacity } from "react-native"

const OutlinedButton = ({ style, title, children, onPress, styleText }) => {
	return (
		<TouchableOpacity
			className="rounded-medium border-primary inline-block p-2 border-primary-normal"
			onPress={onPress}
			style={style}
		>
			{!children ? (
				<Text className=" text-primary-normal" style={styleText}>
					{title}
				</Text>
			) : (
				children
			)}
		</TouchableOpacity>
	)
}

export default OutlinedButton
