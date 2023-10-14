import { Foundation } from "@expo/vector-icons"
import { TextInput, View } from "react-native"

const CustomTextInput = ({ value, placeholder }) => {
	return (
		<View className="w-full flex-row items-center rounded-primary px-2 bg-white">
			<Foundation
				name="magnifying-glass"
				size={24}
				color="black"
				className="mr-2"
			/>
			<TextInput
				value={value}
				className="flex-1 h-[50] rounded-primary ml-2"
				placeholder={placeholder}
			></TextInput>
		</View>
	)
}

export default CustomTextInput
