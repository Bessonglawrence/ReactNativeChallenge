import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Friends } from '../../../../res/data';
import Icon from 'react-native-vector-icons/Ionicons'

const Cameron = () => {
  return (
    <SafeAreaView>
        <View>
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 20, marginVertical: 10}}>
            <TouchableOpacity>
                <Icon name='add' size={30} color='lightgrey' />
            </TouchableOpacity>
            <View>
                <TextInput placeholder='Search game ...'/>
            </View>
        </View>
        <ScrollView horizontal>
            {
                Friends.map(friend => 

                (
                    <View key={friend.id} style={{marginLeft: 15}}>
                        <Image style={{ width: 60, height: 60, borderRadius: 50}} source={friend.image}/>
                        <Text style={{alignSelf: 'center'}}>{friend.name}</Text>
                    </View>
                
                ))
            }
        </ScrollView>

        <Text style={{marginVertical: 15, alignSelf: 'center', fontSize: 18, color: 'grey'}}>
            Recent Game
        </Text>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View style={{borderWidth: .6, borderColor: 'lightgrey', padding: 4}}>
                <Image source={require('../../../../res/Images/godOfWar.jpeg')} style={{width: 110, height: 50}} />
                <Text style={{marginLeft: 15, paddingTop: 5}}> God Of War </Text>
            </View>
            <View style={{marginLeft: 11, borderWidth: .6, borderColor: 'lightgrey', padding: 4}}>
                <Image source={require('../../../../res/Images/Avatar.png')} style={{width: 110, height: 50}} />
                <Text style={{marginLeft: 15}}> Forth Night</Text>
            </View>
            <View style={{marginLeft: 11, borderWidth: .6, borderColor: 'lightgrey', padding: 4}}>
                <Image source={require('../../../../res/Images/Avatar.png')} style={{width: 110, height: 50}} />
                <Text style={{marginLeft: 15}}> Forth Night</Text>
            </View>
        </View>

    </View>

    </SafeAreaView>
  )
}

export default Cameron;

const styles = StyleSheet.create({})