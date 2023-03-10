import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { 
  ProfileScreen, 
  FlickerRent,
  SplashScreen,
  DesignedLogin,
  Cameron,
} from '../Pages';
import TabNavigation from './Navigatiion';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='splash'>
            <Stack.Screen component={SplashScreen} options={{headerShown: false}} name='splash'/>
            <Stack.Screen component={TabNavigation} options={{ headerShown: false }} name='TabNavigation' />
            <Stack.Screen component={FlickerRent} options={{ headerShown: false}} name='flickerRent' />
            <Stack.Screen component={Cameron} options={{headerShown: false}} name='cameron' />
            <Stack.Screen component={DesignedLogin} options={{ headerShown: false}} name='designedLogin' />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;