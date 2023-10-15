import { Image, View, Text } from "react-native"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import moment from "moment"
import { useNavigation } from "@react-navigation/native"
import FilledButton from "../Button/FilledButton"
import OutlinedButton from "../Button/OutlinedButton"

const TourCard = ({
    packageId,
    travelType,
    imageUrl,
    description,
    name,
    duration,
    startDate,
    endDate,
    price,
    rating,
    numberOfRating,
    tourguideId
}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            className="rounded-primary"
        >
            <View className='rounded-primary'>
                <Image source={{uri: imageUrl}} className="rounded-primary" resizeMethod="scale" aspectRatio={1} />
                <View className='flex-row justify-between mt-2'>
                    <Text className="text-xnormal font-semibold ">{name}</Text>
                    <Text className='my-auto'>
                        <Ionicons
                                name="star"
                                size={16}
                                color="black"
                        />
                        <Text className='text-xnormal'>{rating}</Text>
                        <Text className='text-xnormal text-ink-light'> ({numberOfRating})</Text>
                    </Text>
                </View>
            
                <View className='flex-row justify-between'>
                    <View>
                        <Text className='text-small text-ink-light'>{duration} hours - {travelType}</Text>
                        <Text className='text-small text-ink-light'>{moment(startDate).utc().format("ddd, MMM DD")} - {moment(endDate).utc().format("ddd, MMM DD")}</Text>
                        <Text className='text-small'>
                            <Text className='font-bold text-dark-darker'>${price}</Text>
                            <Text className='text-ink-light'> total</Text>
                        </Text>
                    </View>
                    <OutlinedButton title={'LOCAL BUDDY'} onPress={() =>
                        navigation.navigate("DetailScreen", {
                            guideId: tourguideId
                        })
                    } />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TourCard