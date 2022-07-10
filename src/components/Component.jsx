import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const Component = () => {
    const [cosa, setCosa] = useState('');

    useEffect(() => {
        // Codigo que solo se ejecuta una vez
        // el array de dependencias esta vacio
        console.log('Se inició el componente');
    }, []);

    useEffect(() => {
        // Codigo que solo se ejecuta una vez
        // el array de dependencias tiene cosa
        console.log('Cambió cosa');
    }, [cosa]);

    // funcion que hace cambiar cosa
    const handleButtonPress = () => {
        setCosa('otra cosa');
    }

    return (
        <View>
            <Text style={styles.texto}>Nuevo componente</Text>
            <Button onPress={handleButtonPress}>Cambia cosa</Button>
        </View>
    );
}

export default Component;

const styles = StyleSheet.create({ 
    texto: {
      fontSize: 30,
      color: '#F00'
    },
});
