import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
	return (
		<View style={styles.container}>
			<View
				style={
					clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
				}
			>
				{/* search Icon */}
				<Feather
					name='search'
					size={18}
					color='grey'
					style={{ marginLeft: 1 }}
				/>
				{/* Input field */}
				<TextInput
					style={styles.input}
					placeholder='Search used cars'
					value={searchPhrase}
					onChangeText={setSearchPhrase}
					onFocus={() => {
						setClicked(true);
					}}
				/>

				{/* cross Icon, depending on whether the search bar is clicked or not */}
				{clicked && (
					<Entypo
						name='cross'
						size={20}
						color='black'
						style={{ padding: 1 }}
						onPress={() => {
							setSearchPhrase("");
						}}
					/>
				)}
			</View>

			<MaterialCommunityIcons name='heart' size={25} color='white' />
			<MaterialCommunityIcons name='bell' size={24} color='white' />

			{/* cancel button, depending on whether the search bar is clicked or not */}
			{clicked && (
				<View>
					<Button
						title='Cancel'
						onPress={() => {
							Keyboard.dismiss();
							setClicked(false);
						}}
					></Button>
				</View>
			)}
		</View>
	);
};
export default SearchBar;

// styles
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
	},
	searchBar__unclicked: {
		padding: 10,
		flexDirection: "row",
		width: "80%",
		backgroundColor: "white",
		borderRadius: 7,
		alignItems: "center",
		height: 35,
	},
	searchBar__clicked: {
		padding: 10,
		flexDirection: "row",
		width: "70%",
		backgroundColor: "white",
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	input: {
		fontSize: 15,
		marginLeft: 10,
		width: "90%",
		color: "grey",
	},
});
