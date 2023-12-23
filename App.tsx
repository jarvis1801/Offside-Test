import { useColorScheme, StatusBar, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigation/Navigation'


import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export default function App() {
  const scheme = useColorScheme()

  return (
    <SafeAreaProvider style={styles.container}>
      <Navigation theme={scheme === 'dark' ? DarkTheme : DefaultTheme} />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
  },
})