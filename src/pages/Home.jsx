import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { 
	Button,
} from 'react-native-paper';

export default function Home({ navigation }) {

	return (
		<View style={[styles.container, { backgroundColor: '#FF0000' }]}>
			<Text>Home screen</Text>
			<Button
				title="Go to settings"
				onPress={() => navigation.navigate('Settings')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
