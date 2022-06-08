import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { 
	Button,
} from 'react-native-paper';

export default function Home({ navigation }) {

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShow: false,
		});
	}, []);

	return (
		<View style={styles.container}>
			<Button
				mode="contained"
				style={styles.button}
				onPress={() => navigation.navigate('Home')}
			>
				Home
			</Button>
			<Button
				mode="contained"
				style={styles.button}
				onPress={() => navigation.navigate('Chats')}
			>
				Chats
			</Button>
			<Button
				mode="contained"
				style={styles.button}
				onPress={() => navigation.navigate('Profile')}
			>
				Profile
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'horizontal',
  },
	button: {
		width: 100
	}
});
