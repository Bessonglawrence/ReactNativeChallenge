import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import {logins} from '../../../../res/data';
import  {LoginCard}  from '../../../sections';
import styles from './LoginHome.style';


const LoginHome = () => {

  const [loginData, setLoginData] = useState([]);

  useEffect(() =>{
    setLoginData(logins)
  })


      return(
          <FlatList
              contentContainerStyle={styles.mainContainer}
              onScrollEndDrag={this.scrollEnded}
              numColumns={2}
              data={logins}
              renderItem={({ item, index }) => { 
                  {
                      return (
                          <View key={index}>
                              <LoginCard login={item} key={item.id} /> 
                          </View>
                      )
                  }
              }}
              keyExtractor={item => (item.id).toString()}
          />
      )
}

export default LoginHome;