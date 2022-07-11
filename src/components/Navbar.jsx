import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import { IconButton, useTheme } from 'react-native-paper'

export default function Navbar() {
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <IconButton
        icon="chat"
        size={40}
        style={styles.buttonHome}
        onPress={() => navigation.navigate('Chats')}
      />
      <IconButton
        icon="home"
        size={40}
        style={styles.buttonHome}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton
        icon="account"
        size={40}
        style={styles.buttonHome}
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  buttonHome: {
    height: 50,
    marginTop: 5,
  },
})
