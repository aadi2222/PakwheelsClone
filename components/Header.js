import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/Search.js";
import cars from "../data/data.js";

const Header = () => {
	const [clicked, setClicked] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState("");
	const navigation = useNavigation();

	const navigateHandler = (screen) => {
		navigation.navigate(screen);
	};
	const navigateHandler1 = (screen) => {
		navigation.navigate(screen, { data: cars });
	};

	const handleSearch = () => {
		if (searchPhrase.trim() !== "") {
			// Filter cars data based on the searchPhrase
			const filteredData = cars.filter((car) =>
				car.title.toLowerCase().includes(searchPhrase.toLowerCase())
			);

			// Navigate to the Listing screen with filtered data
			navigation.navigate("Listing", { data: filteredData });
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Pressable onPress={() => navigateHandler("Used")}>
				<Image style={styles.image} source={require("../assets/logo.jpg")} />
			</Pressable>
			<View style={styles.buttonview}>
				<Pressable
					style={styles.button}
					onPress={() => navigateHandler1("Listing")}
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
			<SearchBar
				clicked={clicked}
				setClicked={setClicked}
				searchPhrase={searchPhrase}
				setSearchPhrase={setSearchPhrase}
				handleSearch={handleSearch} // Pass the handleSearch function
			/>
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
		letterSpacing: 0.25,
		color: "white",
	},
});

export default Header;
