import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
	ScrollView,
	Image,
	FlatList,
} from "react-native";
import { React } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "./components/Header";
import cars from "./data/data";
import Card2 from "./components/Card2";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-web";

const Used = () => {
	const navigation = useNavigation();

	const navigateHandler = (props) => {
		navigation.navigate("Listing", {
			data: cars.filter((car) => car.engine === props),
		});
	};
	const navigateHandler2 = (props) => {
		navigation.navigate("Listing", {
			data: cars.filter((car) => car.year <= props),
		});
	};
	const navigateHandler3 = (props) => {
		navigation.navigate("Listing", {
			data: cars.filter((car) => car.price <= props),
		});
	};

	return (
		<>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<SafeAreaView style={styles.conatiner}>
					<ScrollView>
						<Text style={styles.title}> Browse Used Cars </Text>

						<ScrollView horizontal>
							<Pressable style={styles.filterButton}>
								<Text style={styles.buttonText}>Category</Text>
							</Pressable>
							<Pressable style={styles.filterButton}>
								<Text style={styles.buttonText}>Budget</Text>
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
							<Pressable
								style={styles.smallCard}
								onPress={() => navigateHandler("1600cc")}
							>
								<MaterialCommunityIcons
									name='car-hatchback'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText}>1600cc cars</Text>
							</Pressable>
							<Pressable
								style={styles.smallCard}
								onPress={() => navigateHandler("1300cc")}
							>
								<MaterialCommunityIcons
									name='car-sports'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText}>1300cc cars</Text>
							</Pressable>
							<Pressable
								style={styles.smallCard}
								onPress={() => navigateHandler("1800cc")}
							>
								<MaterialCommunityIcons
									name='golf-cart'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText}>1800cc cars</Text>
							</Pressable>
							<Pressable
								style={styles.smallCard}
								onPress={() => navigateHandler2(2009)}
							>
								<MaterialCommunityIcons
									name='steering'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText}>Old Cars</Text>
							</Pressable>
						</View>
						<View style={styles.categoryRow}>
							<Pressable style={styles.smallCard}>
								<MaterialCommunityIcons
									name='steering'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText}>Bank Auction</Text>
							</Pressable>
							<Pressable style={styles.smallCard}>
								<MaterialCommunityIcons
									name='car-estate'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText}>Big cars</Text>
							</Pressable>
							<Pressable style={styles.smallCard}>
								<MaterialCommunityIcons
									name='steering'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText}>Electric cars</Text>
							</Pressable>
							<Pressable
								style={styles.smallCard}
								onPress={() => navigateHandler3("17")}
							>
								<MaterialCommunityIcons name='car' size={24} color='black' />
								<Text style={styles.iconText}>Cheap cars</Text>
							</Pressable>
						</View>
						{/* </ScrollView> */}

						<Text style={styles.title}> Pakwheels Products </Text>
						<View style={styles.prodPic}>
							<Image
								style={styles.image}
								source={require("./assets/insp.jpeg")}
							/>
							<Image
								style={styles.image}
								source={require("./assets/sell.jpeg")}
							/>
						</View>
						<View style={styles.prod}>
							<Pressable style={styles.mdCard}>
								<MaterialCommunityIcons
									name='form-select'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText2}>Auction Sheet Verification</Text>
							</Pressable>
							<Pressable style={styles.mdCard}>
								<MaterialCommunityIcons
									name='car-3-plus'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText2}>Car Finance</Text>
							</Pressable>
							<Pressable style={styles.mdCard}>
								<MaterialCommunityIcons
									name='car-key'
									size={24}
									color='black'
								/>
								<Text style={styles.iconText2}>Car Insurance</Text>
							</Pressable>
						</View>

						<Text style={styles.title}> Pakwheels Certified Cars </Text>
						<View>
							<FlatList
								style={styles.scrollContainer}
								horizontal
								showsHorizontalScrollIndicator={false}
								data={cars}
								renderItem={({ item }) => <Card2 data={item} />}
							/>
						</View>
						<Text style={styles.title}> Managed by Pakwheels Cars </Text>
						<View>
							<FlatList
								style={styles.scrollContainer}
								horizontal
								showsHorizontalScrollIndicator={false}
								data={cars}
								renderItem={({ item }) => <Card2 data={item} />}
							/>
						</View>
						<Text style={styles.title}> Feature Used Cars </Text>
						<View>
							<FlatList
								style={styles.scrollContainer}
								horizontal
								showsHorizontalScrollIndicator={false}
								data={cars}
								renderItem={({ item }) => <Card2 data={item} />}
							/>
						</View>
						<View style={styles.fuel}>
							<View style={styles.heading}>
								<MaterialCommunityIcons name='fuel' size={24} color='black' />
								<Text style={styles.title}> Current Fuel Prices </Text>
							</View>
							<View style={styles.blackTitle}>
								<Text style={styles.whiteText}>Type</Text>
								<Text style={styles.whiteText}>Price Per Liter</Text>
							</View>
							<View style={styles.price}>
								<Text>Petrol (Super)</Text>
								<Text>PKR 288.49</Text>
							</View>
							<View style={styles.price}>
								<Text>High Speed Diesel</Text>
								<Text>PKR 281.96</Text>
							</View>
							<View style={styles.price}>
								<Text>Light Speed Diesel</Text>
								<Text>PKR 166.86</Text>
							</View>
							<View style={styles.price}>
								<Text>Kerosene Oil</Text>
								<Text>PKR 186.86</Text>
							</View>
							<View style={styles.price}>
								<Text>CNG Region-I*</Text>
								<Text>PKR 210</Text>
							</View>
							<View style={styles.price}>
								<Text>CNG Region-II**</Text>
								<Text>PKR 210</Text>
							</View>
						</View>
					</ScrollView>
				</SafeAreaView>
			</ScrollView>
		</>
	);
};

export default Used;

const styles = StyleSheet.create({
	conatiner: {},
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
		shadowOpacity: 0.5,
		shadowRadius: 9,

		elevation: 5,
	},
	mdCard: {
		height: 90,
		width: 100,
		margin: 10,
		borderRadius: 5,

		justifyContent: "space-around",
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
	iconText2: {
		fontSize: 13,
		fontWeight: "bold",
		color: "grey",
	},
	categoryRow: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	prodPic: {
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
	},
	prod: {
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
	},
	image: {
		height: 180,
		width: 170,
	},
	scrollContainer: {
		height: 200,
		width: "100%",
		marginBottom: 10,
	},
	fuel: {
		margin: 10,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: "#a9a9a9",
		padding: 15,
		marginBottom: 200,
	},
	heading: {
		flexDirection: "row",
		padding: 10,
		alignItems: "center",
		// justifyContent: "center",
	},
	blackTitle: {
		backgroundColor: "black",
		borderRadius: 4,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 7,
	},
	whiteText: {
		color: "white",
		fontWeight: "500",
	},
	price: {
		flexDirection: "row",
		borderBottomWidth: 1,
		padding: 10,
		marginHorizontal: 4,
		justifyContent: "space-between",
		borderColor: "#a9a9a9",
		textAlign: "center",
	},
});
