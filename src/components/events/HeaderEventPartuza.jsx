import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, StyleSheet } from 'react-native'
import { Text, IconButton, Portal, Modal, useTheme } from 'react-native-paper'
import EventForm from './EventForm'

const HeaderEventPartuza = ({ color, name }) => {
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const { colors } = useTheme()

  const modalStyle = {
    padding: 20,
    backgroundColor: colors.background,
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <IconButton icon="arrow-left-bold" onPress={() => navigation.goBack()} />
      <Text style={styles.title} variant="titleMedium">
        {name}
      </Text>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={modalStyle}
        >
          <EventForm closeForm={hideModal} title="Edit event" create={false} />
        </Modal>
      </Portal>
      <IconButton icon="calendar-edit" onPress={showModal} />
    </View>
  )
}

export default HeaderEventPartuza

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
