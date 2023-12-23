import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, Theme } from '@react-navigation/native'

import BusListScreen from '../module/busList/Screen'

const Stack = createNativeStackNavigator()

const Navigation = (props: { theme: Theme }) => {

  return(
    <NavigationContainer theme={props.theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          key='bus-list'
          name='BusList' 
          component={BusListScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation