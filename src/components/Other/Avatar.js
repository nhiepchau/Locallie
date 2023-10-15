import { Image } from "react-native"

const Avatar = ({ src }) => {
	return (
		<Image
			className="w-[120px] h-[120px] mx-auto mb-2"
			style={{ borderRadius: 9999 }}
			source={src}
		/>
	)
}

export default Avatar
