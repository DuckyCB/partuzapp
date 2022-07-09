import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    Text,
    useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderEventPartuza from '../components/events/HeaderEventPartuza';

const EventPartuza = ({ route }) => {
    const { event } = route.params;
    const { colors } = useTheme();

    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: colors.background }
            ]}
        >
            <HeaderEventPartuza name={event?.name} color='#2962ff' />
            <Text>Detalles del evento</Text>
        </SafeAreaView>
    );
}

export default EventPartuza;

const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
});
