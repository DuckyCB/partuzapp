import React from 'react';
import { View, Text } from 'react-native';
import { 
	Button,
} from 'react-native-paper';

export default function Home({ theme }) {

	return (
		<View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
			<Text>Home screen</Text>
			<Button
				title="Go to config"
				onPress={() => navigation.navigate('Config')}
			/>
		</View>
	);
}