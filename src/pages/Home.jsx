import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
	StyleSheet,
	SafeAreaView,
	ScrollView,
	View,
	Image,
} from 'react-native';
import {
	BottomNavigation,
	useTheme,
} from 'react-native-paper';
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
		color: '#c51162',
		},
	]);

	return (
		<SafeAreaView style={[
				styles.container,
				{ backgroundColor: colors.background }
			]}
		>
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
