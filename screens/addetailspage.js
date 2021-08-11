/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

//Countdown component import
import CountDown from 'react-native-countdown-component';

//Toast imports
import Toast from 'react-native-toast-message';


//swiper import
import Swiper from 'react-native-swiper';

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
} from 'react-native';

import Dialog, { SlideAnimation, DialogContent, DialogFooter,DialogButton } from 'react-native-popup-dialog';

import { Modal, Portal, Provider } from 'react-native-paper';

import {} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Header } from 'react-native-elements';

import { ActivityIndicator, Colors } from 'react-native-paper';

import Icons from 'react-native-vector-icons/Ionicons';

//ratings import
import { AirbnbRating } from 'react-native-ratings';
//divide import
import { Divider } from 'react-native-elements';


const App = ({ route, navigation }) => {

  // function for showing toast notifications
  const alerts = (message1,message2) => {
    return (
      Toast.show({
        text1:message1,
        text2:message2,
      })
    );
  };

  const [product, setProduct] = useState(route.params);
  const [readstate, setReadstate] = useState({
    read: false,
    title: 'Read More',
  });
  const [modalShow, setModalShow] = useState(false);

  const [visible, setVisible] = useState(false);

  const [vendor, setVendor] = useState({
    name:'Adforest Admin',
    image:'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
    background:'https://drive.google.com/uc?export=download&id=1NsEYGPXBfiihZLKYYuIP0MfY8Tb_pAQs',
    verification:'Verified',
    personal:{
      email:'Gmail@gmail.com',
      contact_number:'0900-78601',
      address:'location, Location',
      language:[
        'English','Urdu','Hindi',
      ],
      joining:'June 30, 2017',
    },
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating:2,
    lastlogin:24,
  });
  // const [index,setIndex] = useState(1);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    _countDown(product.timeend);
  });

  const _countDown = (end) => {
    const current = new Date();
    const End = new Date(end);
    var difference = Math.floor((End - current) / 1000);
    setTimer(difference);
  };
  const [rating, setRating] = useState(1);
  const [timer, setTimer] = useState(null);
  const [desc, setDesc] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  );
  const _shorten = data => {
    if (readstate.read === false) {
      return data.substring(0, 150);
    } else {
      return data;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1, backgroundColor: 'white' }}>
        <View style={{ height: '100%' }}>
          <View style={{ flex: 1 }}>
            <Header
              containerStyle={{ backgroundColor: '#fff' }}
              leftComponent={
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.pop();
                    }}>
                    <Icons
                      name="md-arrow-back-circle-outline"
                      size={30}
                      style={{ color: 'black' }}
                    />
                  </TouchableOpacity>
                </View>
              }
              centerComponent={
                <Text
                  style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                  Details Page
                </Text>
              }
              rightComponent={
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity>
                    <Icons
                      name="warning"
                      size={25}
                      style={{ color: '#F2BA49', marginHorizontal: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icons
                      name="ios-share-social"
                      size={25}
                      style={{ color: 'black', marginHorizontal: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icons
                      name="md-heart"
                      size={25}
                      style={{ color: 'red', marginHorizontal: 5 }}
                    />
                  </TouchableOpacity>
                </View>
              }
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 1,
                width: '92%',
                overflow: 'hidden',
                borderRadius: hp(2),
              }}>
              <Swiper
                style={styles.wrapper}
                showsPagination={false}
                autoplay={play}
                loop={false}
                loadMinimalLoader={
                  <ActivityIndicator animating={true} color={Colors.red800} />
                }
                // onIndexChanged={index => {
                //   setIndex(index + 1);
                // }}
                >
                {product.image.map(images => {
                  return (
                    <View style={styles.slide1}>
                      <Image
                        style={{ height: 200, width: '100%' }}
                        source={{ uri: images }}
                        resizeMode="cover"
                      />
                    </View>
                  );
                })}
              </Swiper>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#111',
                      padding: wp(1),
                      borderRadius: 10,
                      borderWidth: 1,
                      borderStyle: 'dashed',
                      borderColor: '#ededed',
                    }}>
                    <Icons
                      name="images-outline"
                      size={20}
                      style={{ color: 'white' }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 10,
                          marginLeft: wp(2),
                        }}>
                        1
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 10,
                        }}>
                        /{product.image.length}
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 10,
                        }}>
                        Photos
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setPlay(!play);
                  }}>
                  <Icons
                    name="ios-play-circle"
                    size={30}
                    style={{ color: '#fff', borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                paddingVertical: '2%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: wp(2),
                  backgroundColor: '#0b2266',
                  borderRadius: 10,
                  paddingHorizontal: wp(5),
                }}>
                <Icons
                  name="megaphone-sharp"
                  size={20}
                  style={{ color: 'white' }}
                />
                <Text style={{ color: 'white', marginHorizontal: '5%' }}>
                  Sell
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ff4040',
                  width: wp(20),
                  height: hp(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{ color: 'white' }}>Featured</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Maps');
              }}
              style={{
                position: 'absolute',
                bottom: hp(3),
                right: wp(8),
                alignItems: 'center',
              }}>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={{
                    uri: 'https://image.flaticon.com/icons/png/512/235/235861.png',
                  }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: '2%', marginTop: '1%' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 0,
              }}>
              <Icons
                name="stopwatch-outline"
                size={25}
                style={{ color: '#333' }}
              />
              <Text style={{ marginLeft: '1%' }}>{product.Date}</Text>
            </View>
            <View style={{ marginHorizontal: '1%' }}>
              <Text
                style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
                {/* if product name length is greater than  specified it will be shortened*/}
                {product.name.length > 20
                  ? product.name.substring(0, 20) + '...'
                  : product.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '1%',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    color: '#0398ff',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  $
                </Text>
                <Text
                  style={{
                    color: '#0398ff',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  {product.price}
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>/</Text>
              <Text style={{ fontSize: 14 }}>{product.category} </Text>
              <Divider
                orientation="vertical"
                width={1}
                style={{ marginHorizontal: 1 }}
              />
              <AirbnbRating
                type="star"
                ratingCount={5}
                defaultRating={rating}
                size={15}
                isDisabled={true}
                showRating={false}
                ratingBackgroundColor="#000"
                onFinishRating={value => {
                  setRating(value);
                }}
              />
              <Text> {rating} / 5</Text>
              <View
                style={{
                  elevation: 5,
                  borderWidth: 1,
                  borderColor: '#ddd',
                  borderRadius: 5,
                  backgroundColor: '#ededed',
                  padding: 3,
                  marginHorizontal: wp(2),
                }}>
                <Text>15 Reviews</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: hp(1),
              }}>
              <Image
                source={{
                  uri: 'https://image.flaticon.com/icons/png/512/235/235861.png',
                }}
                style={{
                  height: 30,
                  width: 30,
                  marginRight: wp(3),
                  marginLeft: wp(1),
                }}
              />
              <Text>{product.location}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingVertical: hp(2),
              }}>
              <TouchableOpacity
                style={[
                  styles.contactbuttons,
                  {
                    backgroundColor: '#fff5f5',
                    borderColor: '#fc7970',
                  },
                ]}>
                <Icons name="mail" size={30} style={{ color: '#fc483a' }} />
                <Text style={{ marginLeft: wp(2) }}>Send Message</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.contactbuttons,
                  {
                    backgroundColor: '#f2fbf2',
                    borderColor: '#57c66b',
                  },
                ]}>
                <Icons
                  name="call-sharp"
                  size={30}
                  style={{ color: '#18b135' }}
                />
                <Text style={{ marginLeft: wp(2) }}>1234****Show</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  paddingHorizontal: wp(3),
                  paddingBottom: hp(1),
                  color: '#000',
                }}>
                Overview
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#efefef',
                paddingVertical: hp(3),
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: '#e0e0e0',
              }}>
              <View style={styles.overview}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: 'https://drive.google.com/uc?export=download&id=1uEBQ3zwxQ8X_kYiVjLuC34y3WjYNvCAd',
                      }}
                      style={{ height: hp(3), width: hp(3) }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={styles.overviewheadings}>Category</Text>
                      <Text style={{}}>{product.category}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: 'https://drive.google.com/uc?export=download&id=1uEBQ3zwxQ8X_kYiVjLuC34y3WjYNvCAd',
                      }}
                      style={{ height: hp(3), width: hp(3) }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={styles.overviewheadings}>Type</Text>
                      <Text style={{}}>{product.Type}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: 'https://drive.google.com/uc?export=download&id=1uEBQ3zwxQ8X_kYiVjLuC34y3WjYNvCAd',
                      }}
                      style={{ height: hp(3), width: hp(3) }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={styles.overviewheadings}>Price</Text>
                      <Text style={{}}>${product.price}</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: 'https://drive.google.com/uc?export=download&id=1uEBQ3zwxQ8X_kYiVjLuC34y3WjYNvCAd',
                      }}
                      style={{ height: hp(3), width: hp(3) }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={styles.overviewheadings}>Date</Text>
                      <Text style={{}}>{product.Date}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: 'https://drive.google.com/uc?export=download&id=1uEBQ3zwxQ8X_kYiVjLuC34y3WjYNvCAd',
                      }}
                      style={{ height: hp(3), width: hp(3) }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={styles.overviewheadings}>Condition</Text>
                      <Text style={{}}>Used</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: 'https://drive.google.com/uc?export=download&id=1uEBQ3zwxQ8X_kYiVjLuC34y3WjYNvCAd',
                      }}
                      style={{ height: hp(3), width: hp(3) }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={styles.overviewheadings}>Location</Text>
                      <Text style={{}}>{product.location}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: hp(3), alignItems: 'center' }}>
              <CountDown
                until={timer}
                size={hp(3)}
                onFinish={() => navigation.pop()}
                digitStyle={{ backgroundColor: '#000', height: hp(7), width: hp(7) }}
                digitTxtStyle={{ color: '#fff' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{
                  d: 'DAYS',
                  h: 'HOURS',
                  m: 'MINUTES',
                  s: 'SECONDS',
                }}
                timeLabelStyle={{
                  fontSize: wp(3),
                  color: '#000',
                }}
                separatorStyle={{ color: 'transparent', width: 5 }}
                showSeparator
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: '95%',
                backgroundColor: '#fbfdff',
                borderWidth: 1,
                borderColor: '#ecf4fc',
              }}>
              <View style={styles.bids}>
                <TouchableOpacity 
                onLongPress={()=>{setVisible(true);}}
                style={[styles.bids, { paddingHorizontal: 0 }]}>
                  <View style={[styles.container, { paddingVertical: hp(2) }]}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'green',
                      }}>
                      500
                    </Text>
                    <Text>Total Bids</Text>
                  </View>
                  <View style={styles.container}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'blue',
                      }}>
                      3500
                    </Text>
                    <Text>Highest Bid</Text>
                  </View>
                  <View style={styles.container}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'red',
                      }}>
                      100
                    </Text>
                    <Text>Lowest Bid</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PlaceBids');
                }}>
                <View style={styles.button}>
                  <Text
                    style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
                    Bid Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '95%',
                alignSelf: 'center',
                paddingVertical: hp(1),
              }}>
              <Text style={{ fontSize: 20, color: '#000' }}>Description</Text>
              <Text>{_shorten(desc)}</Text>
              {desc.length > 150 ? (
                <TouchableOpacity
                  onPress={() => {
                    setReadstate({ read: !readstate.read });
                  }}>
                  <Text style={{ fontWeight: 'bold' }}>
                    {readstate.read === false ? 'Read More...' : 'Read Less'}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
          <View style={[styles.backdrop, { marginBottom: hp(1) }]}>
            <Text style={[styles.overviewheadings, { fontSize: wp(5) }]}>
              User Reviews
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {/* view for user review data */}
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: hp(1),
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../components/star.png')}
                  style={{ height: 20, width: 20 }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingHorizontal: wp(2),
                  }}>
                  {rating}
                </Text>
                <View>
                  <Text>Based on</Text>
                  <View style={{ flexDirection: 'row' }}>
                    {/* the 200 written here should be dynamic */}
                    <Text style={{ fontSize: wp(3), color: '#000' }}>200</Text>
                    <Text style={{ fontSize: wp(3), color: '#000' }}>
                      {' '}
                      User Reviews
                    </Text>
                  </View>
                </View>
              </View>

              {/* TouchableOpacity for writing a review */}
              <TouchableOpacity>
                <View style={[styles.button, { borderRadius: 5, }]}>
                  <Text
                    style={{
                      fontSize: wp(3),
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Write a Review
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.backdrop}>
            {/* view for seller details */}
            <TouchableOpacity onPress={()=>{setModalShow(true);}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: hp(2),
              }}>
              <Image
                // source={require('../components/user.png')}
                source={{uri : vendor.image}}
                style={{ height: hp(7), width: hp(7), marginRight: wp(2),
                borderWidth:1,
                }}
              />
              <View style={{ justifyContent: 'flex-start' }}>
                <View style={{ height: 15, alignSelf: 'flex-start' }}>
                  <AirbnbRating
                    type="star"
                    ratingCount={5}
                    defaultRating={vendor.rating}
                    size={15}
                    isDisabled={true}
                    showRating={false}
                    ratingBackgroundColor="#000"
                    onFinishRating={value => {
                      setRating(value);
                    }}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.overviewheadings}>{vendor.name}</Text>
                  <View
                    style={{
                      marginHorizontal: wp(1),
                      backgroundColor: '#70b41f',
                      paddingVertical: 2,
                      paddingHorizontal: 5,
                      borderRadius: 5,
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                      {vendor.verification}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>Last Login </Text>
                <Text>{vendor.lastlogin}</Text>
                <Text> Hours</Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            {/* view for contacting/blocking seller */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={()=>{navigation.navigate('ContactSeller');}}
                style={[
                  styles.button,
                  {
                    borderRadius: 5,
                    width: wp(40),
                  },
                ]}>
                <Text
                  style={{
                    fontSize: wp(3),
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Contact This Seller
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    borderRadius: 5,
                    width: wp(40),
                    backgroundColor: 'red',
                  },
                ]}>
                <Text
                  style={{
                    fontSize: wp(3),
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Block This Seller
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Dialog
            visible={visible}
            onTouchOutside={() => {
            setVisible(false);
              }}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            footer={
              <DialogFooter>
                <DialogButton
                textStyle={{fontSize:12}}
                  text="Cancel"
                  onPress={() => {setVisible(false);}}
                />
                <DialogButton
                  textStyle={{fontSize:12}}
                  text="Ok"
                  onPress={() => {
                    setVisible(false);
                    navigation.navigate('All Bids');}}
                />
              </DialogFooter>
            }
            >
              <DialogContent>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{paddingTop:15,fontSize:16,color:'black'}}>
                    See all Bids
                    </Text>
                    <Icons name="md-checkmark-done-outline" size={25} color="green" />
                    </View>
              </DialogContent>
          </Dialog>
        </View>
      </ScrollView>
      <Provider>
      <Portal>
        <Modal visible={modalShow} onDismiss={()=>{setModalShow(false);}}
        style={{justifyContent:'flex-end'}}>
          <View style={{
            height:70,
            width:wp(100),
            backgroundColor:'white',
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:5,
            }}>
          <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width:'100%',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity onPress={()=>{navigation.navigate('VendorProfile',vendor);}}
                style={[
                  styles.button,
                  {
                    borderRadius: 5,
                    width: '45%',
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  See Profile
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{
                setModalShow(false);
              }}
                style={[
                  styles.button,
                  {
                    borderRadius: 5,
                    width: '45%',
                    backgroundColor: 'red',
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Exit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
      <StatusBar animted={true} backgroundColor="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overview: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
  },
  overviewheadings: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactbuttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 40,
    elevation: 5,
    shadowColor: '#555',
    overflow:'hidden',
    paddingHorizontal:10,
  },
  bids: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(10),
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#049cff',
    padding: 10,
  },
  backdrop: {
    backgroundColor: '#fbfdff',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ededed',
    marginTop: hp(2),
  },
  wrapper: {
    height: hp(25),
    borderRadius: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
export default App;
