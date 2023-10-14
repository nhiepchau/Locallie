import { Image, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const CityItem = ({ city, isSelected, onPress }) => {
    let image
    if (isSelected) {
        image = <View className='border-2 border-red-normal rounded-md'><Image source={{uri: city.imageUrl}} className='w-20 h-20 rounded' /></View>
    } else {
        image = <View className='border-2 border-cloud-normal rounded-md'><Image source={{uri: city.imageUrl}} className='w-20 h-20 rounded' /></View>
    }

    return (
        <TouchableOpacity className='mr-3' onPress={onPress}>
            {image}
            <Text className='mt-1'>{city.city}</Text>
        </TouchableOpacity>
    )
}

export default CityItem