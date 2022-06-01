import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function First() {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroudImg}
        source={{ uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }}
      >
        <Text>First</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroudImg: {
    flex: 1,
  },
});
