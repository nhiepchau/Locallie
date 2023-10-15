import { Text, TouchableOpacity } from "react-native"

const OutlinedButton = ({ style, title, children, onPress, styleText }) => {
	return (
		<TouchableOpacity
			className="rounded-medium h-10 my-auto border-primary inline-block p-2 border-red-normal"
			onPress={onPress}
			style={style}
		>
			{!children ? (
				<Text className=" text-red-normal font-semibold" style={styleText}>
					{title}
				</Text>
			) : (
				children
			)}
		</TouchableOpacity>
	)
}

export default OutlinedButton
