import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Portal, Modal, IconButton, useTheme } from 'react-native-paper'
import EventForm from './EventForm'

const HeaderEvent = ({ color, name, handleUpdate }) => {
  const [visible, setVisible] = useState(false)
  const { colors } = useTheme()
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const modalStyle = {
    padding: 20,
    backgroundColor: colors.background,
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title} variant="titleMedium">
        {name}
      </Text>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={modalStyle}
        >
          <EventForm closeForm={hideModal} title="Create event" create={true} />
        </Modal>
      </Portal>
      <IconButton icon="account-multiple-plus" onPress={showModal} />
      <IconButton icon="refresh" onPress={() => handleUpdate()} />
    </View>
  )
}

export default HeaderEvent

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
