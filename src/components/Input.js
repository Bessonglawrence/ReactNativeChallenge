import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({lable, value, onChangeText, placeholder, secureTextEntry, icon, passwordiconlocked, passwordiconunlocked}) => {   

    const [ isFocused, setIsFocused ] = useState(false);
    const [ showpasswordicon, setShowpasswordicon] = useState(true)

    
    // onFocus used to change bordercolor and icon color when user clicks on a field
    const onFocusChange = () => {
        setIsFocused(true);
    }

    // function to show password icon when unlocked or locked 
    const renderIcon = () => {
        const passwordunlocked = <Icon name={passwordiconunlocked} size={30} color='#14a9ba'/*'#a6a6a6'*//>
        const passwordlocked = <Icon name={passwordiconlocked} size={30} color='#14a9ba'/*'#a6a6a6'*//>

        if(showpasswordicon){
            return <Text>{passwordunlocked}</Text>
        } else {
            return <Text>{passwordlocked}</Text>
        }
    }

    // function to decide weather or not to show password icon
    const showpassword = () => {
        if (secureTextEntry == true && showpasswordicon) {
            return true;
        } else {
            return false
        }
    }


        const { inputStyle, lableStyle, containerStyle, mainwrapperstyle, iconstyle, inputwrapperstyle } = styles;
        const { lable, value, onChangeText, placeholder, secureTextEntry, icon } = this.props;

        // icon for the field inputs
        const myicon = <Icon   name={icon} size={20} color={this.state.isFocused ?  'black' :  '#14a9ba' } />

        return (
            <View
                onFocus={onFocusChange}
                style={[mainwrapperstyle, isFocused ? { borderColor: 'black' } : { borderColor: '#ccc' }]}
            >
                <View style={containerStyle}>
                        <View style={{flexDirection: 'row', paddingVertical: 15}}>
                            <View style={{ flex: 0.6, justifyContent: 'center', paddingHorizontal: 6, alignItems: 'center' }}>
                                <Text style={iconstyle}>{myicon}</Text>
                            </View>

                            {lable &&
                            <View style={{ flex: 2.9, justifyContent: 'center' }}>
                                <Text style={lableStyle}>{lable}</Text>
                            </View>
                            }
                        </View>

                        <View style={{ flex: 6.1, justifyContent: 'center'}}>
                            <TextInput
                                onFocus={onFocusChange}
                                secureTextEntry={showpassword}
                                placeholder={placeholder}
                                autoCorrect={false} // to stop auto correction on email field
                                style={[inputStyle, this.state.isFocused ? { fontStyle: 'normal', color: 'black' } : { fontStyle: 'italic', color: 'white' }]}
                                value={value}
                                autoCapitalize={this.props.autoCapitalize ?? 'sentences'}
                                keyboardType={this.props.keyboardType ?? 'default'}
                                onChangeText={onChangeText}
                            />
                        </View>

                   <TouchableOpacity onPress={() => setShowpasswordicon(!showpasswordicon)} style={[iconstyle,{backgroundColor:'white', alignSelf: 'flex-end', marginRight: 10}]}>
                        {renderIcon}
                    </TouchableOpacity>

                </View>
            </View>
        )
}
const styles = {
    mainwrapperstyle: {
        borderWidth: 1,
        borderRadius: 2,
        marginHorizontal: 15,
        marginVertical: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 2,
        marginVertical: 10,
        marginHorizontal: 10
    },
    inputStyle: {
        height: 43,
        width: '100%',
        fontSize: 18,
        marginTop: 5,
        paddingHorizontal: 20
    },
    lableStyle: {
        fontSize: 18,
        paddingLeft: 7,
        color: '#14a9ba',
    },
    containerStyle: {
        alignItems: 'center',
    },
    iconstyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Input;