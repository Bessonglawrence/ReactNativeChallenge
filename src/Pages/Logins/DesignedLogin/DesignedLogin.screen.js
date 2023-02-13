import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './DesignedLogin.style';


const DesignedLogin = ({navigation}) => {
    return(

        <LinearGradient
            colors={['#e9dcb4', '#605C3C']} 
            style={styles.linearGradient}
            start={{x: 0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            locations={[0,1]}
        >
        <View style={styles.mainContainer}>

            <Text style={styles.headerText}> Sign In </Text>
            <Icon
                name="guitar-pick"
                color="white"
                size={100}
                style={{alignSelf: 'center', marginVertical: 30}} 
            />
            <View style={{ marginTop: 10, marginBottom: 8}}>
                <View style={styles.inputSections}>
                    <Icon
                        name='account-circle'
                        size={30}
                        color="white" 
                        style={{marginTop: 10, marginRight: 8, marginLeft: 6}}
                    />
                    <TextInput
                        placeholder="Name / Email"
                        placeholderTextColor="white" 
                        style={{fontSize: 18}}
                    />
                </View>
                <View style={styles.inputSections}>
                    <Icon
                        name='lock'
                        size={30}
                        color="white" 
                        style={{marginTop: 10, marginRight: 8, marginLeft: 6}}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="white" 
                        style={{fontSize: 18}}
                    />
                </View>


            </View>

            <TouchableOpacity style={styles.signInButton} onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText} > Sign In </Text>
            </TouchableOpacity>

            <Text style={styles.forgotPasswordText}> Forgot Password? </Text>

            <View style={styles.CreateAccountButton}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}> Create Account </Text>
                </TouchableOpacity>
            </View>

        </View>
        </LinearGradient>
    );
}

export default DesignedLogin;