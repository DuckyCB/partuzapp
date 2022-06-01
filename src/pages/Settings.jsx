import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import cat from '../../public/assets/cat.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 

export default function Settings() {
    const [selectedImage, setSelectedImage] = React.useState(cat);

    let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }

  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

    return (
        <View style={styles.container}>
          <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} /> 
          <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
            <Text style={styles.button_text}>Share this photo</Text>
          </TouchableOpacity>
          <Text style={styles.instructions}>
            To share a photo from your phone with a friend, just press the button below!
          </Text>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}
          >
            <Text style={styles.button_text}>Pick a Photo</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 10,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
    },
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
    },
    button_text: {
      fontSize: 20,
      color: '#fff'
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    }
  });
