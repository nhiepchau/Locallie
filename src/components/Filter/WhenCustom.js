import { View, Text, TouchableOpacity } from "react-native"
import { useState } from "react"
import moment from "moment"
import CalendarPicker from "react-native-calendar-picker"
import { useDispatch, useSelector } from "react-redux"
import { actStartDate } from "../../redux/reducers/startDateSlice"
import { actEndDate } from "../../redux/reducers/endDateSlice"

const WhenCustom = () => {
    const startDate = useSelector((state) => state.startDate)
    const endDate = useSelector((state) => state.endDate)
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    const convertTimeline = (startDate, endDate) => {
        if (endDate == null) {
            return moment(startDate)?.utc().format("ddd, MMM DD")
        } else {
            start = moment(startDate)?.utc().format("ddd, MMM DD")
            end = moment(endDate)?.utc().format("ddd, MMM DD")
            return `${start} - ${end}`
        }
    }

    const onDateChange = (date, type) => {
        console.log('Date ', date)
        if (type === 'END_DATE') {
            dispatch(actEndDate(date.toString()))
        } else {
            dispatch(actStartDate(date.toString()))
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(!visible)} className='flex-row justify-between rounded-2xl shadow shadow-gray border-2 border-ink-normal bg-white px-3 py-4 mt-3'>
                <Text className='text-small text-ink-light'>When</Text>
                <Text className='text-small text-dark-darker font-semibold'>{convertTimeline(startDate, endDate)}</Text>
            </TouchableOpacity>

            <View style={{ display: visible ? 'block' : 'none' }} className='rounded-2xl shadow-md shadow-gray bg-white px-3 py-4 mt-3'>
                <Text className='text-title1 font-semibold mb-4'>When?</Text>
                <View className='px-2'>
                <CalendarPicker 
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={new Date(2018, 1, 1)}
                    maxDate={new Date(2025, 1, 1)}
                    onDateChange={onDateChange}    
                    previousTitle="Prev"
                    nextTitle="Next"
                    selectedDayColor="#222222"
                    selectedDayTextColor="white"
                />
                </View>
            </View>
        </View>
    )
}

export default WhenCustom