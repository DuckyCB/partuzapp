import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBack from '../components/HeaderBack'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import COLOR from '../constants/Colors'

const Chat = ({ route }) => {
  const { colors } = useTheme()
  const { chatWith } = route.params
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true,
    },
    {
      _id: 1,
      text: 'No, me voy con la toxi',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Juan',
      },
    },
    {
      _id: 2,
      text: 'Juan hoy se sale?',
      createdAt: new Date().getTime(),
      user: {
        _id: 1,
        name: 'You',
      },
    },
  ])

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage))
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: COLOR.PRIMARY.MAIN,
          },
          right: {
            backgroundColor: COLOR.SECONDARY.MAIN,
          },
        }}
        textStyle={{
          left: {
            color: '#fff',
          },
        }}
      />
    )
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderBack color="#6200ee" name={chatWith?.name} />
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => handleSend(newMessage)}
        user={{ _id: 1 }}
        renderBubble={renderBubble}
      />
    </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})
