import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card2 = (props) => {
	const navigation = useNavigation();

	const navigateHandler = () => {
		navigation.navigate("Ad", { data: props.data });
	};

	return (
		<TouchableOpacity onPress={navigateHandler}>
			<View style={styles.cardContainer}>
				<Image style={styles.image} source={{ uri: props.data.image }} />
				<View style={styles.content}>
					<View style={styles.titleRow}>
						<Text style={styles.title}> {props.data.title} </Text>
					</View>

					<Text style={styles.boldText}> PKR {props.data.price} </Text>
					<Text style={styles.lightText}> {props.data.city} </Text>
					<View style={styles.year}>
						<Text style={styles.lightText}> {props.data.year} </Text>
						<Text style={styles.lightText}> | {props.data.milage} </Text>
						<Text style={styles.lightText}> | {props.data.fuel} </Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Card2;

const styles = StyleSheet.create({
	cardContainer: {
		width: 220,
		height: 180,
		borderRadius: 10,
		borderColor: "lightgrey",
		borderWidth: 1,
		backgroundColor: "white",
		margin: 10,
		marginBottom: 5,
		paddingBottom: 17,
		// shadowColor: "#000",
		// shadowOffset: {
		//   width: 0,
		//   height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,

		// elevation: 5,
	},
	image: {
		height: "60%",
		width: "100%",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	content: {
		padding: 10,
	},
	boldText: {
		fontWeight: "bold",
		fontSize: 13,
	},
	lightText: {
		color: "grey",
		fontSize: 12,
	},
	year: {
		flexDirection: "row",
	},
});
