import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
} from 'react-native';
import {
	Text,
	useTheme,
} from 'react-native-paper'
import HeaderChat from '../components/HeaderChat';

const Chat = ({ chatWith }) => {
	const { colors } = useTheme();

	return (
		<SafeAreaView style={[
				styles.container,
				{ backgroundColor: colors.background }
			]}
		>
			<HeaderChat color='#6200ee' name={chatWith?.name} />
			<Text variant>{chatWith?.name}</Text>
		</SafeAreaView>
	);
}

export default Chat;

const styles = StyleSheet.create({
	container: {
	  height: '100%',
	},
});
