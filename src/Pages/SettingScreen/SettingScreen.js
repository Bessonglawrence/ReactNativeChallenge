import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const SettingScreen = () => {

  const array = [ 4, 5, 17, 2, 20, 3, 7 ];

  const filterArray = (arr) =>{
    const filteredArray = arr.filter(number => number > 5);
    console.log(filteredArray);
  }

  const evenFiltered = (arr) =>{
    const filteredArray = arr.filter(number => number %2 == 0);
    console.log(filteredArray);
  }

  const callFunction = () =>{
    alert('We are trying it')
    filterArray(array)
    evenFiltered(array)
  }


  return (
    <View>
      <Text> we are in SettingScreen</Text>
      <Button title='Call function' onPress={callFunction}/>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})