import { StatusBar } from 'expo-status-bar'
import { StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigation/Navigation'

import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export default function App() {
  const scheme = useColorScheme()
  console.log(scheme)
  return (
    <SafeAreaProvider>
      <Navigation theme={scheme === 'dark' ? DarkTheme : DefaultTheme} />
    </SafeAreaProvider>
  )
}

