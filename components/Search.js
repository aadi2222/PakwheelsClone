import React, { useState } from "react";
import { StyleSheet, TextInput, View, Platform } from "react-native";
import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = ({
	clicked,
	searchPhrase,
	setSearchPhrase,
	setClicked,
	handleSearch,
}) => {
	const [showCross, setShowCross] = useState(false);

	const handleClear = () => {
		setSearchPhrase("");
		setShowCross(false);
		setClicked(false);
	};

	const handleChange = (text) => {
		setSearchPhrase(text);
		setShowCross(text.length > 0);
	};

	const handleFocus = () => {
		setClicked(true);
		setShowCross(searchPhrase.length > 0);
	};

	return (
		<View style={styles.container}>
			<View
				style={
					clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
				}
			>
				<Feather name='search' size={18} color='grey' />
				<TextInput
					style={styles.input}
					placeholder='Search used cars'
					placeholderTextColor='grey'
					value={searchPhrase}
					onChangeText={handleChange}
					onSubmitEditing={handleSearch}
					onFocus={handleFocus}
					underlineColorAndroid='transparent'
					clearButtonMode='never'
				/>
				{showCross && (
					<Entypo
						name='cross'
						size={20}
						color='black'
						style={{ padding: 1 }}
						onPress={handleClear}
					/>
				)}
			</View>
			<MaterialCommunityIcons name='heart' size={25} color='white' />
			<MaterialCommunityIcons name='bell' size={24} color='white' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		paddingTop: 25,
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#233b7b",
		justifyContent: "space-around",
		borderWidth: 0,
	},
	searchBar__unclicked: {
		padding: 10,
		flexDirection: "row",
		width: "80%",
		backgroundColor: "white",
		borderRadius: 7,
		alignItems: "center",
		height: 35,
		// Ensure no border on focus for iOS and Android
		borderWidth: 0,
	},
	searchBar__clicked: {
		padding: 10,
		flexDirection: "row",
		width: "80%",
		backgroundColor: "white",
		borderRadius: 7,
		alignItems: "center",
		justifyContent: "space-evenly",
		height: 35,
	},
	input: {
		fontSize: 15,
		marginLeft: 10,
		width: "90%",
		color: "black",
		...(Platform.OS === "web" && {
			outlineStyle: "none", // No outline for web
		}),
		...(Platform.OS === "android" && {
			borderBottomWidth: 0, // Remove underline for Android
		}),
	},
});

export default SearchBar;
