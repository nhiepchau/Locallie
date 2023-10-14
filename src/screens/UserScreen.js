import Layout from "../components/Layout/Layout"
import { theme } from "../../tailwind.config"
import { ScrollView } from "react-native"
import Section from "../components/Layout/Section"
import DoneActivity from "../components/Activity/DoneActivity"
import DoneBuddy from "../components/Buddy/DoneBuddy"

const UserScreen = () => {
	return (
		<Layout statusBarBgColor={theme.colors.primary.darker}>
			<ScrollView refreshing={false}>
				<Section className="flex-1 mt-5">
					<DoneActivity />
				</Section>
				<Section className="flex-1">
					<DoneBuddy />
				</Section>
			</ScrollView>
		</Layout>
	)
}

export default UserScreen
