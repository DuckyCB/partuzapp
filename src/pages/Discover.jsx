import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Title, Paragraph, IconButton, Card } from 'react-native-paper'
import axiosInstance from '../utils/networking'
import API from '../constants/API'
import { LoginContext } from '../navigation/StackNavigation'


const Discover = () => {
  const [actualEvent, setActualEvent] = useState()
  const [eventList, setEventList] = useState([])
  const { user } = useContext(LoginContext)

  useEffect(() => {
    axiosInstance
      .get(`${API.EVENT.GET_EVENTS_BY_CAT}Todos/public/${user}`)
      .then((res) => {
        setEventList(res.data)
        setActualEvent(res.data[0])
      })
      .catch(() => {
        console.log('error requesting events');
      })
    // const eventHardcoded = {
    //   _id: 12341234,
    //   name: 'Partido de futbol',
    //   category: 'Futbol',
    //   description: 'Buscamos gente para jugar un futbol 5',
    //   matched: true,
    //   date: '25/07',
    //   img: 'https://unsplash.it/300/300/?random&__id=123',
    // }
    // setActualEvent(eventHardcoded)
  }, [])

  const getNextEvent = () => {
    const eventHardcoded = {
      _id: 432114312,
      name: 'Previa',
      category: 'Previa',
      description: 'Sale previa antes de Mona',
      matched: true,
      date: '16/07',
      img: 'https://unsplash.it/300/300/?random&__id=123',
    }
    setActualEvent(eventHardcoded)
  }

  const handleLike = () => {
    console.log('like')
    axiosInstance
      .post(API.EVENT.POST_LIKE, {
        _id: actualEvent._id,
        mail: user
      })
      .then(() => {
        getNextEvent()
      })
      .catch(() => {
        getNextEvent()
      })
  }

  const handleReject = () => {
    console.log('reject')
    axiosInstance
      .post(API.EVENT.POST_REJECT, {
        _id: actualEvent._id,
        mail: user
      })
      .then(() => {
        getNextEvent()
      })
      .catch(() => {
        getNextEvent()
      })
  }

  return (
    <View style={styles.container}>
      {actualEvent ? (
        <Card style={styles.card}>
          <Card.Cover style={styles.image} source={{ uri: actualEvent.img }} />
          <Card.Content>
            <Title>{actualEvent.category}</Title>
            <Paragraph>{actualEvent.description}</Paragraph>
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
  )
}

export default Discover

const styles = StyleSheet.create({
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
