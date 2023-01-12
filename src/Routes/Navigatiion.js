import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    HomeScreen, 
    ProfileScreen, 
    RegisterScreen, 
    SettingScreen, 
} from '../Pages';


const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused 
                                ? 'person-outline' 
                                : 'person-circle-outline';
                        } else if ( route.name === 'Setting'){
                            iconName = focused
                                ? 'settings'
                                : 'settings-outline';
                        } else if ( route.name === 'Register'){
                            iconName = focused 
                                ? 'list-outline'
                                : 'list-circle-outline';
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={35} color={color} />;
                    },
                    tabBarActiveTintColor: '#3798c8',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle:{
                        fontSize: 14,
                        paddingBottom: 4
                    },
                    tabBarStyle:{
                        ...Platform.select({
                            ios:{
                                height: 90,
                            },
                            android:{
                                height: 60
                            }
                        })
                    }
                    })}
            >
                <Tab.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <Tab.Screen name='Profile' component={ProfileScreen} />
                <Tab.Screen name='Setting' component={SettingScreen} />
                <Tab.Screen name='Register' component={RegisterScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;