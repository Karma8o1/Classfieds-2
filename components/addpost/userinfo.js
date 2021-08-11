/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

//Toast Notifications
import Toast from 'react-native-toast-message';

import GetLocation from 'react-native-get-location';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';


//Styling imports
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import {} from '@react-navigation/drawer';


//Icon imports
import Icon from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CountrySelectDropdown from 'react-native-searchable-country-dropdown';

const App = ({ navigation }) => {
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

  const [selected, setSelected] = useState({
    name:null,
    contact:null,
    country:null,
    address:null,
    longitude:null,
    latitude:null,
  });
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
    animating: false,
  });

  const placemarker = location => {
    setCoordinates({
      latitude: location.latitude,
      longitude: location.longitude,
      visible: true,
    });}

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={{ flexGrow: 1, width: '100%', backgroundColor: null }}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: wp(3.5), paddingTop: hp(3) }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>User Information</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>
                User Name
              </Text>
              <TextInput
              placeholder="Alex John"
              style={styles.input} />
            </View>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>Price</Text>
              <TextInput style={[styles.input]} placeholder={null}
              value={selected.price}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          price:text});
              }}
              keyboardType="numeric"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>
                Country
              </Text>
              <View>
                <CountrySelectDropdown
                    countrySelect={(value)=>{setSelected({...selected,country:value});}}
                    error={(errorMsg)=>{alerts('Error',errorMsg,'error');}}
                    fontFamily={'Nunito-Regular'}
                    textColor={'#000'}
                    defaultCountry="PK"
                    dropdownOffsetX={0}
                    />
              </View>
            </View>
            <View style={{ width: '48%' }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={[styles.spacing, styles.secondtitle]}>Address</Text>
              </View>
              <TextInput style={[styles.input]} placeholder={null}
              value={selected.tags}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          tags:text});
              }}
              />
            </View>
          </View>
          <View style={{
              height:hp(40),
              width:'95%',
              borderRadius:5,
              overflow:'hidden',
              alignItems:'center',
              alignSelf:'center',
              }}>
              <MapView
              style={{height:hp(40),width:'100%'}}
              followsUserLocation={true}
              zoomEnabled={true}
              minZoomLevel={5}
              maxZoomLevel={20}
              showsMyLocationButton={true}
              showsUserLocation={true}
              userLocationPriority={'high'}
              userLocationUpdateInterval={5000}
              rotateEnabled={true}
              onLongPress={e => {
                placemarker(e.nativeEvent.coordinate);}}
              >
             {coordinates.latitude != null ? (
              <Marker
                coordinate={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
                }}
              />) : (null)
            }

              </MapView>
          </View>
          <View style={{
              marginTop:hp(2),
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'}}>
              <View style={{width:'48%'}}>
                  <Text style={{color:'black',marginBottom:5}}>Latitude</Text>
                  <View style={[styles.input,{alignItems:'center',justifyContent:'center'}]}>
                      <Text>
                        {coordinates.latitude != null ? coordinates.latitude : 'Latitude'}
                        </Text>
                  </View>
              </View>
              <View style={{width:'48%'}}>
                  <Text style={{color:'black',marginBottom:5}}>Longitude</Text>
                  <View style={[styles.input,{alignItems:'center',justifyContent:'center'}]}>
                      <Text>
                        {coordinates.latitude != null ? coordinates.longitude : 'Longitude'}
                        </Text>
                  </View>
              </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:wp(1),
  },
  title: {
    fontSize: wp(4),
    color: 'black',
    fontWeight: 'bold',
  },
  secondtitle: {
    fontSize: wp(3),
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#fcfcfc',
    paddingHorizontal: 12,
    height:hp(5),
    justifyContent:'center',
    borderRadius:5,
  },
  spacing: {
    paddingVertical: hp(1.25),
  },
  item:{
    fontSize:12,
    color:'black',
  },
  imagecontainer:{
    backgroundColor:'#f8f8f8',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#ededed',
    borderRadius:5,
},
imagecontainer1:{
  height:200,
  width:200,
  borderRadius:500,
  overflow:'hidden',
  alignSelf:'center',

},
modalbtn:{
    height:hp(5),
    width:wp(32),
    backgroundColor:'#089cfc',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:3,
    elevation:5,
    borderRadius:5,

  },
});

export default App;
