import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigation/Navigation'

import { PaperProvider } from 'react-native-paper'

import { getCurrentTheme, setStatusBarColor } from './src/theme/Theme'

export default function App() {
  setStatusBarColor()

  return (
    <SafeAreaProvider style={{ backgroundColor: getCurrentTheme().colors.background, ...styles.container}}>
      <PaperProvider theme={getCurrentTheme()}>
        <Navigation theme={getCurrentTheme()} />
      </PaperProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight
  },
})