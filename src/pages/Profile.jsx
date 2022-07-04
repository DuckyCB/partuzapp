import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import {TextInput, Button, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Navbar from '../components/Navbar'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const [name, setUsername] = React.useState("Federico");
  const [age, setAge] = React.useState("21");
  const theme = useTheme;

  return (
      <View>
        <Navbar />
        <View style={styles.container1}>
          <Ionicons name='person' size={120} />
          <View style={styles.container2}>
            <TextInput label='Name'
                      value={name}
                      onChangeText={name => setUsername(name)}
                      style={styles.input}
            />
            <TextInput label='Age'
                      value={age}
                      onChangeText={age => setAge(age)}
                      style={styles.input}
            />
            <Text style={styles.footer}>
              Hello my name is Fedrico
            </Text>
            <View style={styles.container2}>
              <Text>
                -Football
              </Text>
            </View>
            <View style={styles.container2}>
              <Text>
                -Party
              </Text>
            </View>
          </View>
        </View>
      </View>
  );
}
export default Profile;

const styles = StyleSheet.create({ 
  container1: {
      flex: 1, 
      justifyContent: "center", 
      alignContent: "center", 
      textAlign: "center", 
      alignItems: "center", 
    }, 
    container2: { 
      textAlign: "center", 
    },
    container3:{ 
      backgroundColor: "#2E0249", 
      color: '#F806CC', 
      fontFamily: 'sans-serif-condensed', 
      fontSize: 15, 
    },
    input: {
      marginHorizontal: '25%',
      marginVertical: 10,
      width: '50%',
      minWidth: '50%',
    },
    title: { 
      color: "Purple", 
      fontWeight: "bold", 
      fontSize: "1.5rem", 
      marginVertical: "1em", 
      textAlign: "center", 
      fontFamily: 'sans-serif-condensed', 
    }, 
    backgroudImg: { 
      flex: 1, 
    }, 
    button: { 
      marginHorizontal: '25%', 
      marginVertical: 10, 
      top: '60%', 
    }, 
    profileImg: { 
    alignContent:"center", 
    width: 300, 
    height: 300, 
  
  }, 
  logo: { 
    width: 66, 
    height: 58, 
  }, 

  footer:{ 
      tintColor: " #503569", 
      fontFamily: 'sans-serif-condensed', 

  } 
  
});
