/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

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

const App = ({navigation}) => {
  const [data, setData] = useState(null);
  // function for showing toast notifications
  const alerts = (message1, message2, type) => {
    return Toast.show({
      text1: message1,
      text2: message2,
      type: type,
      topOffset: 50,
      visibilityTime: 5000,
    });
  };
  const check = () => {
    axios({
      url: 'https://my-json-server.typicode.com/Karma8o1/video/db',
    })
      .then(response => setData(response.data.details))
      .catch(error => {
        alerts('Error', error.toString(), 'error');
      });
  };
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    check();
  },[]);
  return (
    <View style={styles.container}>
            {data !== null ?
            (<FlatList
                      nestedScrollEnabled={true}
                      showsVerticalScrollIndicator={false}
                      refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={()=>{
                            check();}}
                      />
                      }
                      keyExtractor={item => item.id}
                      style={{
                        flex:1,
                        marginVertical: hp(2),
                        width:'100%',
                        borderRadius:5,
                      }}
                      data={data}
                      renderItem={({ item }) => (
                          <TouchableOpacity style={{
                            flex:1,
                            borderBottomWidth:1,
                            marginBottom:10,
                            paddingBottom:hp(1.5),
                            borderColor:'#ededed',
                            }}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <View>
                            <Image source={{uri:item.image[3]}}
                            style={{
                                height:hp(17),
                                width:hp(17),
                                borderRadius:5,
                            }}
                            resizeMode="cover"
                            />
                            </View>
                            <View style={{paddingLeft:wp(5),width:'65%'}}>
                                <View style={{paddingBottom:3,width:'100%',flexDirection:'row',alignItems:'center',
                                justifyContent:'space-between'}}>
                                    <Text style={{fontSize:wp(2)}}>Vehicles | Cars | Honda</Text>
                                    <View style={{padding:3,backgroundColor:'#ededed',borderRadius:5}}>
                                        <Icon name="heart" size={15}/>
                                    </View>
                                </View>
                                <View style={{paddingBottom:3,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name="alarm-outline" size={15}/>
                                    <Text style={{fontSize:wp(3),color:'black',paddingLeft:5}}>
                                        {item.timestart}
                                    </Text>
                                </View>
                                <Text style={styles.title}>{item.name.substring(0,20)} ...</Text>
                                <View style={{paddingBottom:3,flexDirection:'row',alignItems:'center'}}>
                                    <Image source={require('../map.png')}
                                    style={{height:20,width:20}}
                                    resizeMode="cover"
                                    />
                                    <Text style={{paddingLeft:2}}>{item.location}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.title,{color:'#4285F4'}]}>
                                        ${item.price}
                                        </Text>
                                        <Text> (fixed)</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                      )}
                    />) : (<ActivityIndicator
                        animating={true}
                        color={Colors.red800}
                      />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
      fontSize:wp(4),
      color:'black',
      fontWeight:'bold',

  }
});

export default App;
