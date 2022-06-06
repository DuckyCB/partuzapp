import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroudImg}
        source={{ uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }}
      >
        <Button mode="contained" onPress={() => navigation.navigate('LogIn')} style={styles.button}>
          LogIn
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={styles.button}>
          SignUp
        </Button>
      </ImageBackground>
    </View>
  );
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
  },
});

export default Welcome;
