import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    Text,
    IconButton,
} from 'react-native-paper';

const HeaderList = ({ color, name, handleUpdate }) => {

    return (
        <View style={[
            styles.container,
            { backgroundColor: color }
        ]} >
            <Text variant="titleMedium">
                {name}
            </Text>
            <IconButton 
                icon='refresh'
                onPress={() => handleUpdate()}
            />
        </View>
    );
}

export default HeaderList;

const styles = StyleSheet.create({
	container: {
	    height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
	},
});
