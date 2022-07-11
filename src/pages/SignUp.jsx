import React, { useState } from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { TextInput, Button, Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../assets/images/appLogo.png'
import HeaderBack from '../components/HeaderBack'
import API from '../constants/API'

const SignUp = () => {
  const [mail, setMail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const { colors } = useTheme()

  const handleSignUp = () => {
    if (mail.length === 0) {
      setError('Mail cannot be empty')
    } else if (name.length === 0) {
      setError('Name cannot be empty')
    } else if (password.length === 0) {
      setError('Password cannot be empty')
    } else if (lastName.length === 0) {
      setError('Last name cannot be empty')
    } else if (birthDate.length === 0) {
      setError('Birth date cannot be empty')
    } else if (description.length === 0) {
      setError('Description date cannot be empty')
    } else {
      axiosInstance
        .post(API.USER.POST_CREATE, {
          mail,
          password,
        })
        .then(() => {
          loginLocalUser(mail)
          setUser(mail)
        })
        .catch(() => {
          setError('Error')
          setPassword('')
        })
    }
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <HeaderBack color="#9e6ce3" name="SignUp" />
      <ScrollView>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={styles.imgBackground}>
            <Image source={Logo} resizeMode="contain" style={styles.image} />
          </View>
          <TextInput
            label="name"
            value={name}
            onChangeText={(name) => setName(name)}
            style={styles.input}
          />
          <TextInput
            label="last name"
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            style={styles.input}
          />
          <TextInput
            label="mail"
            value={mail}
            onChangeText={(mail) => setMail(mail)}
            style={styles.input}
          />
          <TextInput
            label="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={styles.input}
          />
          <TextInput
            label="birth date"
            value={birthDate}
            onChangeText={(birthDate) => setBirthDate(birthDate)}
            style={styles.input}
          />
          <TextInput
            label="description"
            value={description}
            onChangeText={(description) => setDescription(description)}
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSignUp} style={styles.button}>
            LogIn
          </Button>
          <Text style={styles.error}>{error}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  image: {
    width: 200,
    height: 200,
    alignContent: 'center',
  },
  input: {
    marginHorizontal: '25%',
    marginVertical: 10,
    width: '60%',
  },
  button: {
    marginHorizontal: '25%',
    marginVertical: 10,
  },
  error: {
    fontSize: 20,
    color: '#F00',
  },
  imgBackground: {
    backgroundColor: '#d9d9d9',
    width: 200,
    height: 200,
    borderRadius: 20,
  },
})

export default SignUp
