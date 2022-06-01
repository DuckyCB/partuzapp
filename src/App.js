import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
	DefaultTheme,
	DarkTheme,
	Provider as PaperProvider
} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, Text } from 'react-native-paper';

import Home from './pages/Home';
import Config from './pages/Config';
import Chats from './pages/Chats';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native-web';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider theme={DarkTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Config" component={Config} />
            <Stack.Screen name="Chats" component={Chats} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

