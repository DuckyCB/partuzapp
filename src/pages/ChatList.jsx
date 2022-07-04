import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    List,
    Text,
    useTheme,
} from 'react-native-paper';
import ChatListItem from '../components/chat-list/ChatListItem';
import Navbar from '../components/Navbar'

export default function ChatsList() {
    const { colors } = useTheme();
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        setChatList(
            [
                {name: 'Juan', lastMsg: 'bloqueado por bobi', time: '22:23'},
                {name: 'Sherman', lastMsg: 'MORIR', time: '21:33'},
                {name: 'Chachi', lastMsg: 'dame bot', time: '16:20'},
                {name: 'Avergaston', lastMsg: 'sale asseto?', time: '11:45'},
            ]
        );
    }, [])

    return (
        <View style={[
            styles.container,
            { backgroundColor: colors.background }
        ]}>
            <Navbar />
            <ScrollView>
                <List.Section>
                    {chatList.map((chat) => {
                        return <List.Item 
                                    title={chat.name}
                                    description={chat.lastMsg}
                                    right={() => (
                                        <Text style={styles.time}>{chat.time}</Text>
                                    )}
                                    left={props => <List.Icon {...props} icon='account-circle' />}
                                />
                    })}
                </List.Section>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    time: {
        marginTop: 8,
    },
});
