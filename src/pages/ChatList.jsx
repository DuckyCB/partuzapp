import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { List, Text, useTheme } from 'react-native-paper'
import HeaderList from '../components/HeaderList'

const ChatsList = () => {
  const { colors } = useTheme()
  const [chatList, setChatList] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    setChatList([
      {
        name: 'Juan',
        username: 'juan',
        lastMsg: 'bloqueado por bobi',
        time: '22:23',
      },
      { name: 'Sherman', username: 'sherman', lastMsg: 'MORIR', time: '21:33' },
      {
        name: 'Chachi',
        username: 'chachi',
        lastMsg: 'dame bot',
        time: '16:20',
      },
      {
        name: 'Avergaston',
        username: 'avergaston',
        lastMsg: 'sale asseto?',
        time: '11:45',
      },
    ])
  }, [])

  const handleListUpdate = () => {
    setChatList([
      {
        name: 'Juan',
        username: 'juan',
        lastMsg: 'vi a la rubia',
        time: '22:39',
      },
      {
        name: 'Sherman',
        username: 'sherman',
        lastMsg: 'sale fortnite?',
        time: '22:38',
      },
      { name: 'Chachi', username: 'chachi', lastMsg: 'no', time: '18:20' },
      {
        name: 'Avergaston',
        username: 'avergaston',
        lastMsg: 'sale asseto?',
        time: '11:45',
      },
    ])
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderList
        color="#6200ee"
        name="Chats"
        handleUpdate={handleListUpdate}
      />
      {chatList.length > 0 ? (
        <ScrollView>
          <List.Section>
            {chatList.map((chat) => {
              return (
                <List.Item
                  title={chat.name}
                  key={chat.username}
                  description={chat.lastMsg}
                  right={() => <Text style={styles.time}>{chat.time}</Text>}
                  left={(props) => (
                    <List.Icon {...props} icon="account-circle" />
                  )}
                  onPress={() => {
                    navigation.navigate('Chat', {
                      chatWith: chat,
                    })
                  }}
                />
              )
            })}
          </List.Section>
        </ScrollView>
      ) : (
        <Text variant="displaySmall">No matches!</Text>
      )}
    </SafeAreaView>
  )
}

export default ChatsList

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  time: {
    marginTop: 8,
  },
})
