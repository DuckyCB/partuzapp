import React, { useContext, useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { TextInput, Button, Avatar, Text } from 'react-native-paper'
import API from '../constants/API'
import { LoginContext } from '../navigation/StackNavigation'
import { logoutLocalUser } from '../utils/localUser'
import axiosInstance from '../utils/networking'

const Profile = () => {
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [description, setDescription] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(LoginContext)

  const handleSaveProfile = () => {
    axiosInstance
      .post(API.USER.POST_UPDATE, {
        mail: user,
        name,
        password
      })
      .then((res) => {
        setPassword('')
      })
      .catch(() => {
        log('error requesting user')
      })
  }

  const getProfile = () => {
    axiosInstance
      .get(`${API.USER.GET_USER}${user}`)
      .then((res) => {
        setName(res.data.name)
        setBirthDate(res.data.birthDate)
        setLastName(res.data.lastName)
        setDescription(res.data.description)
        setProfilePicture(res.data.profilePicture)
        setLoaded(true)
      })
      .catch((err) => {
        console.log('error ', err)
        setLoaded(true)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Button
        mode="contained"
        onPress={() => {
          setUser(null)
          logoutLocalUser()
        }}
      >
        Logout
      </Button>
      {loaded ? (
        <>
          <Avatar.Image
            size={120}
            source={profilePicture}
          />
          <View>
            <TextInput
              label="Name"
              value={name}
              onChangeText={(name) => setUsername(name)}
              style={styles.input}
            />
            <TextInput
              label="Lastname"
              value={lastName}
              onChangeText={(lastName) => setLastName(lastName)}
              style={styles.input}
            />
            <TextInput
              label="Birth date"
              value={birthDate}
              onChangeText={(birthDate) => setBirthDate(birthDate)}
              style={styles.input}
            />
            <TextInput
              label="Description"
              value={description}
              onChangeText={(newDescription) => setDescription(newDescription)}
              style={styles.input}
            />
            <TextInput
              label="Set new password"
              value={password}
              secureTextEntry
              onChangeText={(password) => setPassword(password)}
              style={styles.input}
            />
            <Button mode="contained" onPress={handleSaveProfile}>
              Save
            </Button>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  )
}
export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    width: 200,
  },
})
