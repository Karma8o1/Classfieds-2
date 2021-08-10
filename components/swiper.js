/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = images => {

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        autoplay={false}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        <View style={styles.slide1}>
          <Image
            //     source={require('../assets/logo.png')}
            source={{ uri: images.image1 }}
            style={styles.images}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={{ uri: images.image2 }}
            style={styles.images}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide3}>
          <Image source={{ uri: images.image3 }} style={styles.images} />
        </View>
        <View style={styles.slide1}>
          <Image
            source={{ uri: images.image4 }}
            style={styles.images}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={{ uri: images.image5 }}
            style={styles.images}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
        width:'95%',
        alignSelf:'center',
        marginVertical:hp(1),
      },
  wrapper: {
    height: 200,
    borderRadius:10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    overflow:'hidden',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  images:{
        height:'100%',
        width:'100%',
        borderRadius:10,
  },
});
export default App;