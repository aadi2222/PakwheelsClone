// import Routes from "./navigation/Routes";

// const App = () => {
// 	return <Routes />;

// };

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listing from "./Listing";
import Ad from "./Ad";
import Loading from "./components/Loading";
import Used from "./Used";
import Bikes from "./Bikes";
import Header from "./components/Header";
import New from "./New";

const Stack = createNativeStackNavigator();

const App = () => {
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

export default App;
