/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';

//Toast Notifications
import Toast from 'react-native-toast-message';

import axios from 'axios';

//Styling imports
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  Pressable,
  ImageBackground,
  FlatList,
  TouchableNativeFeedback,
  RefreshControl,
} from 'react-native';

import {} from '@react-navigation/drawer';

import { ActivityIndicator, Colors } from 'react-native-paper';

//Icon imports
import Icon from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = ({ data }) => {

  return (
    <View style={styles.container}>
      <FlatList
        style={{width:'100%'}}
        data={data}
        nestedScrollEnabled={true}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#ededed',
              marginBottom: hp(1.5),
              paddingBottom:hp(1),
              paddingHorizontal: wp(5),
            }}>
            <View style={{
                marginVertical:hp(1),
                flexDirection:'row',
                flex:1,
                alignItems:'center',
                justifyContent:'space-between',
                }}>

            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View
                style={{
                  height: hp(7.5),
                  width: hp(7.5),
                  borderRadius: 100,
                  overflow: 'hidden',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#d3d3d3',
                  padding: 1,
                }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: hp(7), width: hp(7) }}
                  resizeMode="cover"
                />
              </View>
                <View style={{marginLeft:wp(2.5)}}>
                    <Text style={styles.heading}>{item.name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="stopwatch-outline" size={20} />
                        <Text style={{fontSize:12}}>{item.date}</Text>
                    </View>
                </View>
              </View>
              <View style={{
                  backgroundColor:'#cadffe',
                  paddingHorizontal:wp(1),
                  paddingVertical:hp(0.5),
                  borderRadius:5,
                  }}>
                  <Text style={{fontWeight:'bold'}}>$ {item.bid}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  heading:{
      fontSize:16,
      fontWeight:'bold',
      color:'black',
  },
});
export default App;
