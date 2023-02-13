import { View, Text } from 'react-native'
import {View, Text,TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react'

const LoginCard = ({login}) => {

    const navigation = useNavigation();

    const handleNavigation = () =>{
        switch(login.id){
            case 1:
                navigation.navigate('');
                break;
        }
    }

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => handleNavigation(login.id)} >
                <ImageBackground
                source = {login.image}
                style = {styles.image}
                imageStyle={{ borderRadius: 10}}
                >
                    <View style={styles.mainTextView}>
                        <View style={[{backgroundColor: login.color},styles.ratingView]}>
                            <Text style={styles.rating}>
                                {login.id}
                            </Text>
                        </View>
                        <Text style={styles.name}>
                            {login.name}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            
        </View>
    );
}

export default LoginCard;