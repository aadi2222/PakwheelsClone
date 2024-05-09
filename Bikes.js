import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
	ScrollView,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "./components/Header";
import bikes from "./pw_bikes";
import Card2 from "./components/Card2";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Bikes = () => {
	return (
		<>
			<Header />
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Text style={styles.title}> Browse Used Bikes </Text>

					<ScrollView horizontal>
						<Pressable style={styles.filterButton}>
							<Text style={styles.buttonText}>Engine Capacity</Text>
						</Pressable>
						<Pressable style={styles.filterButton}>
							<Text style={styles.buttonText}>Make</Text>
						</Pressable>
						<Pressable style={styles.filterButton}>
							<Text style={styles.buttonText}>Model</Text>
						</Pressable>
						<Pressable style={styles.filterButton}>
							<Text style={styles.buttonText}>Cities</Text>
						</Pressable>
						<Pressable style={styles.filterButton}>
							<Text style={styles.buttonText}>Body Type</Text>
						</Pressable>
					</ScrollView>

					{/* <ScrollView horizontal> */}
					<View style={styles.categoryRow}>
						<Pressable style={styles.smallCard}>
							<MaterialCommunityIcons
								name='motorbike'
								size={24}
								color='black'
							/>
							<Text style={styles.iconText}>125cc Bikes</Text>
						</Pressable>
						<Pressable style={styles.smallCard}>
							<FontAwesome5 name='motorcycle' size={24} color='black' />
							<Text style={styles.iconText}>150cc Bikes</Text>
						</Pressable>
						<Pressable style={styles.smallCard}>
							<MaterialCommunityIcons name='steering' size={24} color='black' />
							<Text style={styles.iconText}>200cc Bikes</Text>
						</Pressable>
						<Pressable style={styles.smallCard}>
							<MaterialCommunityIcons
								name='motorbike'
								size={24}
								color='black'
							/>
							<Text style={styles.iconText}>100cc Bikes</Text>
						</Pressable>
					</View>
					<View style={styles.categoryRow}>
						<Pressable style={styles.smallCard}>
							<MaterialCommunityIcons name='steering' size={24} color='black' />
							<Text style={styles.iconText}>1000cc Bikes</Text>
						</Pressable>
						<Pressable style={styles.smallCard}>
							<FontAwesome5 name='motorcycle' size={24} color='black' />
							<Text style={styles.iconText}>250cc Bikes</Text>
						</Pressable>
						<Pressable style={styles.smallCard}>
							<MaterialCommunityIcons name='steering' size={24} color='black' />
							<Text style={styles.iconText}>300cc Bikes</Text>
						</Pressable>
						<Pressable style={styles.smallCard}>
							<MaterialCommunityIcons name='steering' size={24} color='black' />
							<Text style={styles.iconText}>110cc Bikes</Text>
						</Pressable>
					</View>
					<Text style={styles.title}> Featured Used Bikes </Text>
					<View>
						<FlatList
							style={styles.scrollContainer}
							horizontal
							showsHorizontalScrollIndicator={false}
							data={bikes}
							renderItem={({ item }) => <Card2 data={item} />}
						/>
					</View>

					<Text style={styles.title}> Browse More </Text>
					<View style={styles.browseContainer}>
						<TouchableOpacity style={styles.browseRow}>
							<MaterialCommunityIcons
								name='magnify'
								size={30}
								color='#1e90ff'
							/>
							<View>
								<Text style={styles.boldText}> New Bikes </Text>
								<Text style={styles.lightText}>
									{" "}
									Get information about latest bikes in Pakistani automotive
									market{" "}
								</Text>
							</View>
							<MaterialCommunityIcons
								name='arrow-right'
								size={15}
								color='grey'
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.browseRow}>
							<FontAwesome5 name='search-dollar' size={24} color='#1e90ff' />
							<View>
								<Text style={styles.boldText}> New Bike Prices </Text>
								<Text style={styles.lightText}>
									{" "}
									Find most frequently updated new bike prices{" "}
								</Text>
							</View>
							<MaterialCommunityIcons
								name='arrow-right'
								size={15}
								color='grey'
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.browseRow}>
							<MaterialCommunityIcons name='wrench' size={24} color='#1e90ff' />
							<View>
								<Text style={styles.boldText}> Maintain Your Bike </Text>
								<Text style={styles.lightText}>
									{" "}
									Get information about latest bikes in Pakistani automotive
									market{" "}
								</Text>
							</View>
							<MaterialCommunityIcons
								name='arrow-right'
								size={15}
								color='grey'
							/>
						</TouchableOpacity>
					</View>

					<Text style={styles.title}> Popular Used Bikes </Text>
					<View>
						<FlatList
							style={styles.scrollContainer}
							horizontal
							showsHorizontalScrollIndicator={false}
							data={bikes}
							renderItem={({ item }) => <Card2 data={item} />}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default Bikes;

const styles = StyleSheet.create({
	container: {
		marginBottom: 200,
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
		padding: 15,
		paddingBottom: 10,
	},
	filterButton: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderBottomColor: "lightgrey",
		borderBottomWidth: 2,
	},
	buttonText: {
		fontSize: 15,
		color: "grey",
	},

	categoryRow: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	smallCard: {
		height: 75,
		width: 80,
		margin: 10,
		borderRadius: 5,

		justifyContent: "space-around",
		alignItems: "center",
		padding: 5,
		borderColor: "#dcdcdc",
		borderWidth: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 9,

		elevation: 5,
	},
	iconText: {
		fontSize: 12,
		color: "grey",
	},
	browseContainer: {
		marginLeft: 20,
	},
	browseRow: {
		flexDirection: "row",
		padding: 7,
		height: 65,
		width: "91%",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomColor: "#dcdcdc",
		borderBottomWidth: 1,
		paddingBottom: 5,
	},
	scrollContainer: {
		height: 200,
		width: "100%",
		marginBottom: 10,
	},
	boldText: {
		fontWeight: "600",
		fontSize: 16,
	},
	lightText: {
		color: "grey",
	},
});
