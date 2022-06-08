import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/logo.png';

const LogIn = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    const navigation = useNavigation();
    navigation.navigate('Home');
    console.log(username, password);
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode="contain" style={styles.image} />
      <TextInput label='username'
        value={username}
        onChangeText={username => setUsername(username)}
        style={styles.input}
      />
      <TextInput label='password'
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        LogIn
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: '50%',
  },
  button: {
    marginHorizontal: '25%',
    marginVertical: 10,
  },
});

export default LogIn;
