import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  HOME, CHATSLIST, PROFILE, CHAT, SETTINGS
} from '../constants/Routes';
//Screens
import Home from '../pages/Home';
import ChatsList from '../pages/ChatList';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';

const Stack = createNativeStackNavigator;

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={Home}/>
      <Stack.Screen name={CHATSLIST} component={ChatsList}/>
      <Stack.Screen name={PROFILE} component={Profile}/>
      <Stack.Screen name={CHAT} component={Chat}/>
      <Stack.Screen name={SETTINGS} component={Settings}/>
    </Stack.Navigator>
  )
}
