import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listing from "../Listing";
import Ad from "../Ad";
import Loading from "../components/Loading";
import Used from "../Used";
import Bikes from "../Bikes";
import New from "../New";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Used'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name='Header' component={Header} />
				<Stack.Screen name='Used' component={Used} />
				<Stack.Screen name='Bikes' component={Bikes} />
				<Stack.Screen name='New' component={New} />
				<Stack.Screen name='Listing' component={Listing} />
				<Stack.Screen name='Ad' component={Ad} />
				<Stack.Screen name='Loading' component={Loading} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;

const styles = StyleSheet.create({});
