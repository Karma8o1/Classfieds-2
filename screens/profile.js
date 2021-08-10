/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
//ratings import
import { AirbnbRating } from 'react-native-ratings';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

const App = ({ navigation }) => {
  const [rating, setRating] = useState(3);
  const [verified, setVerified] = useState(true);
  const [details, setDetails] = useState({
    name:'Alex John Doe',
    email:'JohnDoe0321@gmail.com',
    contact:'0900-78601',
    type:'Individual',
    location:'Model Town, Lahore',
    expire:'2022-05-10',
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View>
          <View
        style={{
          position: 'absolute',
          height: hp(30),
          width: '100%',
          backgroundColor: 'black',
        }}
      />
            <View style={styles.header}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>{navigation.pop();}}>
                  <Icon name="arrow-back-sharp" size={20} color="white" />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 14, marginLeft: 10 }}>
                  Profile
                </Text>
              </View>
              <TouchableOpacity onPress={()=>{navigation.navigate('EditProfile',details);}}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="create-outline" size={18} color="white" />
                <Text style={{ color: '#fff', fontSize: 14, marginLeft: 5 }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <View style={styles.description}>
                <View>
                  <View style={styles.protrude}>
                    <View
                      style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        borderRadius: 5,
                        overflow: 'hidden',
                      }}>
                      <View
                        style={{
                          paddingVertical: hp(1),
                          backgroundColor: 'white',
                          borderRadius: 5,
                        }}>
                        <Image
                          source={require('../components/man.png')}
                          style={{
                            alignSelf: 'center',
                            height: 80,
                            width: 100,
                            marginTop: hp(1),
                            marginBottom: hp(1),
                          }}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 55 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <AirbnbRating
                      type="star"
                      ratingCount={5}
                      defaultRating={rating}
                      size={10}
                      isDisabled={true}
                      showRating={false}
                      ratingBackgroundColor="#000"
                      onFinishRating={value => {
                        setRating(value);
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {' '}
                      {rating}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {details.name}
                    </Text>
                    <Image
                      source={require('../components/check.png')}
                      style={{ height: 12, width: 12 }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 2,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../assets/images/alarm.png')}
                      resizeMode="cover"
                      style={{ height: 15, width: 15, marginRight: 5 }}
                    />
                    <Text style={{ fontSize: 12 }}>Login 12 seconds ago</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 15 }}>
                  <View style={{ flexDirection: 'row' }}>

                    <View
                      style={[
                        styles.tableview,
                        { borderBottomWidth: 1, borderRightWidth: 1 },
                      ]}>
                      <Text style={[styles.tablehead,{color:'lightgreen'}]}>15</Text>
                      <Text style={styles.cat}>Featured</Text>
                    </View>

                    <View
                      style={[
                        styles.tableview,
                        { borderBottomWidth: 1, borderRightWidth: 1 },
                      ]}>
                      <Text style={[styles.tablehead,{color:'red'}]}>74</Text>
                      <Text style={styles.cat}>Favourite</Text>
                    </View>

                    <View style={[styles.tableview, { borderBottomWidth: 1 }]}>
                      <Text style={[styles.tablehead,{color:'orange'}]}>95</Text>
                      <Text style={styles.cat}>Rejected</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableview, { borderRightWidth: 1 }]}>
                      <Text style={[styles.tablehead,{color:'purple'}]}>05</Text>
                      <Text style={styles.cat}>Inactive</Text>
                    </View>

                    <View style={[styles.tableview, { borderRightWidth: 1 }]}>
                      <Text style={[styles.tablehead,{color:'#E4CD05'}]}>10</Text>
                      <Text style={styles.cat}>Expired</Text>
                    </View>

                    <View style={[styles.tableview, {}]}>
                      <Text style={[styles.tablehead,{color:'lightblue'}]}>95</Text>
                      <Text style={styles.cat}>Sold</Text>
                    </View>

                  </View>
                </View>
              </View>
              <View style={{flex:1}}>
                        <Text style={{paddingHorizontal:wp(5) ,color:'#000',fontSize:18,fontWeight:'bold'}}>My Profile</Text>
                      <View style={{paddingTop:'5%'}}>
                        <View style={styles.details}>
                          <Text style={styles.key}>Your Name :</Text>
                          <Text style={styles.userdata}>{details.name}</Text>
                        </View>
                        <View style={styles.details}>
                          <Text style={styles.key}>Email Address :</Text>
                          <Text style={styles.userdata}>{details.email}</Text>
                        </View>
                        <View style={styles.details}>
                          <Text style={styles.key}>Phone Number :</Text>
                          <Text style={styles.userdata}>{details.contact}</Text>
                        </View>
                        <View style={styles.details}>
                          <Text style={styles.key}>Account Type :</Text>
                          <Text style={styles.userdata}>{details.type}</Text>
                        </View>
                        <View style={styles.details}>
                          <Text style={styles.key}>Location :</Text>
                          <Text style={styles.userdata}>{details.location}</Text>
                        </View>
                        <View style={styles.details}>
                          <Text style={styles.key}>Expire Date :</Text>
                          <Text style={styles.userdata}>{details.expire}</Text>
                        </View>
                        <View style={styles.details}>
                          <Text style={styles.key}>Blocked Users :</Text>
                          <TouchableOpacity onPress={()=>{console.log('blocked');}}>
                          <Text style={[styles.userdata,{color:'green',textDecorationLine:'underline'}]}>Click Here</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar hidden={true} animated={true} backgroundColor="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maincontainer: {
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    width: '100%',
  },
  description: {
    alignSelf: 'center',
    width: '90%',
    marginTop: hp(15),
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: '4%',
    elevation: 5,
    shadowColor:'#000',
  },
  protrude: {
    marginTop: hp(-7),
  },
  tableview: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width:wp(28),
    paddingHorizontal: 25,
    paddingVertical:10,
    borderColor: '#e0e0e0',
  },
  tablehead: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cat: {
    fontSize:10,
    fontWeight: 'bold',
  },
  details:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#ededed',
    paddingVertical:10,
    paddingHorizontal:wp(5),
  },
  key:{
    width:'30%',
    fontSize:12,
  },
  userdata:{
    fontSize:14,
    color:'#000',
    fontWeight:'bold',
  },
});
export default App;
