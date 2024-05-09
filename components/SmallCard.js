import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import React from "react";

export default function SmallCard(props) {
	return (
		<>
			<Pressable style={styles.smallCard}>
				<Image style={styles.image} source={{ uri: props.data.image }} />
				<Text style={styles.iconText}>{props.data.title}</Text>
			</Pressable>
		</>
	);
}
const styles = StyleSheet.create({
	smallCard: {
		height: 75,
		width: 80,
		margin: 10,
		borderRadius: 5,
		borderColor: "#dcdcdc",
		justifyContent: "space-around",
		alignItems: "center",
		padding: 5,
		borderWidth: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.1,
		shadowRadius: 9,

		elevation: 5,
	},
	iconText: {
		fontSize: 12,
	},
	image: {
		height: 50,
		width: 50,
	},
});
