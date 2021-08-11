/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
  RefreshControl,
} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import {} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Header } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

//Icon imports
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';

//Toast Notifications
import Toast from 'react-native-toast-message';

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

  //Refresh indicator
  const [refreshing, setRefreshing] = React.useState(false);

  //sample data
  const [data, setData] = useState([
    { name: 'Building Toys', iconname: 'house-siding', id: 1 },
    { name: 'Animals & Pets', iconname: 'goat', id: 2 },
    { name: 'Real Estate', iconname: 'house', id: 3 },
    { name: 'Building Toys', iconname: 'house-siding', id: 4 },
    { name: 'Animals & Pets', iconname: 'pets', id: 5 },
    { name: 'Real Estate', iconname: 'house', id: 6 },
  ]);
  //hooks constants
  const [search, setSearch] = useState();

  var img = [
    'https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__480.jpg',
    'https://wallpaperaccess.com/full/4142805.jpg',
    'https://image.freepik.com/free-photo/beautiful-scenery-sunset-reflecting-sea-breathtaking-colorful-clouds_181624-10481.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedkTUforyTnLIk5un0L9JEKifsKfQIyRgjg&usqp=CAU',
  ];

  //data for featured cars
  //directly fetched from server using axios
  const [cards, setCards] = useState(null);

  const check = () => {
    axios({
      url: 'https://my-json-server.typicode.com/Karma8o1/video/db',
    })
      .then(response => setCards(response.data.details))
      .catch(error => {
        setCards(null);
        alerts('Error', error.toString(), 'error');
      });
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#051D4D',
      }}>
      <View
        style={
          (styles.container,
          {
            height: '100%',
          })
        }>
        <View>
          <Header
            containerStyle={{
              backgroundColor: '#011642',
              borderBottomWidth: 0,
              alignItems: 'flex-start',
              height: 100,
            }}
            leftComponent={
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <View
                  style={{
                    paddingRight: wp('5'),
                    paddingLeft: wp('2'),
                  }}>
                  <Icon
                    name="currency-eth"
                    size={35}
                    style={{ color: '#fff' }}
                  />
                </View>
              </TouchableNativeFeedback>
            }
            centerComponent={
              <Searchbar
                placeholder="Search Products"
                onChangeText={text => {
                  setSearch(text);
                }}
                value={search}
                style={{
                  height: 35,
                  backgroundColor: '#40609F',
                  color: 'white',
                }}
                inputStyle={{
                  fontSize: 10,
                  backgroundColor: '#40609F',
                  color: '#fff',
                }}
                iconColor="#fff"
                placeholderTextColor="#fff"
              />
            }
            rightComponent={
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('filters');
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="filter" size={30} style={{ color: '#828EA6' }} />
                  <Text style={{ color: 'white' }}>Filter</Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
        <View
          style={{
            flex: 1,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            backgroundColor: 'white',
            overflow: 'hidden',
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              marginTop: hp(0),
              backgroundColor: 'white',
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  check();
                }}
              />
            }>
            <>
              <View style={{ marginTop: hp(2) }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: wp(2.5),
                    }}>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        All Categories
                      </Text>
                      <Text>Sample Text. Must be replaced</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('categories');
                      }}>
                      <View
                        style={{
                          backgroundColor: '#3578FA',
                          padding: hp('1.2'),
                          borderRadius: 5,
                        }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                          View all
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    // keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <View style={{ overflow: 'hidden' }}>
                        <TouchableNativeFeedback
                          background={TouchableNativeFeedback.Ripple(
                            '#d1e2ed',
                            false,
                          )}
                          useForeground={true}>
                          <View
                            style={{
                              backgroundColor: '#fff',
                              height: hp('10'),
                              width: wp('28'),
                              margin: hp('1'),
                              padding: wp('2'),
                              borderRadius: 5,
                              alignItems: 'center',
                              justifyContent: 'center',
                              elevation: 10,
                            }}>
                            <Icons
                              name={item.iconname}
                              size={30}
                              style={{
                                color: 'black',
                                marginBottom: wp('1'),
                              }}
                            />
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 12,
                                fontWeight: 'bold',
                              }}>
                              {item.name}
                            </Text>
                          </View>
                        </TouchableNativeFeedback>
                      </View>
                    )}
                  />
                  <View
                    style={{
                      width: '95%',
                      alignSelf: 'center',
                      marginTop: hp(1.5),
                    }}>
                    <Swiper
                      style={styles.wrapper}
                      loop={false}
                      key={img.length}
                      loadMinimalLoader={
                        <ActivityIndicator
                          animating={true}
                          color={Colors.red800}
                        />
                      }
                      dot={
                        <View
                          style={{
                            backgroundColor: 'white',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 0,
                            marginBottom: hp(2),
                          }}
                        />
                      }
                      activeDot={
                        <View
                          style={{
                            backgroundColor: '#1D50EF',
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 0,
                            marginBottom: hp(2),
                          }}
                        />
                      }>
                      {img.map(images => {
                        return (
                          <View key={images.position} style={styles.slide1}>
                            <Image
                              style={{
                                height: hp(25),
                                width: '100%',
                                borderRadius: 5,
                              }}
                              source={{ uri: images }}
                              resizeMode="cover"
                            />
                          </View>
                        );
                      })}
                    </Swiper>
                  </View>
                </View>
                <View style={{ marginTop: hp('2') }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: wp(2.5),
                    }}>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        Featured Products
                      </Text>
                      <Text>Sample Text. Must be replaced</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('Show all featured products');
                      }}>
                      <View
                        style={{
                          backgroundColor: '#3578FA',
                          padding: hp('1.2'),
                          borderRadius: 5,
                        }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                          View all
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {cards === null ? (
                    <View
                      style={{
                        height: '30%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <ActivityIndicator
                        animating={true}
                        color={Colors.red800}
                      />
                    </View>
                  ) : (
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id}
                      style={{
                        flex: 1,
                        marginTop: hp(2),
                        paddingLeft: wp(2),
                        paddingRight: 20,
                      }}
                      data={cards}
                      renderItem={({ item }) => (
                        <>
                          <TouchableNativeFeedback
                            style={{ borderRadius: 5 }}
                            onPress={() => {
                              navigation.navigate('Details', item);
                            }}>
                            <View
                              style={{
                                width: wp(45),
                                overflow: 'hidden',
                                marginRight: wp(3),
                                elevation: 5,
                                backgroundColor: '#fff',
                                marginVertical: hp(2),
                                borderBottomRightRadius: 5,
                                borderBottomLeftRadius: 5,
                              }}>
                              {/* to be replaced by a single image asset for deployment */}
                              <View>
                                <Icon
                                  name="bookmark"
                                  size={30}
                                  style={{
                                    borderRadius: 0,
                                    position: 'absolute',
                                    right: 10,
                                    top: -3,
                                    elevation: 1,
                                    borderColor: 'transparent',
                                    backgroundColor: 'transparent',
                                    color: 'red',
                                  }}
                                />
                                <Icon
                                  name="star"
                                  size={15}
                                  style={{
                                    borderRadius: 0,
                                    position: 'absolute',
                                    right: wp('4.45'),
                                    top: 3,
                                    elevation: 1,
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                  }}
                                />
                                <Image
                                  source={{ uri: item.image[0] }}
                                  style={{
                                    height: 180,
                                    width: wp(45),
                                    borderTopRightRadius: 5,
                                    borderTopLeftRadius: 5,
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>
                              <View style={{ paddingLeft: wp('1') }}>
                                <View style={{ flexDirection: 'row' }}>
                                  <Text style={{ fontSize: 10 }}>
                                    Vehicles |
                                  </Text>
                                  <Text style={{ fontSize: 10 }}> Cars |</Text>
                                  <Text style={{ fontSize: 10 }}> Ferrari</Text>
                                </View>
                                <View>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: 'bold',
                                      color: 'black',
                                    }}>
                                    {item.name.substring(0, 20)}...
                                  </Text>
                                </View>

                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}>
                                  <Text
                                    style={{
                                      color: 'blue',
                                      fontWeight: 'bold',
                                      fontSize: 14,
                                      marginRight: 10,
                                    }}>
                                    {' '}
                                    $ {item.price}
                                  </Text>
                                  <Text>(fixed)</Text>
                                </View>
                                <View
                                  style={{
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                  }}>
                                  <Image
                                    source={{
                                      uri: 'https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png',
                                    }}
                                    style={{ height: 20, width: 20 }}
                                  />
                                  <Text>{item.location}</Text>
                                </View>
                                <View
                                  style={{
                                    alignItems: 'center',
                                    marginVertical: hp(1),
                                    flexDirection: 'row',
                                  }}>
                                  <TouchableOpacity style={{ elevation: 5 }}>
                                    <View
                                      style={{
                                        backgroundColor: '#aaa',
                                        padding: wp(1),
                                        marginHorizontal: wp(1),
                                        borderRadius: 10,
                                        marginRight: 15,
                                      }}>
                                      <Icon
                                        name="heart"
                                        size={20}
                                        style={{ color: 'white' }}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingHorizontal: wp(2),
                                        height: 30,
                                        backgroundColor: '#3578FA',
                                        borderRadius: 5,
                                        elevation: 5,
                                      }}>
                                      <Icons
                                        name="call"
                                        size={20}
                                        style={{
                                          color: 'white',
                                          marginRight: 10,
                                        }}
                                      />
                                      <Text
                                        style={{
                                          fontSize: 12,
                                          color: 'white',
                                          fontWeight: 'bold',
                                        }}>
                                        Call Now
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </TouchableNativeFeedback>
                        </>
                      )}
                    />
                  )}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: wp(2.5),
                    }}>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        Shop Products
                      </Text>
                      <Text>Sample Text. Must be replaced</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('Show all products');
                      }}>
                      <View
                        style={{
                          backgroundColor: '#3578FA',
                          padding: hp('1.2'),
                          borderRadius: 5,
                        }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                          View all
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {cards === null ? (
                    <View
                      style={{
                        height: '30%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <ActivityIndicator
                        animating={true}
                        color={Colors.red800}
                      />
                    </View>
                  ) : (
                    <FlatList
                      horizontal
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
                      style={{
                        flex: 1,
                        marginTop: hp(2),
                        paddingRight: wp(2),
                      }}
                      data={cards}
                      renderItem={({ item }) => (
                        <TouchableNativeFeedback
                          onPress={() => {
                            navigation.navigate('Details', item);
                          }}>
                          <View
                            style={{
                              flex: 1,
                              width: wp(45),
                              marginHorizontal: wp(1.2),
                              elevation: 5,
                              backgroundColor: '#fff',
                              marginVertical: hp(2),
                              marginRight: wp(2),
                              borderBottomRightRadius: 5,
                              borderBottomLeftRadius: 5,
                              overflow: 'hidden',
                            }}>
                            {/* to be replaced by a single image asset for p */}
                            <View>
                              <Image
                                source={{ uri: item.image[0] }}
                                style={{
                                  height: 180,
                                  width: wp(45),
                                  borderTopRightRadius: 5,
                                  borderTopLeftRadius: 5,
                                }}
                                resizeMode={'cover'}
                              />
                            </View>
                            <View style={{ paddingLeft: wp('1') }}>
                              <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 10 }}>Vehicles |</Text>
                                <Text style={{ fontSize: 10 }}> Cars |</Text>
                                <Text style={{ fontSize: 10 }}> Ferrari</Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: 'black',
                                  }}>
                                  {item.name.substring(0, 20)}...
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{
                                    color: 'blue',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    marginRight: 10,
                                  }}>
                                  {' '}
                                  $ {item.price}
                                </Text>
                                <Text>(fixed)</Text>
                              </View>
                              <View
                                style={{
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                }}>
                                <Image
                                  source={{
                                    uri: 'https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png',
                                  }}
                                  style={{ height: 20, width: 20 }}
                                />
                                <Text>{item.location}</Text>
                              </View>
                              <View
                                style={{
                                  alignItems: 'center',
                                  marginVertical: hp(1),
                                  flexDirection: 'row',
                                }}>
                                <TouchableOpacity style={{ elevation: 5 }}>
                                  <View
                                    style={{
                                      backgroundColor: '#aaa',
                                      padding: wp(1),
                                      marginHorizontal: wp(1),
                                      borderRadius: 10,
                                      marginRight: 15,
                                    }}>
                                    <Icon
                                      name="heart"
                                      size={20}
                                      style={{ color: 'white' }}
                                    />
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={{ paddingHorizontal: wp(0.5) }}>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: 30,
                                      backgroundColor: '#3578FA',
                                      borderRadius: 5,
                                      elevation: 5,
                                      paddingHorizontal: wp(2),
                                    }}>
                                    <Icons
                                      name="call"
                                      size={20}
                                      style={{
                                        color: 'white',
                                        marginRight: 10,
                                      }}
                                    />
                                    <Text
                                      style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                      }}>
                                      Call Now
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </TouchableNativeFeedback>
                      )}
                    />
                  )}
                </View>
              </View>
            </>
          </ScrollView>
        </View>
        <View
        style={{
          width:'100%',
          height:hp(7),
          backgroundColor:'#fff',
          borderColor:'#d3d3d3',
          borderTopWidth:1,
          elevation:5,
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          paddingHorizontal:wp(3),
      }}>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Icons name="home" size={30} />
          <Text style={{color:'black',fontSize:10}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress = {()=>{navigation.navigate('Advance Search');}}
        style={{alignItems:'center'}}>
          <Icons name="search" size={30} />
          <Text style={{color:'black',fontSize:10}}>Search</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Post Ads');}}
          style={{
            position:'absolute',
            top:hp(-6),
            alignItems:'center',
            justifyContent:'center',
            paddingVertical:hp(2),
            paddingHorizontal:hp(2),
            backgroundColor:'#0077f9',
            borderRadius:50,
            borderWidth:2,
            borderStyle:'dashed',
            borderColor:'#d3d3d3',
            }}>
            <Icon name="plus" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress = {()=>{navigation.navigate('Profile');}}
        style={{alignItems:'center'}}>
          <Icons name="person" size={30} />
          <Text style={{color:'black',fontSize:10}}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Icons name="settings" size={30} />
          <Text style={{color:'black',fontSize:10}}>Settings</Text>
        </TouchableOpacity>
        </View>
      </View>
      <StatusBar animated={true} backgroundColor="#011642" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: wp('100') - 60,
    height: wp('60'),
  },
  imageContainer: {
    flex: 1,
    marginTop: hp('2'),
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  wrapper: {
    height: 200,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
