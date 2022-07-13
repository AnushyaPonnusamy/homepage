import React from "react";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
	"react-navigation-material-bottom-tabs";

  import { StyleSheet, Text, View,TextInput } from "react-native";
  import Ionicons from 'react-native-vector-icons/Ionicons';

  
import { StatusBar } from 'expo-status-bar';



	

import HomeScreen from "./screens/HomeScreen";
import SendScreen from "./screens/SendScreen";

import SettingScreen from "./screens/SettingScreen";
import UserScreen from "./screens/UserScreen";



const TabNavigator = createMaterialBottomTabNavigator(
{
	Home: {
	screen: HomeScreen,
	navigationOptions: {
		tabBarLabel: "Home",
		activeColor:"blue",
		inactiveColor:"black",
		
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-home"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
			
			
			
		/>
		),
	},
	},

	Send: {
		screen: SendScreen,
		navigationOptions: {
			tabBarLabel: "Send",
			activeColor:"blue",
		inactiveColor:"black",
			tabBarIcon: (tabInfo) => (
			<Ionicons
				name="md-apps"
				size={tabInfo.focused ? 26 : 20}
				color={tabInfo.tintColor}
			/>
			),
		},
		},



	User: {
	screen: UserScreen,
	navigationOptions: {
		tabBarLabel: "User",
		activeColor:"blue",
		inactiveColor:"black",
		
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-person-circle-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	Setting: {
	screen: SettingScreen,
	
		
	navigationOptions: {
		tabBarLabel: "Setting",
		activeColor:"blue",
    inactiveColor:"black",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-settings-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
},
{
	initialRouteName: "Home",
	barStyle: { backgroundColor: "white" },
}
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
return (
	<Navigator>
		<SendScreen/>
		<SettingScreen/>
	<HomeScreen />
	</Navigator>
);
}



