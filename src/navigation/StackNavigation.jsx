import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  HOME, CHATSLIST, PROFILE, CHAT, SETTINGS, LOGIN, SIGNUP, WELCOME
} from '../constants/Routes';
//Screens
import Home from '../pages/Home';
import ChatsList from '../pages/ChatList';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const loggedUser = true;

  return (
    <Stack.Navigator defaultScreenOptions={{headerShown: false}}>
      {loggedUser ? (
        <>
          <Stack.Screen name={HOME} component={Home}/>
          <Stack.Screen name={PROFILE} component={Profile}/>
          <Stack.Screen name={CHATSLIST} component={ChatsList}/>
          <Stack.Screen name={CHAT} component={Chat}/>
          <Stack.Screen name={SETTINGS} component={Settings}/>
        </>
      ) : (
        <>
          <Stack.Screen name={WELCOME} component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name={LOGIN} component={LogIn} />
          <Stack.Screen name={SIGNUP} component={SignUp}/>
        </>
      )}
    </Stack.Navigator>
  )
}
