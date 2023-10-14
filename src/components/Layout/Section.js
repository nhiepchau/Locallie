import { View } from "react-native"

const Section = ({ children, style }) => (
	<View style={[...style, { gap: 15 }]} className="px-4">
		{children}
	</View>
)

export default Section
