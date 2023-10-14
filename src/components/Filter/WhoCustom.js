import { View, Text } from "react-native"
import { useState } from "react"

const WhoCustom = () => {
    const [friend, setFriend] = useState('Add guests')

    return (
        <View className='flex-row justify-between rounded-2xl shadow shadow-gray border-2 border-ink-normal bg-white px-3 py-4 mt-3'>
            <Text className='text-small text-ink-light'>Who</Text>
            <Text className='text-small text-dark-darker font-semibold'>{friend}</Text>
        </View>
    )
}

export default WhoCustom