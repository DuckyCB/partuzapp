import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
	StyleSheet,
	SafeAreaView,
	ScrollView,
	View,
	Image,
	Animated,
} from 'react-native';
import {
	BottomNavigation,
	useTheme,
} from 'react-native-paper';
import {
	createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';
import ChatsList from './ChatList';
import Discover from './Discover';
import Profile from './Profile';

export default function Home() {
	const navigation = useNavigation();
	const { colors } = useTheme();
	const [index, setIndex] = useState(1);
	const [routes] = useState([
		{
			key: 'chats',
			title: 'Chats',
			icon: 'chat',
			color: '#6200ee',
			badge: true,
		},
		{
			key: 'discover',
			title: 'Discover',
			icon: 'human-greeting-proximity',
			color: '#c51162',
		},
		{
			key: 'profile',
			title: 'Profile',
			icon: 'account',
			color: '#00796b',
		},
		{
		key: 'purchased',
		title: 'Purchased',
		icon: 'shopping-music',
		color: '#2962ff',
		},
	]);
	const Tab = createMaterialTopTabNavigator();

	return (
		<SafeAreaView style={[
				styles.container,
				{ backgroundColor: colors.background }
			]}
		>
			{/* <Tab.Navigator>
				<Tab.Screen name="Chats" component={ChatsList} />
				<Tab.Screen name="Discover" component={Discover} />
				<Tab.Screen name="Profile" component={Profile} />
			</Tab.Navigator> */}
			<BottomNavigation 
				navigationState={{ index, routes }}
				onIndexChange={index => setIndex(index)}
				renderScene={BottomNavigation.SceneMap({
					chats: ChatsList,
					discover: Discover,
					profile: Profile,
					purchased: Discover,
				  })}
				  sceneAnimationEnabled={false}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
	height: '100%',
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});
