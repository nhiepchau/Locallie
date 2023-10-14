import { StatusBar, View } from "react-native"

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight
const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56

const Layout = ({ statusBarBgColor, style, children }) => {
	return (
		<View className="flex-1 bg-cloud-normal" style={style}>
			{statusBarBgColor && (
				<>
					<View
						style={{
							height: STATUS_BAR_HEIGHT,
							backgroundColor: statusBarBgColor,
						}}
					>
						<StatusBar
							translucent
							backgroundColor={statusBarBgColor}
							barStyle="light-content"
						/>
					</View>
					{/* <View
						style={{ height: HEADER_HEIGHT, backgroundColor: statusBarBgColor }}
					/> */}
				</>
			)}
			<View className="flex-1" style={{ gap: 20 }}>
				{children}
			</View>
		</View>
	)
}

export default Layout
