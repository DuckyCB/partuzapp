import React, { useState, useEffect, useContext } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import Logo from "../../assets/images/logo.png";
import axiosInstance from "../utils/networking";
import { LoginContext } from "../navigation/StackNavigation";
import { loginLocalUser } from "../utils/localUser";
import API from '../constants/API';

const LogIn = () => {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(LoginContext);

  const handleLogin = () => {
    if (mail.length === 0) {
      setError("Mail cannot be empty");
    } else if (password.length === 0) {
      setError("Password cannot be empty");
    } else {
      axiosInstance.
      	post(API.USER.POST_LOGIN, {
      		mail,
      		password
      	})
      	.then(() => {
      		loginLocalUser(mail);
          setUser(mail);
      	})
      	.catch(() => {
      		setError('Error in user or password');
      		setPassword('');
      	})
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode="contain" style={styles.image} />
      <TextInput
        label="mail"
        value={mail}
        onChangeText={(mail) => {
          setMail(mail);
          setError('');
        }}
        style={styles.input}
      />
      <TextInput
        label="password"
        value={password}
        onChangeText={(password) => {
          setPassword(password);
          setError('');
        }}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
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
  },
  image: {
    width: 300,
    height: 300,
    alignContent: "center",
  },
  input: {
    marginHorizontal: "25%",
    marginVertical: 10,
    width: "50%",
  },
  button: {
    marginHorizontal: "25%",
    marginVertical: 10,
  },
  error: {
    fontSize: 20,
    color: "#F00",
  },
});

export default LogIn;
