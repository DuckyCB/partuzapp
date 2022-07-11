import React, { useState, useContext } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TextInput, Button, Text, useTheme } from 'react-native-paper'
import Logo from '../../assets/images/appLogo.png'
import axiosInstance from '../utils/networking'
import { LoginContext } from '../navigation/StackNavigation'
import { loginLocalUser } from '../utils/localUser'
import API from '../constants/API'
import HeaderBack from '../components/HeaderBack'
import { SafeAreaView } from 'react-native-safe-area-context'

const LogIn = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setUser } = useContext(LoginContext)
  const { colors } = useTheme()

  const handleLogin = () => {
    if (mail.length === 0) {
      setError('Mail cannot be empty')
    } else if (password.length === 0) {
      setError('Password cannot be empty')
    } else {
      axiosInstance
        .post(API.USER.POST_LOGIN, {
          mail,
          password,
        })
        .then(() => {
          loginLocalUser(mail)
          setUser(mail)
        })
        .catch((err) => {
          setError(err)
          setPassword('')
        })
    }
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <HeaderBack color="#9e6ce3" name="LogIn" />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Image source={Logo} resizeMode="contain" style={styles.image} />
        <TextInput
          label="mail"
          value={mail}
          onChangeText={(mail) => {
            setMail(mail)
            setError('')
          }}
          style={styles.input}
        />
        <TextInput
          label="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => {
            setPassword(password)
            setError('')
          }}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          LogIn
        </Button>
        <Text style={styles.error}>{error}</Text>
      </View>
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
  },
  image: {
    width: 300,
    height: 300,
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
})

export default LogIn
