import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, Theme } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const Navigation = (props: { theme: Theme }) => {

  return (
    <NavigationContainer theme={props.theme}>
      <Stack.Navigator>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation