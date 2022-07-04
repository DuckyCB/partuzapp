import React from 'react';

import { View, Text } from 'react-native';

export default function ChatListItem({ props }) {
  console.log(props);
  return (
    <View style={style.ChatListItem}>
      <Text>{props.name}</Text>
    </View>
  );
}
const style = {
  ChatListItem: {
    height: 50,
  }
};
