import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { useState } from "react"
import TripType from "./TripType"
import SecondBadge from "../Badge/SecondBadge"

const TripTypeCustom = () => {
    const [tripType, setTripType] = useState([])
    const [visible, setVisible] = useState(false)

    let typeList = []
    let index = 0
    let temp = []
    TripType.forEach(element => {
        if ((index % 3 == 0 && index != 0) || index == TripType.length - 1) {
            temp.push((<SecondBadge isSelected={tripType.includes(element.tripType)} onPress={() => {
                if (!tripType.includes(element.tripType)) {
                    setTripType(tripType.concat([element.tripType]))
                } else {
                    setTripType(tripType.filter(x => x == element.tripType))
                }
            }} value={element.tripType} />))
            typeList.push((<View className='flex-row gap-x-2'>{temp}</View>))
            temp = []
        } else {
            temp.push((<SecondBadge isSelected={tripType.includes(element.tripType)} onPress={() => {
                if (!tripType.includes(element.tripType)) {
                    setTripType(tripType.concat([element.tripType]))
                } else {
                    setTripType(tripType.filter(x => x == element.tripType))
                }
            }} value={element.tripType} />))
        }
        index++
    });

    return (
        <View className='mb-12'>
            <TouchableOpacity onPress={() => setVisible(!visible)} className='flex-row justify-between rounded-2xl shadow shadow-gray border-2 border-ink-normal bg-white px-3 py-4 mt-3'>
                <Text className='text-small text-ink-light'>Trip Type</Text>
                <Text className='text-small text-dark-darker font-semibold'>{tripType.join(', ')}</Text>
            </TouchableOpacity>
            <View style={{ display: visible ? 'block' : 'none' }} className='rounded-2xl shadow-md shadow-gray bg-white px-3 py-4 mt-3'>
                <Text className='text-title1 font-semibold mb-4'>Trip Type</Text>
                <View className='grid grid-cols-3'>{typeList}</View>
            </View>
        </View>
    )
}

export default TripTypeCustom