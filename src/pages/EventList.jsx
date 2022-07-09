import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    List,
    Text,
    useTheme,
} from 'react-native-paper';
import HeaderEvent from '../components/events/HeaderEvent';
import getIconFromCategory from '../constants/IconType';

const EventList = () => {
    const { colors } = useTheme();
    const [eventList, setEventList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setEventList(
            [
                {
                    _id: 1,
                    name: 'Previa',
                    category: 'previa',
                    description: 'Sale previa antes de Mona',
                    members: 3,
                    date: '16/07',
                    img: 'https://unsplash.it/300/300/?random&__id=123'
                },
                {
                    _id: 2,
                    name: 'Partido de futbol',
                    category: 'futbol',
                    description: 'Buscamos gente para jugar un futbol 5',
                    members: 5,
                    date: '25/07',
                    img: 'https://unsplash.it/300/300/?random&__id=123'
                }
            ]
        );
    }, [])

    const handleListUpdate = () => {
        setEventList(
            [
                {
                    _id: 1,
                    name: 'Previa',
                    category: 'previa',
                    description: 'Sale previa antes de Mona',
                    members: 3,
                    date: '16/07',
                    img: 'https://unsplash.it/300/300/?random&__id=123'
                },
                {
                    _id: 2,
                    name: 'Partido de futbol',
                    category: 'futbol',
                    description: 'Buscamos gente para jugar un futbol 5',
                    members: 5,
                    date: '25/07',
                    img: 'https://unsplash.it/300/300/?random&__id=123'
                },
                {
                    _id: 3,
                    name: 'Partido de volleyball',
                    category: 'volleyball',
                    description: 'Buscamos gente para jugar un volley',
                    members: 8,
                    date: '20/07',
                    img: 'https://unsplash.it/300/300/?random&__id=123'
                }
            ]
        );
    }

    return (
        <SafeAreaView 
            style={[
                styles.container,
                { backgroundColor: colors.background }
            ]}
        >
            <HeaderEvent color='#2962ff' name='Events' handleUpdate={handleListUpdate} />
            {eventList.length > 0 ? (
                <ScrollView>
                    <List.Section>
                        {eventList.map((event) => {
                            return (
                                <List.Item 
                                    title={event.name}
                                    key={event._id}
                                    description={`Members: ${event.members}`}
                                    right={() => (
                                        <Text style={styles.time}>{event.date}</Text>
                                    )}
                                    left={props => <List.Icon {...props} icon={getIconFromCategory(event.category)} />}
                                    onPress={() => {
                                        navigation.navigate('Event', {
                                            event: event
                                        });
                                    }}
                                />
                            )
                        })}
                    </List.Section>
                </ScrollView>
            ) : (
                <Text variant="displaySmall">No events!</Text>
            )}
        </SafeAreaView>
    );
}

export default EventList;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    time: {
        marginTop: 8,
    },
});
