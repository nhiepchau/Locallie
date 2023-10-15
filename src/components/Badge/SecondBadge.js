import { TouchableOpacity } from "react-native-gesture-handler"
import { Text, View } from "react-native"

const SecondBadge = ({ value, onPress, isSelected }) => {
    let badge
    if (isSelected) {
        badge = (
            <TouchableOpacity
                onPress={onPress}
                className={"bg-dark-darker mr-2 px-3 py-2 rounded-lg"}
            >
                <Text className="text-center text-dark-lighter">
                    {value}
                </Text>
            </TouchableOpacity>
        )
    } else {
        badge = (
            <TouchableOpacity
                onPress={onPress}
                className={"bg-cloud-normal mr-2 px-3 py-2 rounded-lg"}
            >
                <Text className="text-center text-primary-darker">
                    {value}
                </Text>
            </TouchableOpacity>
        )
    }

	return (
		<View className='my-1'>
            {badge}
        </View>
	)
}

export default SecondBadge
