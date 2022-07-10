import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import {
    Text,
    Title,
    Paragraph,
    IconButton,
    Button,
    Card,
} from 'react-native-paper';
import fut5Img from '../../assets/images/fut5.jpg';
import { LoginContext } from '../navigation/StackNavigation';
import { logoutLocalUser } from '../utils/localUser';

const Discover = () => {
    const [actualEvent, setActualEvent] = useState();
    const { setUser } = useContext(LoginContext);

    useEffect(() => {
        const eventHardcoded = {
            name: 'Partido de futbol',
            category: 'Futbol',
            description: 'Buscamos gente para jugar un futbol 5',
            matched: true,
            date: '25/07',
            img: 'https://unsplash.it/300/300/?random&__id=123'
        };
        setActualEvent(eventHardcoded);
    }, []);

    const getNextEvent = () => {
        const eventHardcoded = {
            name: 'Previa',
            category: 'Previa',
            description: 'Sale previa antes de Mona',
            matched: true,
            date: '16/07',
            img: 'https://unsplash.it/300/300/?random&__id=123'
        };
        setActualEvent(eventHardcoded);
    }

    const handleLike = () => {
        console.log('like');
        if (actualEvent.matched) {
            
        }
        getNextEvent();
    }

    const handleReject = () => {
        console.log('reject');
        getNextEvent();
    }

    return (
        <View style={styles.container}>
            <Button mode='contained' onPress={() => {setUser(null)}}>Logout</Button>
            {actualEvent ? (
                <Card style={styles.card}>
                    <Card.Cover 
                        style={styles.image}
                        source={{ uri: actualEvent.img }}
                    />
                    <Card.Content>
                        <Title>{actualEvent.category}</Title>
                        <Paragraph>{actualEvent.description}</Paragraph>
                    </Card.Content>
                    <Card.Actions style={styles.actions}>
                        <IconButton 
                            icon='close-circle'
                            iconColor='#f44336'
                            size={30}
                            onPress={() => handleReject()}
                        />
                        <IconButton 
                            icon='heart'
                            iconColor='#8bc34a'
                            size={30}
                            onPress={() => handleLike()}
                        />
                    </Card.Actions>
                </Card>
            ) : (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}
        </View>
    );
}

export default Discover;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '80%',
    },
    image: {
        width: '100%',
        height: 200,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});
