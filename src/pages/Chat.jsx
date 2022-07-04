import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
} from 'react-native';
import {
	Text,
	useTheme,
} from 'react-native-paper'
import Header from '../components/Header';

const Chat = ({ chat }) => {
	const { colors } = useTheme();

	return (
		<SafeAreaView style={[
				styles.container,
				{ backgroundColor: colors.background }
			]}
		>
			<Header />
			<Text>{chat?.name}</Text>
		</SafeAreaView>
	);
}

export default Chat;

const styles = StyleSheet.create({
	container: {
	  height: '100%',
	},
});
