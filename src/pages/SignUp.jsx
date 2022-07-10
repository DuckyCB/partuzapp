import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/partuzappLogo.png';

const SignUp = () => {
  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
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
      <TextInput label='name'
        value={name}
        onChangeText={name => setName(name)}
        style={styles.input}
      />
      <TextInput label='last name'
        value={lastName}
        onChangeText={lastName => setLastName(lastName)}
        style={styles.input}
      />
      <TextInput label='email'
        value={email}
        onChangeText={email => setEmail(email)}
        style={styles.input}
      />
      <TextInput label='password'
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        LogIn
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white',
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
    height:'15%',
  },
  button: {
    marginHorizontal: '25%',
    marginVertical: 10,
  },
});

export default SignUp;
