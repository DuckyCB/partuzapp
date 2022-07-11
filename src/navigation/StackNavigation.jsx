import React, { useEffect, useState, createContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "../constants/Routes";
//Screens
import Main from "../pages/Main";
import ChatsList from "../pages/ChatList";
import EventList from "../pages/EventList";
import Profile from "../pages/Profile";
import Chat from "../pages/Chat";
import EventPartuza from "../pages/EventPartuza";
import Welcome from "../pages/Welcome";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Settings from "../pages/Settings";
import { loggedUser } from "../utils/localUser";

const Stack = createNativeStackNavigator();

export const LoginContext = createContext();

export default function StackNavigation() {
  const [user, setUser] = useState(loggedUser());

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user !== null ? (
          <>
            <Stack.Screen name={ROUTES.MAIN} component={Main} />
            <Stack.Screen name={ROUTES.PAGE.CHATLIST} component={ChatsList} />
            <Stack.Screen name={ROUTES.PAGE.EVENTLIST} component={EventList} />
            <Stack.Screen name={ROUTES.SUBPAGE.PROFILE} component={Profile} />
            <Stack.Screen name={ROUTES.SUBPAGE.CHAT} component={Chat} />
            <Stack.Screen
              name={ROUTES.SUBPAGE.EVENT}
              component={EventPartuza}
            />
            <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
          </>
        ) : (
          <>
            <Stack.Screen
              name={ROUTES.LOGIN.WELCOME}
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen name={ROUTES.LOGIN.LOGIN} component={LogIn} />
            <Stack.Screen name={ROUTES.LOGIN.SIGNUP} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </LoginContext.Provider>
  );
}
