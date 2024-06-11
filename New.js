import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import Header from "./components/Header";

import make from "./data/newmakedata";
import SmallCard from "./components/SmallCard";

import newcar from "./data/newcardata";
import NewCard from "./components/NewCard";

export default function New() {
	return (
		<>
			<Header />
			<SafeAreaView>
				<ScrollView style={styles.container}>
					<Text style={styles.title}> Browse New Car By Makes </Text>

					<ScrollView
						horizontal
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ paddingVertical: 20 }}
					>
						<FlatList
							scrollEnabled={false}
							contentContainerStyle={{
								alignSelf: "flex-start",
							}}
							numColumns={Math.ceil(make.length / 2)}
							showsVerticalScrollIndicator={false}
							showsHorizontalScrollIndicator={false}
							data={make}
							renderItem={({ item }) => <SmallCard data={item} />}
						/>
					</ScrollView>

					<Text style={styles.title}> Popular New Cars </Text>
					<FlatList
						style={styles.newcar}
						horizontal
						data={newcar}
						renderItem={({ item }) => <NewCard data={item} />}
					/>
					<Text style={styles.title}> Newly Launched Cars </Text>
					<FlatList
						style={styles.newcar}
						horizontal
						data={newcar}
						renderItem={({ item }) => <NewCard data={item} />}
					/>
					<Text style={styles.title}> Upcoming New Cars </Text>
					<FlatList
						style={styles.newcar}
						horizontal
						data={newcar}
						renderItem={({ item }) => <NewCard data={item} />}
					/>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 200,
	},
	cardcontainer: {
		flexDirection: "row",
	},
	// newcar: {
	// 	marginBottom: 200,
	// },
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
		borderColor: "grey",
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
});
