import { FlatList, View } from "react-native"

const HorizontalList = ({
	Item,
	data,
	scrollEnabled = true,
	ItemSeparatorComponent,
}) => {
	return (
		<View className="flex-1">
			<FlatList
				data={data}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<View className="mr-2">
						<Item {...item} />
					</View>
				)}
				scrollEnabled={scrollEnabled}
				//ItemSeparatorComponent={ItemSeparatorComponent}
			></FlatList>
		</View>
	)
}

export default HorizontalList
