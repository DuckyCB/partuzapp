import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, IconButton } from 'react-native-paper'

const HeaderList = ({ color, name, handleUpdate }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title} variant="titleMedium">
        {name}
      </Text>
      <IconButton icon="refresh" onPress={() => handleUpdate()} />
    </View>
  )
}

export default HeaderList

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
  title: {
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
