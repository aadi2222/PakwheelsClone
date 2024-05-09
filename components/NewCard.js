import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NewCard = (props) => {
	// const navigation = useNavigation();

	// const navigateHandler = () => {
	// 	navigation.navigate("Ad", { data: props.data });
	// };

	return (
		<TouchableOpacity>
			<View style={styles.cardContainer}>
				<Image style={styles.image} source={{ uri: props.data.image }} />
				<View style={styles.content}>
					<View style={styles.titleRow}>
						<Text style={styles.boldText}>{props.data.title} </Text>
					</View>

					<Text style={styles.boldText}>{props.data.price} </Text>
					<Stars
						default={2.5}
						count={5}
						half={true}
						starSize={50}
						fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
						emptyStar={
							<Icon
								name={"star-outline"}
								style={[styles.myStarStyle, styles.myEmptyStarStyle]}
							/>
						}
						halfStar={<Icon name={"star-half"} style={[styles.myStarStyle]} />}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default NewCard;

const styles = StyleSheet.create({
	myStarStyle: {
		justifyContent: "flex-start",
		color: "yellow",
		backgroundColor: "transparent",
		// textShadowColor: "black",
		// textShadowOffset: { width: 1, height: 1 },
		// textShadowRadius: 2,
	},
	myEmptyStarStyle: {
		color: "grey",
	},
	cardContainer: {
		// width: "100%",
		borderRadius: 10,
		borderColor: "lightgrey",
		borderWidth: 1,
		backgroundColor: "white",
		margin: 10,
		marginBottom: 5,
		paddingBottom: 5,
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
		height: 200,
		width: 200,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	content: {
		padding: 10,
	},
	boldText: {
		fontWeight: "500",
		fontSize: 15,
	},
	lightText: {
		color: "grey",
		fontSize: 12,
	},
	year: {
		flexDirection: "row",
	},
});
