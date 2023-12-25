import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, Theme } from '@react-navigation/native'

import BusListScreen from '../module/busList/Screen'
import BusDetailScreen from '../module/busDetail/Screen'

const Stack = createNativeStackNavigator()

const Navigation = (props: { theme }) => {

  return(
    <NavigationContainer theme={props.theme}>
      <Stack.Navigator
        initialRouteName='BusList'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          key='bus-list'
          name='BusList' 
          component={BusListScreen} 
        />
        <Stack.Screen
          key='bus-detail'
          name='BusDetail' 
          component={BusDetailScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation