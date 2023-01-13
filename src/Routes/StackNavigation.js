import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { 
  ProfileScreen, 
  FlickerRent,
  SplashScreen
} from '../Pages';
import TabNavigation from './Navigatiion';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='profile'>
            <Stack.Screen component={SplashScreen} name='profile'/>
            <Stack.Screen component={TabNavigation} options={{ headerShown: false }} name='TabNavigation' />
            <Stack.Screen component={FlickerRent} options={{ headerShown: false}} name='flickerRent' />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;