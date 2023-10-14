import { FlatList, View } from "react-native"

const VerticalList = ({
	Item,
	data,
	scrollEnabled = false,
	ItemSeparatorComponent,
}) => {
	return (
		<View className="flex-1">
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View className="my-4">
						<Item {...item} />
					</View>
				)}
				scrollEnabled={scrollEnabled}
				//ItemSeparatorComponent={ItemSeparatorComponent}
			></FlatList>
		</View>
	)
}

export default VerticalList
