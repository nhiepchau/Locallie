import { Text, TouchableOpacity } from "react-native"

const FilledButton = ({ style, title, children, onPress, styleText }) => {
	return (
		<TouchableOpacity
			className="rounded-medium inline-block p-2 bg-red-normal"
			onPress={onPress}
			style={style}
		>
			{!children ? (
				<Text className="text-white font-semibold" style={styleText}>
					{title}
				</Text>
			) : (
				children
			)}
		</TouchableOpacity>
	)
}

export default FilledButton
