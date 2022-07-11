import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Text,
  Card,
  Title,
  Paragraph,
  IconButton,
  useTheme,
} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderEventPartuza from '../components/events/HeaderEventPartuza'
import axiosInstance from '../utils/networking'
import API from '../constants/API'
import { loggedUser } from '../utils/localUser'

const EventPartuza = ({ route }) => {
  const { event } = route.params
  const { colors } = useTheme()
  const [actualPerson, setActualPerson] = useState()
  const [eventList, setEventList] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    loggedUser().then((res) => setUser(res))
  }, [])

  useEffect(() => {
    handlePersonUpdate()
  }, [user])

  const handlePersonUpdate = () => {
    axiosInstance
      .get(`${API.EVENT.GET_EVENTS_BY_CAT}Pendientes/private/${user}`)
      .then((res) => {
        console.log(res.data)
        setEventList(res.data)
        setActualPerson(res.data[0])
      })
      .catch(() => {
        console.log('error requesting events');
      })
    // setActualPerson({
    //   name: 'Previa',
    //   category: 'Previa',
    //   description: 'Sale previa antes de Mona',
    //   matched: true,
    //   date: '16/07',
    //   img: 'https://unsplash.it/300/300/?random&__id=123',
    // })
  }

  return (
    <SafeAreaView
      style={[styles.containerSafe, { backgroundColor: colors.background }]}
    >
      <HeaderEventPartuza name={event?.name} color="#2962ff" />
      <View style={styles.container}>
        {actualPerson ? (
          <Card style={styles.card}>
            <Card.Cover
              style={styles.image}
              source={{ uri: actualPerson.img }}
            />
            <Card.Content>
              <Title>{actualPerson.category}</Title>
              <Paragraph>{actualPerson.description}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <IconButton
                icon="close-circle"
                iconColor="#f44336"
                size={30}
                onPress={() => handleReject()}
              />
              <IconButton
                icon="heart"
                iconColor="#8bc34a"
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
    </SafeAreaView>
  )
}

export default EventPartuza

const styles = StyleSheet.create({
  containerSafe: {
    height: '100%',
    width: '100%',
  },
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
  },
})
