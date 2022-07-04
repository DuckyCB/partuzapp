import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import { 
	useTheme,
} from 'react-native-paper';
import Navbar from '../components/Navbar'

export default function Home() {
	const navigation = useNavigation();
	const { colors } = useTheme();

	return (
		<SafeAreaView style={[
				styles.container,
				{ backgroundColor: colors.background }
			]}
		>
			<Navbar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
	height: '100%',
  }
});
