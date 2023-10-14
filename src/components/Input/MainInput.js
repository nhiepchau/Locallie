import { TextInput, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"

const MainInput = ({ value, placeholder, onPress, style }) => {
	return (
		<View
			className="w-full flex-row px-2 items-center bg-white border-2 border-ink-normal rounded-3xl"
		>
			<TextInput
				editable={false}
				value={value}
				className="flex-1 h-[50]"
				style={{ color: "black", fontSize: 20, fontWeight: "500", borderRadius: 10 }}
				placeholderTextColor={"black"}
				placeholder={placeholder}
			></TextInput>
			<TouchableOpacity onPress={onPress}>
				<Ionicons name="arrow-forward" size={28} color={'black'} />
			</TouchableOpacity>
		</View>
	)
}

export default MainInput
