import { View, Text } from "react-native"
import { useState } from "react"

const TripTypeCustom = () => {
    const [tripType, setTripType] = useState("I'm all in")

    return (
        <View className='flex-row justify-between rounded-2xl shadow shadow-gray border-2 border-ink-normal bg-white px-3 py-4 mt-3'>
            <Text className='text-small text-ink-light'>Trip Type</Text>
            <Text className='text-small text-dark-darker font-semibold'>{tripType}</Text>
        </View>
    )
}

export default TripTypeCustom