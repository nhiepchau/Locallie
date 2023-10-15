import { TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

const PlusMinusButton = ({ name }) => {
    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Text>{name}</Text>
            <View className='flex-row gap-x-2'>
                <TouchableOpacity onPress={() => setCounter(counter - 1)}>
                    <Ionicons name="remove-circle-outline" size={16} color={'#F5F7F9'} />
                </TouchableOpacity>
                <Text>{counter}</Text>
                <TouchableOpacity onPress={() => setCounter(counter + 1)}>
                    <Ionicons name="add-circle-outline" size={16} color={'#F5F7F9'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PlusMinusButton