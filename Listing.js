import cars from "./data.js";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import Card from "./components/Card.js";
import SearchBar from "./components/Search.js";

const Listing = (props) => {
	return (
		<>
			<SearchBar />
			<FlatList
				style={styles.container}
				data={props.route.params.data}
				renderItem={({ item }) => <Card data={item} />}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "lightgrey",
	},
});

export default Listing;
