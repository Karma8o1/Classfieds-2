/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

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
} from 'react-native';

import {} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//ratings import
import { AirbnbRating } from 'react-native-ratings';


import { Divider } from 'react-native-elements';


import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const reviews = [
    {
      name: 'Alex John Doe',
      image:
        'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
      rating: 3,
      time: 'Feb 12, 2020',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    },
    {
        name: 'Alex John Doe',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        rating: 3,
        time: 'Feb 12, 2020',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
      {
        name: 'Alex John Doe',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        rating: 3,
        time: 'Feb 12, 2020',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
      {
        name: 'Alex John Doe',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        rating: 3,
        time: 'Feb 12, 2020',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
      {
        name: 'Alex John Doe',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        rating: 3,
        time: 'Feb 12, 2020',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
      {
        name: 'Alex John Doe',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        rating: 3,
        time: 'Feb 12, 2020',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
      {
        name: 'Alex John Doe',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        rating: 3,
        time: 'Feb 12, 2020',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1, width: '100%' }}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      >
        {reviews.map(data => {
          return (
        <View style={styles.reviews}>
            <View style={{flexDirection:'row'}}>
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                height:hp(8),
                width:hp(8),
                borderWidth:1,
                borderStyle:'dashed',
                borderColor:'#ddd',
                borderRadius:50,
                marginRight:wp(5),
                }}>
            <Image
                    source={{ uri: data.image }}
                    resizeMode="cover"
                    style={{
                        height: hp(7),
                        width: hp(7),
                        backgroundColor:'white',
                        borderRadius:50,
                    }}
                  />
            </View>
                  <View style={{marginRight:wp(5)}}>
                      {/* view right next to image */}
                      <View style={{flexDirection:'row'}}>
                        {/* Airbnb rating under name */}
                        <AirbnbRating
                          type="star"
                          ratingCount={5}
                          defaultRating={data.rating}
                          size={10}
                          isDisabled={true}
                          showRating={false}
                          ratingBackgroundColor="#000"
                        />
                        <Text style={{ fontSize:12,paddingLeft: 2 }}>{data.rating}</Text>
                      </View>
                      <Text style={{color:'black',fontSize:12,fontWeight:'bold'}}>{data.name}</Text>
                  </View>
                  <Divider orientation="vertical" height={hp(3)} width={wp(0.5)}
                   color="white" style={{marginTop:10,marginRight:10}}/>
                  <View style={{marginTop:hp(1.5)}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name="alarm-outline" size={14}/>
                    <Text style={{fontSize:12,marginLeft:5}}>Feb 12, 2020</Text>
                    </View>
                  </View>
                  {/* <View style={{paddingVertical:2,paddingHorizontal:6,backgroundColor:'lightblue'}}>
                    <Text style={{color:'white'}}>
                        Reply
                    </Text>
                  </View> */}
            </View>
            <View style={{
                alignSelf:'flex-end',
                width:'80%',
                paddingHorizontal:10,
                paddingVertical:5,
                borderWidth:1,
                borderColor:'#ededed',
                borderRadius:5,
                backgroundColor:'#f5f5f5',
                }}>
                <Text>{data.review}</Text>
            </View>
        </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:5,
    paddingVertical:3,
    marginVertical:hp(2),
    borderBottomWidth:1,
    borderColor:'#ededed',
  },
  reviews: {
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#ededed',
    marginVertical:5,
    paddingBottom:10,
  },
});
export default App;
