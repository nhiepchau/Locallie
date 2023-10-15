import { View, Text, TouchableOpacity } from "react-native"
import { useMemo, useState } from "react"
import { Ionicons } from "@expo/vector-icons"

const convertOverview = (adult, child, baby, pet) => {
    if (adult == 0 && child == 0 && baby == 0 && pet == 0)
        return "I'm on my own"
    const values = [adult > 0 ? `${adult} adults` : "", child > 0 ? `${child} children` : "", baby > 0 ? `${baby} infants` : "", pet > 0 ? `${pet} pets` : ""] 
    return values.filter(x => x !== "").join(', ')
}

const WhoCustom = () => {
    const [visible, setVisible] = useState(false)
    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    const [baby, setBaby] = useState(0)
    const [pet, setPet] = useState(0)

    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(!visible)} className='flex-row justify-between rounded-2xl shadow shadow-gray border-2 border-ink-normal bg-white px-3 py-4 mt-3'>
                <Text className='text-small text-ink-light'>People coming</Text>
                <Text className='text-small text-dark-darker font-semibold'>{convertOverview(adult, child, baby, pet)}</Text>
            </TouchableOpacity>

            <View style={{ display: visible ? 'block' : 'none' }} className='rounded-2xl shadow-md shadow-gray bg-white px-3 py-4 mt-3'>
                <Text className='text-title1 font-semibold mb-4'>Who's coming?</Text>
                <View className='flex-col gap-y-5'>
                    <View className='flex-row justify-between'>
                        <View className='my-auto'>
                            <Text className='text-xnormal'>Adults</Text>
                            <Text className='text-xsmall text-ink-light'>Ages 13 or above</Text>
                        </View>
                        <View className='flex-row gap-x-2 my-auto'>
                            <TouchableOpacity className='my-auto' onPress={() => {
                                if (adult > 0)
                                    setAdult(adult - 1)
                            }}>
                                <Ionicons name="remove-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                            <Text className='font-semibold text-xnormal my-auto'>{adult}</Text>
                            <TouchableOpacity className='my-auto' onPress={() => setAdult(adult + 1)}>
                                <Ionicons name="add-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='flex-row justify-between'>
                        <View className='my-auto'>
                            <Text className='text-xnormal'>Children</Text>
                            <Text className='text-xsmall text-ink-light'>Ages 2 - 12</Text>
                        </View>
                        <View className='flex-row gap-x-2 my-auto'>
                            <TouchableOpacity className='my-auto' onPress={() => {
                                if (child > 0)
                                    setChild(child - 1)
                            }}>
                                <Ionicons name="remove-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                            <Text className='font-semibold text-xnormal my-auto'>{child}</Text>
                            <TouchableOpacity className='my-auto' onPress={() => setChild(child + 1)}>
                                <Ionicons name="add-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='flex-row justify-between'>
                        <View className='my-auto'>
                            <Text className='text-xnormal'>Infants</Text>
                            <Text className='text-xsmall text-ink-light'>Under 2</Text>
                        </View>
                        <View className='flex-row gap-x-2 my-auto'>
                            <TouchableOpacity className='my-auto' onPress={() => {
                                if (baby > 0)
                                    setBaby(baby - 1)
                            }}>
                                <Ionicons name="remove-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                            <Text className='font-semibold text-xnormal my-auto'>{baby}</Text>
                            <TouchableOpacity className='my-auto' onPress={() => setBaby(baby + 1)}>
                                <Ionicons name="add-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='flex-row justify-between'>
                        <View className='my-auto'>
                            <Text className='text-xnormal'>Pets</Text>
                            <Text className='text-xsmall underline text-ink-light'>Bringing a service animal?</Text>
                        </View>
                        <View className='flex-row gap-x-2 my-auto'>
                            <TouchableOpacity className='my-auto' onPress={() => {
                                if (pet > 0)
                                    setPet(pet - 1)
                            }}>
                                <Ionicons name="remove-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                            <Text className='font-semibold text-xnormal my-auto'>{pet}</Text>
                            <TouchableOpacity className='my-auto' onPress={() => setPet(pet + 1)}>
                                <Ionicons name="add-circle-outline" size={24} color={'#727272'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default WhoCustom