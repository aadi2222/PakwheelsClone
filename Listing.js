// import React, { useState, useEffect } from "react";
// import {
// 	StyleSheet,
// 	View,
// 	FlatList,
// 	SafeAreaView,
// 	ScrollView,
// } from "react-native";
// import Card from "./components/Card.js";
// import SearchBar from "./components/Search.js";

// const Listing = (props) => {
// 	const [clicked, setClicked] = useState(false);
// 	const [searchPhrase, setSearchPhrase] = useState("");
// 	const [filteredData, setFilteredData] = useState([]);

// 	// Filter data whenever search phrase changes
// 	useEffect(() => {
// 		if (searchPhrase.trim() === "") {
// 			// If search phrase is empty, show all data
// 			setFilteredData(props.route.params.data);
// 		} else {
// 			// Filter data based on search phrase in title
// 			const filtered = props.route.params.data.filter((item) =>
// 				item.title.toLowerCase().includes(searchPhrase.toLowerCase())
// 			);
// 			setFilteredData(filtered);
// 		}
// 	}, [searchPhrase, props.route.params.data]);

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<>
// 				<SearchBar
// 					clicked={clicked}
// 					setClicked={setClicked}
// 					searchPhrase={searchPhrase}
// 					setSearchPhrase={setSearchPhrase}
// 				/>
// 				<FlatList
// 					data={filteredData}
// 					renderItem={({ item }) => <Card data={item} />}
// 				/>
// 			</>
// 		</SafeAreaView>
// 	);
// };
// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: "#233b7b",
// 	},
// 	wrapper: {
// 		flex: 1,
// 	},
// });

// export default Listing;
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import Card from "./components/Card.js";
import SearchBar from "./components/Search.js";

const Listing = (props) => {
	const [clicked, setClicked] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	// Filter data whenever search phrase changes
	useEffect(() => {
		if (searchPhrase.trim() === "") {
			// If search phrase is empty, show all data
			setFilteredData(props.route.params.data);
		} else {
			// Filter data based on search phrase in title
			const filtered = props.route.params.data.filter((item) =>
				item.title.toLowerCase().includes(searchPhrase.toLowerCase())
			);
			setFilteredData(filtered);
		}
	}, [searchPhrase, props.route.params.data]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<SearchBar
					clicked={clicked}
					setClicked={setClicked}
					searchPhrase={searchPhrase}
					setSearchPhrase={setSearchPhrase}
				/>
				<FlatList
					data={filteredData}
					renderItem={({ item }) => <Card data={item} />}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#233b7b",
		marginBottom: -40,
		paddingTop: 0, // Ensure the SafeAreaView has a background color
	},
	container: {
		flex: 1,
		backgroundColor: "lightgrey", // Set background color for the container view
	},
	flatList: {
		flex: 1,
	},
	flatListContent: {
		flexGrow: 1, // Ensure the content stretches to fill the available space
	},
});

export default Listing;
