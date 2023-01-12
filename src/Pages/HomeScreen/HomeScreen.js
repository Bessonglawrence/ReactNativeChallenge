import React,{useState, useEffect} from 'react';
import { ScrollView, View, Text, Animated, FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import{ homes } from '../../../res/data';
import { HomeCard } from '../../sections';
import styles from './HomeScreenStyle';


const HomeScreen = () => {

  const [ initialHomes, setInitialHomes] = useState([])

  useEffect(() =>{
    setInitialHomes(homes)
  })

    scrollEnded = (obj) => {
        this.scrolledDistance = obj.nativeEvent.contentOffset.y;
    }

    return(
        <FlatList
            contentContainerStyle={styles.mainContainer}
            onScrollEndDrag={this.scrollEnded}
            data={initialHomes}
            renderItem={({ item, index }) => { 
                {
                    return (
                        <View key={index}>
                            <HomeCard home={item} key={item.id} /> 
                        </View>
                    )
                }
            }}
            keyExtractor={item => (item.id).toString()}
        />
    );
}

export default HomeScreen;