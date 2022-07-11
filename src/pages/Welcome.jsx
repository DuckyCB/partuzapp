import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/images/backgroundPartuzapp.png'

const Welcome = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroudImg}
        source={Logo}
      >
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LogIn')}
          style={styles.button}
        >
          LogIn
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('SignUp')}
          style={styles.button}
        >
          SignUp
        </Button>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudImg: {
    flex: 1,
  },

  button: {
    marginHorizontal: '25%',
    marginVertical: 10,
    top: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0bbd8',
  },
})

export default Welcome
