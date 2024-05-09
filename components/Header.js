import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/Search.js";

const Header = () => {
	const navigation = useNavigation();
	const navigateHandler = (props) => {
		navigation.navigate(props);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.image} source={require("../assets/logo.jpg")} />
			<View style={styles.buttonview}>
				<Pressable
					style={styles.button}
					onPress={() => navigateHandler("Used")}
				>
					<Text style={styles.text}>Used Cars</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => navigateHandler("New")}>
					<Text style={styles.text}>New Cars</Text>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() => navigateHandler("Bikes")}
				>
					<Text style={styles.text}>Bikes</Text>
				</Pressable>
				<Pressable style={styles.button}>
					<Text style={styles.text}>Auto Parts</Text>
				</Pressable>
			</View>
			<SearchBar />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#233b7b",
	},
	image: {
		marginVertical: 5,
		height: 40,
		width: 150,
		alignSelf: "center",
	},
	buttonview: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 5,
	},
	button: {
		padding: 12,
		paddingVertical: 6,
		borderRadius: 20,
		backgroundColor: "rgba(56, 79, 132, 255)",
	},
	text: {
		fontSize: 15,
		lineHeight: 21,
		// fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});

export default Header;
