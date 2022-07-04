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

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <IconButton 
                icon='arrow-left-bold'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
	container: {
	  height: '100%',
	},
});
