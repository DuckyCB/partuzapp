import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/partuzappLogo.png';
import API from '../constants/API';

const SignUp = () => {
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (mail.length === 0) {
      setError("Mail cannot be empty");
    } else if (name.length === 0) {
      setError("Name cannot be empty");
    } else if (password.length === 0) {
      setError("Password cannot be empty");
    } else if (lastName.length === 0) {
      setError("Last name cannot be empty");
    } else if (birthDate.length === 0) {
      setError("Birth date cannot be empty");
    } else if (description.length === 0) {
      setError("Description date cannot be empty");
    } else {
      axiosInstance.
      	post(API.USER.POST_CREATE, {
      		mail,
      		password
      	})
      	.then(() => {
      		loginLocalUser(mail);
          setUser(mail);
      	})
      	.catch(() => {
      		setError('Error');
      		setPassword('');
      	})
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode="contain" style={styles.image} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor:'white',
  },
  image: {
    width: 200,
    height: 200,
    alignContent: "center",
  },
  input: {
    marginHorizontal: "25%",
    marginVertical: 10,
    width: '60%',
    height:'15%',
  },
  button: {
    marginHorizontal: "25%",
    marginVertical: 10,
  },
  error: {
    fontSize: 20,
    color: '#F00',
  }
});

export default SignUp;
