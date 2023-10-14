import React from "react"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useSelector } from "react-redux"
import ActivityMarker from "../Activity/ActivityMarker"

const Map = ({ markers, img, team = false }) => {
	const location = useSelector((state) => state.location)

	return (
		<MapView
			style={{ borderRadius: 12 }}
			className="w-full h-full"
			provider={PROVIDER_GOOGLE}
			showsUserLocation={true}
			followsUserLocation={true}
			region={{
				latitude: location?.coords?.latitude,
				longitude: location?.coords?.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			zoomEnabled={true}
		>
			{markers?.map((marker, index) => (
				<Marker
					key={index}
					coordinate={{
						latitude: marker?.lat,
						longitude: marker?.long,
					}}
				>
					<ActivityMarker name="tree-outline" team={team} img={img} />
				</Marker>
			))}
		</MapView>
	)
}

export default Map
