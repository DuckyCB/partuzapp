import React from 'react';

import { View, Text, Button } from 'react-native';

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
      <Button
          title="Config"
          onPress={() => 
            navigation.navigate('Config')
          }
      />
    </View>
  );
}