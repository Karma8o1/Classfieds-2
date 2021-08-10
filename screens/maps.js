/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import GetLocation from 'react-native-get-location';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons';

const App: () => Node = ({navigation}) => {
  const [btn, setBtn] = useState(false);
  const [padding,setPadding] = useState(0);

  const cLoc = [{ latitude: null, longitude: null }];

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
    animating: false,
  });

  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -102.4324,
    latitudeDelta: 1.15,
    longitudeDelta: 1.21,
  });

  const currentLocation = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 5000,
    })
      .then(locations => {
        setLocation({
          latitude: locations.latitude,
          longitude: locations.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
        return location;

      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      });
  };

  const placemarker = async location => {
    setCoordinates({
      latitude: location.latitude,
      longitude: location.longitude,
      visible: true,
    });
    setLocation({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
  };
  useEffect(()=>{
   currentLocation();
  }, []);


  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: 'black',
          alignItems: 'center',
          width: '100%',
          elevation: 1,
          paddingHorizontal: wp(2),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Icons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: 'white', paddingLeft: 8 }}>Location Map</Text>
      </View>
      <View style={[styles.mapcontainer]}>
        <MapView.Animated
          style={[styles.map]}
          followsUserLocation={true}
          zoomEnabled={true}
          minZoomLevel={5}
          maxZoomLevel={20}
          showsMyLocationButton={true}
          showsUserLocation={true}
          userLocationPriority={'high'}
          userLocationUpdateInterval={5000}
          rotateEnabled={true}
          onMapReady={()=>{
            currentLocation();
          }}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: location.latitudeDelta,
            longitudeDelta: location.longitudeDelta,
       }}
          onLongPress={e => {
            placemarker(e.nativeEvent.coordinate);
          }}>
          {coordinates.latitude != null ? (
            <>
              <Marker
                coordinate={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
                }}
              />

              <MapViewDirections
      origin={location}
      destination={coordinates}
      apikey={'AIzaSyBPSTIqqsvBij0NUxX65Qvv_7sRffRhRIE'}
  />
            </>
          ) : null}
        </MapView.Animated>
      </View>
      <StatusBar animted={true} hidden={true} backgroundColor="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapcontainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop:50,
  },
});
export default App;
