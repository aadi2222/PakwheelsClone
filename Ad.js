import {
	StyleSheet,
	Text,
	View,
	FlatList,
	UseEffect,
	UseState,
	Image,
	ScrollView,
} from "react-native";
import cars from "./data/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Card2 from "./components/Card2";

const Ad = (props) => {
	const ad = props.route.params.data;

	return (
		<>
			<ScrollView>
				<Image
					style={{ height: 300, width: "100%" }}
					source={{ uri: ad.image }}
				/>

				<View style={styles.container}>
					<Text style={styles.title}>{ad.title}</Text>
					<Text style={styles.bold}>PKR {ad.price}</Text>
					<View style={styles.rowSpace}>
						<View style={styles.row}>
							<Text style={styles.light}>{ad.area}</Text>
							<Text style={styles.light}>,{ad.city}</Text>
						</View>
						<Text style={styles.req}>Request Inspection</Text>
					</View>

					<View style={styles.iconContainer}>
						<View style={styles.iconText}>
							<MaterialCommunityIcons
								name='calendar-text-outline'
								size={35}
								color='grey'
							/>
							<Text>{ad.year}</Text>
						</View>
						<View style={styles.iconText}>
							<MaterialCommunityIcons
								name='car-shift-pattern'
								size={35}
								color='grey'
							/>
							<Text>{ad.transmission}</Text>
						</View>
						<View style={styles.iconText}>
							<MaterialCommunityIcons
								name='gas-station'
								size={35}
								color='grey'
							/>
							<Text>{ad.milage} km</Text>
						</View>
						<View style={styles.iconText}>
							<SimpleLineIcons name='speedometer' size={35} color='grey' />
							<Text>{ad.fuel}</Text>
						</View>
					</View>

					<View style={styles.specsContainer}>
						<View style={styles.specs}>
							<Text style={styles.light}>Engine Capacity</Text>
							<Text>{ad.engine}</Text>
						</View>
						<View style={styles.specs}>
							<Text style={styles.light}>Registered In</Text>
							<Text>{ad.city}</Text>
						</View>
						<View style={styles.specs}>
							<Text style={styles.light}>Body Type</Text>
							<Text>{ad.bodytype}</Text>
						</View>
						<View style={styles.specs}>
							<Text style={styles.light}>Exterior Color</Text>
							<Text>{ad.color}</Text>
						</View>
						<View style={styles.specs}>
							<Text style={styles.light}>Assembly</Text>
							<Text>{ad.assembly}</Text>
						</View>
						<View style={styles.specs}>
							<Text style={styles.light}>Ad ID</Text>
							<Text>{ad.id}</Text>
						</View>
						<View style={styles.specs}>
							<Text style={styles.light}>Last Updated</Text>
							<Text>{ad.lastupdated}</Text>
						</View>
					</View>

					<View style={styles.compContainer}>
						<Text style={styles.heading}>Seller Comments</Text>
						<Text style={styles.para}>{ad.comments}</Text>
					</View>

					<View style={styles.compContainer}>
						<Text style={styles.heading}>Features</Text>
						<View style={styles.featureContainer}>
							<View style={styles.features}>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='airbag'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Air Bag</Text>
								</View>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='car-door'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Power Windows</Text>
								</View>
							</View>
							<View style={styles.features}>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='key-wireless'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Keyless Entry</Text>
								</View>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='car-cruise-control'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Cruise Control</Text>
								</View>
							</View>
							<View style={styles.features}>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='compass-outline'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Navigation</Text>
								</View>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='disc'
										size={40}
										color='#a9a9a9'
									/>
									<Text> CD Player</Text>
								</View>
							</View>
							<View style={styles.features}>
								<View style={styles.featureRow}>
									<FontAwesome name='life-ring' size={40} color='#a9a9a9' />
									<Text> Alloy Rims</Text>
								</View>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='car-defrost-front'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Air Conditioner</Text>
								</View>
							</View>
							<View style={styles.features}>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='steering'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Power Steering</Text>
								</View>
								<View style={styles.featureRow}>
									<FontAwesome name='video-camera' size={40} color='#a9a9a9' />
									<Text> Power Mirrors</Text>
								</View>
							</View>
							<View style={styles.features}>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='car-brake-abs'
										size={40}
										color='#a9a9a9'
									/>
									<Text> ABS</Text>
								</View>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='radio'
										size={40}
										color='#a9a9a9'
									/>
									<Text> AM/FM Radio</Text>
								</View>
							</View>
							<View style={styles.features}>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='white-balance-sunny'
										size={40}
										color='#a9a9a9'
									/>
									<Text> Sun Roof</Text>
								</View>
								<View style={styles.featureRow}>
									<MaterialCommunityIcons
										name='disc-player'
										size={40}
										color='#a9a9a9'
									/>
									<Text> DVD Player</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.compContainer}></View>
					<Text style={styles.heading}>Seller Detail</Text>
					<View style={styles.sellerContainer}>
						<FontAwesome name='user-circle' size={60} color='lightgrey' />
						<View style={styles.sellerRow}>
							<Text style={styles.heading}>{ad.name}</Text>
							<Text style={styles.para}>Member since {ad.since}</Text>
							<View style={styles.sellerIcon}>
								<MaterialCommunityIcons
									name='cellphone'
									size={12}
									style={{ paddingRight: 5 }}
									color='grey'
								/>
								<MaterialCommunityIcons
									name='email-outline'
									size={12}
									style={{ paddingRight: 5 }}
									color='grey'
								/>
								<MaterialCommunityIcons
									name='facebook'
									size={12}
									style={{ paddingRight: 5 }}
									color='grey'
								/>
							</View>
						</View>
					</View>

					<Text style={styles.heading}>Similar Ads</Text>
					<View>
						<FlatList
							style={styles.scrollContainer}
							horizontal
							data={cars}
							renderItem={({ item }) => <Card2 data={item} />}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<View style={styles.chatSms}>
					<MaterialCommunityIcons
						name='message-text-outline'
						size={24}
						color='#1F75FE'
					/>
					<Text style={styles.blueText}>Chat</Text>
				</View>
				<View style={styles.chatSms}>
					<MaterialCommunityIcons
						name='message-processing-outline'
						size={24}
						color='#1F75FE'
					/>
					<Text style={styles.blueText}>SMS</Text>
				</View>
				<View style={styles.call}>
					<MaterialCommunityIcons name='phone' size={24} color='white' />
					<Text style={styles.whiteText}>Call Seller</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 13,
		marginBottom: 10,
	},
	footer: {
		backgroundColor: "#f4f0ec",
		padding: 10,
		flexDirection: "row",
	},
	chatSms: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#1F75FE",
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: "row",
		padding: 10,
		marginRight: 5,
	},
	call: {
		flex: 2,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#1F75FE",
		borderRadius: 5,
		padding: 10,
	},
	blueText: {
		color: "#1F75FE",
	},
	whiteText: {
		color: "white",
	},
	title: {
		fontSize: 20,
	},
	bold: {
		fontWeight: "bold",
		fontSize: 17,
		paddingTop: 5,
		paddingBottom: 5,
	},
	light: {
		color: "grey",
		fontSize: 17,
	},
	req: {
		flex: 0.5,
		color: "#1F75FE",
		fontWeight: "bold",
		fontSize: 15,
		textAlign: "right",
		textDecorationLine: "underline",
	},
	rowSpace: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	row: {
		flex: 1.2,
		flexDirection: "row",
		marginRight: 10,
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		margin: 10,
	},
	iconText: {
		padding: 10,
		justifyContent: "space-between",
		alignItems: "center",
	},
	specsContainer: {
		padding: 10,
	},
	specs: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderTopWidth: 0.5,
		borderTopColor: "lightgrey",
		paddingTop: 15,
		paddingBottom: 15,
	},
	compContainer: {
		paddingBottom: 10,
		paddingTop: 10,
	},
	heading: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#525252",
	},
	para: {
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: 17,
		color: "grey",
	},
	featureContainer: {
		paddingTop: 10,
		paddingBottom: 20,
		flexDirection: "column",
		flex: 1,
		borderBottomWidth: 0.5,
		borderBottomColor: "lightgrey",
	},
	features: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	featureRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 10,
		textAlign: "left",
		paddingLeft: 20,
	},
	sellerContainer: {
		borderBottomWidth: 0.5,
		borderBottomColor: "lightgrey",
		flexDirection: "row",
		padding: 10,
		paddingBottom: 20,
		marginBottom: 15,
	},
	sellerRow: {
		paddingLeft: 10,
	},
	sellerIcon: {
		flexDirection: "row",
	},
	scrollContainer: {
		height: 200,
		width: "100%",
		marginBottom: 10,
	},
	similarContainer: {
		display: "flex",
		// width:'50%',
		borderRadius: 10,
		borderColor: "lightgrey",
		borderWidth: 1,
		backgroundColor: "white",
		margin: 10,
		marginBottom: 5,
		paddingBottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	image: {
		height: "60%",
		width: "100%",
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

export default Ad;
