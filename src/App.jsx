import React from 'react';
import { 
	DefaultTheme,
	DarkTheme,
	Provider as PaperProvider
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './Main';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {

  return (
    <SafeAreaProvider>
      <PaperProvider theme={DarkTheme}>
        <Main/>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
