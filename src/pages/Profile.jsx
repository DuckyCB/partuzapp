import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import {
  TextInput,
  Button,
  Avatar,
  useTheme
} from 'react-native-paper';

const Profile = () => {
  const [name, setUsername] = React.useState("Sherman");
  const [age, setAge] = React.useState("21");
  const [description, setDescription] = React.useState("Hola soy Germán");
  const theme = useTheme;

  const handleSaveProfile = () => {
    console.log('save profile');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Image size={120} source={require('../../assets/images/germen.jpg')} />
      <View>
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
        <TextInput label='Description'
                  value={description}
                  onChangeText={newDescription => setDescription(newDescription)}
                  style={styles.description}
        />
        <Button mode='contained' onPress={handleSaveProfile}>
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
}
export default Profile;

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: "center", 
      alignContent: "center", 
      textAlign: "center", 
      alignItems: "center", 
    },
    input: {
      marginVertical: 10,
      width: '100%',
    },
    description: {
      marginVertical: 10,
      width: '100%',
    },
});
