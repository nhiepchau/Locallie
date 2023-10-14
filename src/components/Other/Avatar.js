import { Image } from "react-native"

const Avatar = ({ src }) => {
	return (
		<Image
			className="w-[60px] h-[60px]"
			style={{ borderRadius: 9999 }}
			source={src}
		/>
	)
}

export default Avatar
