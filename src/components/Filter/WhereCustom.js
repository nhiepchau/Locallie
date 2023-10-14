import { View, Text, TouchableOpacity } from "react-native"
import { useState } from "react"
import { FlatList } from "react-native-gesture-handler"
import CityList from "../City/CityList"
import CityItem from "../City/CityItem"
import { useDispatch, useSelector } from "react-redux"
import { setLocation } from "../../redux/reducers/locationSlice"

const WhereCustom = () => {
    const location = useSelector((state) => state.location)
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)

    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(!visible)} className='flex-row justify-between rounded-2xl shadow shadow-gray border-2 border-ink-normal bg-white px-3 py-4 mt-3'>
                <Text className='text-small text-ink-light'>Where</Text>
                <Text className='text-small text-dark-darker font-semibold'>{location}</Text>
            </TouchableOpacity>

            <View style={{ display: visible ? 'block' : 'none' }} className='rounded-2xl shadow-md shadow-gray bg-white px-3 py-4 mt-3'>
                <Text className='text-title1 font-semibold mb-4'>Where to?</Text>
                <FlatList 
                    data={CityList} 
                    horizontal={true}
					showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <CityItem city={item} 
                                isSelected={item.city == location} 
                                onPress={() => dispatch(setLocation(item.city))} 
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default WhereCustom