import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, StyleSheet } from 'react-native'
import { Text, IconButton } from 'react-native-paper'

const HeaderBack = ({ color, name }) => {
  const navigation = useNavigation()

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <IconButton icon="arrow-left-bold" onPress={() => navigation.goBack()} />
      <Text style={styles.title} variant="titleMedium">
        {name}
      </Text>
    </View>
  )
}

export default HeaderBack

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
