/* eslint-disable prettier/prettier */
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
  SafeAreaView,
  ImageBackground,
  TextInput,
} from 'react-native';

import {} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

import PhoneInput from 'react-native-phone-number-input';




const App = ({ navigation }) => {

    // Phone input constants    
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef(null);
    //name,email and message inputs
    const [info, setInfo] = useState({
        name:null,
        email:null,
        message:null,
    });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1, width: '100%' }}>
        <View style={{ flex: 1, width: '100%' }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="arrow-back-sharp" size={22} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', marginLeft: wp(2) }}>
              Contact Seller
            </Text>
          </View>
          <View style={styles.maincontainer}>
              <View style={[styles.spacing,{width:'48%'}]}>
                  <Text style={[styles.spacing,{color:'black',fontWeight:'bold',fontSize:14}]}>Your Name</Text>
                  <TextInput placeholder={null}
                  style={styles.inputs}
                  value={info.name}
                  onChangeText={text=>setInfo({...info,name:text})}
                  />
              </View>
              <View style={[styles.spacing,{width:'48%'}]}>
                  <Text style={[styles.spacing,{color:'black',fontWeight:'bold',fontSize:14}]}>Email</Text>
                  <TextInput placeholder={null}
                  style={styles.inputs}
                  value={info.email}
                  onChangeText={text=>setInfo({...info,email:text})}
                  />
              </View>
          </View>
          <View style={[styles.spacing,{width:'100%',paddingHorizontal:wp(2.5)}]}>

                  <Text style={[styles.spacing,{color:'black',fontWeight:'bold'}]}>Phone</Text>
                  {/* <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
                      <TextInput style={[styles.inputs,{width:'20%'}]} placeholder="code"/>
                      <TextInput style={[styles.inputs,{width:'80%'}]} placeholder="302 3212433" />
                  </View> */}
                  <PhoneInput
                    containerStyle={[styles.input,{
                        width:'100%',
                        borderWidth:1,
                        borderColor:'#ededed',
                        alignItems:'center',
                        backgroundColor:'#f8f8f8',
                        borderRadius:5,
                    }]}
                    textContainerStyle={{
                      color:'black',
                      alignSelf:'center',
                      alignItems:'center',
                      justifyContent:'center',
                      paddingVertical:0,
                    }}
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="PK"
                    layout="first"
                    onChangeText={(text) => {
                                    setValue(text);
                                            }}
                    onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                    }}
                    placeholder="321 3231213"
                    />
          </View>
          <View style={[styles.spacing,{width:'100%',paddingHorizontal:wp(2.5)}]}>
              <Text style={[styles.spacing,{fontSize:14,color:'black',fontWeight:'bold'}]}>Your Message</Text>
              <TextInput
              style={[styles.inputs,{textAlignVertical:'top',width:'100%'}]}
              multiline
              numberOfLines={5}
              placeholder={null}
              value={info.message}
              onChangeText={text=>setInfo({...info,message:text})}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{
          position:'absolute',
          bottom:10,
          width:'100%',
          alignItems:'center',
          }}>
      <View
            style={{
              height: hp(6),
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2cc0fc',
              borderRadius: 5,
              overflow: 'hidden',
            }}>
            <Text style={{
                  color: 'white',
                  fontWeight:'bold',
                  fontSize:14,
                   }}>Send Email</Text>
          </View>
          </TouchableOpacity>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  maincontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:wp(3),
  },
  spacing:{
      marginVertical:hp(1),
  },
  inputs:{
      backgroundColor:'#fafafa',
      borderWidth:1,
      borderColor:'#ededed',
      borderRadius:5,
      paddingLeft:15,
      fontSize:12,
  },
  button:{

  },
});

export default App;
