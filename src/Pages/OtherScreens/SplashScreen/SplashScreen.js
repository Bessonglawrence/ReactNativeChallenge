import React,{useState, useEffect} from 'react';
import {
		View,
		Text, 
		Animated,
        Image,
        Platform
} from 'react-native';
import styles from './SplashScreenStyle';


const SplashScreen = ({navigation}) => {
  const animated = new Animated.Value(0);
  const [fadeValue, setFadeValue ] = useState(animated)


	const fadeAnimation = () =>{
		Animated.timing(fadeValue, {
			toValue: 1,
			duration: 8000,
      useNativeDriver: true
		}).start();
	}
  
  useEffect(() =>{
    fadeAnimation();
  })

  return(
    <View style={styles.container}>
      <Animated.Image 
        style={[styles.animationView, {opacity: fadeValue}]} 
        source={require('../../../../res/Images/ios.png')}
    />
        
    </View>
  );

}

export default SplashScreen;