import React from 'react';
import {View, Text,TouchableOpacity, ImageBackground,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './HomeCard.style';

const HomeCard = ({home}) => {
    const navigation = useNavigation()

    const handleNavigation = () =>{
        switch(home.id){
            case 1:
                navigation.navigate('flickerRent')
                break;
            case 2:
                navigation.navigate('flickerRent')
                break;
        }
    }
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => handleNavigation(home.id)} >
                    <ImageBackground
                    source = {home.image}
                    style = {styles.image}
                    imageStyle={{ borderRadius: 10}}
                    >
                        <View style={styles.mainTextView}>
                            <View style={[{backgroundColor: home.color},styles.ratingView]}>
                                <Text style={styles.rating}>
                                    {home.rating}
                                </Text>
                            </View>
                            <Text style={styles.name}>
                                {home.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        );
}

export default HomeCard;