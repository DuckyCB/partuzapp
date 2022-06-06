import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigation from './navigation/StackNavigation';
// Screens
import Home from './pages/Home';
import Chats from './pages/ChatList';
import Profile from './pages/Profile';
// Screen names
import {HOME, CHATSLIST, PROFILE } from './constants/Routes';

export default function Main() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        initialRouteName={HOME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HOME) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === CHATSLIST) {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';

            } else if (rn === PROFILE) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}
      >
        <Tab.Screen name={HOME} component={Home}/>
        <Tab.Screen name={CHATSLIST} component={Chats} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name={PROFILE} component={Profile} />
      </Tab.Navigator> */}
      <StackNavigation/>
    </NavigationContainer>
  );
}