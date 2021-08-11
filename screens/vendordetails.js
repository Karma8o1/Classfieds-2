/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

import { Divider } from 'react-native-elements';

import PagerView from 'react-native-pager-view';

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

//imports for custome pager view components
import Items from '../components/vendor/items';
import Reviews from '../components/vendor/reviews';
import WriteReviews from '../components/vendor/newreview';

const App = ({ navigation, route }) => {
  const [details, setDetails] = useState(route.params);

  const pageRef = useRef(null);
  const [page, setPage] = useState(1);

  const handleChange = pageNum => {
    pageRef.current.setPage(pageNum);
    setPage(pageNum + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.top}>
            <ImageBackground
              source={{ uri: details.background }}
              style={styles.background}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 10,
                }}>
                <View style={{ paddingRight: 15 }}>
                  <Text style={styles.listing}>50</Text>
                  <Text style={styles.listing}>Ads Sold</Text>
                </View>
                <Divider orientation="vertical" color="white" width={0.5} />
                <View style={{ paddingHorizontal: 15 }}>
                  <Text style={styles.listing}>85000</Text>
                  <Text style={styles.listing}>Listings</Text>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 15,
                paddingHorizontal: wp(5),
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  borderRadius: 5,
                  elevation: 5,
                  shadowColor: '#999',
                }}>
                <Image
                  source={{ uri: details.image }}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ marginTop: 50, marginLeft: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                  <AirbnbRating
                    type="star"
                    ratingCount={5}
                    defaultRating={details.rating}
                    size={10}
                    isDisabled={true}
                    showRating={false}
                    ratingBackgroundColor="#000"
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 10,
                    }}>
                    {' '}
                    {details.rating}
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
                <Text style={{ fontSize: 10 }}>Electronic Products</Text>
              </View>
            </View>
            <Divider color="#ededed" />
          </View>

          <View style={[styles.spacing, {}]}>
            <PagerView
              initialPage={0}
              ref={pageRef}
              transitionStyle="curl"
              onPageSelected={e => {
                setPage(e.nativeEvent.position + 1);
              }}
              scrollEnabled={true}
              style={{
                flex: 1,
                height: hp(70),
                width: '100%',
                backgroundColor: 'white',
              }}>
              <View key="0">
                <ScrollView nestedScrollEnabled={true} style={{ flexGrow: 1 }}>
                  <View>
                    <View style={styles.lowercontainer}>
                      <Text style={styles.title}>Personal Details</Text>
                      <View
                        style={[
                          styles.spacing,
                          {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          },
                        ]}>
                        {/* two parallel views */}
                        <View>
                          {/* each containing respective detials */}
                          <View>
                            {/* individual item view */}
                            <View
                              style={[
                                styles.spacing,
                                { flexDirection: 'row', alignItems: 'center' },
                              ]}>
                              <Image
                                source={require('../components/email.png')}
                                style={{ height: 25, width: 25 }}
                              />
                              <View style={styles.card}>
                                <Text>Email</Text>
                                <Text style={[styles.title, { fontSize: 12 }]}>
                                  {details.personal.email}
                                </Text>
                              </View>
                            </View>
                            <View
                              style={[
                                styles.spacing,
                                { flexDirection: 'row', alignItems: 'center' },
                              ]}>
                              <Image
                                source={require('../components/map.png')}
                                style={styles.icon}
                              />
                              <View style={styles.card}>
                                <Text>Address</Text>
                                <Text style={[styles.title, { fontSize: 12 }]}>
                                  {details.personal.address}
                                </Text>
                              </View>
                            </View>
                            <View
                              style={[
                                styles.spacing,
                                { flexDirection: 'row', alignItems: 'center' },
                              ]}>
                              <Image
                                source={require('../components/calendar.png')}
                                style={styles.icon}
                              />
                              <View style={styles.card}>
                                <Text>Joining</Text>
                                <Text style={[styles.title, { fontSize: 12 }]}>
                                  {details.personal.joining}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <View>
                          <View
                            style={[
                              styles.spacing,
                              { flexDirection: 'row', alignItems: 'center' },
                            ]}>
                            <Image
                              source={require('../components/phone.png')}
                              style={styles.icon}
                            />
                            <View style={styles.card}>
                              <Text>Phone</Text>
                              <Text style={[styles.title, { fontSize: 12 }]}>
                                {details.personal.contact_number}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={[
                              styles.spacing,
                              { flexDirection: 'row', alignItems: 'center' },
                            ]}>
                            <Image
                              source={require('../components/translate.png')}
                              style={styles.icon}
                            />
                            <View style={styles.card}>
                              <Text>Language</Text>
                              <Text style={[styles.title, { fontSize: 12 }]}>
                                {details.personal.language.join(', ')}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      {/* To show multiple details  */}
                    </View>
                    <View style={{paddingHorizontal:10,paddingBottom:30}}>
                      <Text style={[styles.title, styles.spacing]}>
                        Description
                      </Text>
                      <Text>{details.description}</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View key="1" style={{flex:1,paddingHorizontal:10}}>
                <Items/>
              </View>
              <View key="2" style={{ flex: 1,paddingHorizontal:10 }}>
                <Reviews/>
              </View>
              <View key="3" style={{ flex: 1,paddingHorizontal:10 }}>
                <WriteReviews/>
              </View>
            </PagerView>
          </View>
          {/* bottom navigation for pager view */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[
              styles.spacing,
              {
                flexDirection: 'row',
                backgroundColor: '#ededed',
                paddingVertical: 0,
                height:hp(6),
                position: 'absolute',
                bottom: -10,
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                handleChange(0);
              }}
              style={styles.bottom}>
              <View
                style={[
                  styles.bar,
                  page !== 1
                    ? { backgroundColor: 'transparent' }
                    : { backgroundColor: '#4285F4' },
                ]}
              />
              <Text style={{ color: 'black' }}>Description</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChange(1);
              }}
              style={styles.bottom}>
              <View
                style={[
                  styles.bar,
                  page !== 2
                    ? { backgroundColor: 'transparent' }
                    : { backgroundColor: '#4285F4' },
                ]}
              />
              <Text style={{ color: 'black' }}>Classfieds Ads</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChange(2);
              }}
              style={styles.bottom}>
              <View
                style={[
                  styles.bar,
                  page !== 3
                    ? { backgroundColor: 'transparent' }
                    : { backgroundColor: '#4285F4' },
                ]}
              />
              <Text style={{ color: 'black' }}>Rating & Reviews</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChange(3);
              }}
              style={styles.bottom}>
              <View
                style={[
                  styles.bar,
                  page !== 4
                    ? { backgroundColor: 'transparent' }
                    : { backgroundColor: '#4285F4' },
                ]}
              />
              <Text style={{ color: 'black' }}>Write a Review</Text>
            </TouchableOpacity>
          </ScrollView>
          {/* lower details should go inside these view tags above*/}
        </View>
      </ScrollView>
      <StatusBar hidden={false} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: hp(25),
    marginBottom: 70,
  },
  listing: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  lowercontainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  spacing: {
    marginVertical: hp(0.8),
  },
  card: {
    paddingHorizontal: 10,
  },
  icon: {
    height: 25,
    width: 25,
  },
  bottom: {
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bar: {
    position: 'absolute',
    width: wp(10),
    height: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#4285F4',
  },
});
export default App;
