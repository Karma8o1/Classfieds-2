/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
// import { Switch } from 'react-native-switch';
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

import PagerView from 'react-native-pager-view';

import Bids from '../components/bids';
import BidStats from '../components/bidsstats';

const App = ({navigation}) => {
  //    for view pager
  const pageRef = useRef(null);
  const [page, setPage] = useState(1);

  const handleChange = pageNum => {
    pageRef.current.setPage(pageNum);
    setPage(pageNum + 1);
  };

  const [color, setColor] = useState({
    all: '#0099ff',
    stats: '#fff',
    alltext: '#fff',
    statstext: '#000',
  });

  // sample data for testing
  const [data, setData] = useState([
    {
      name: 'Alex John Doe',
      bid: '56.00',
      image:
        'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
      id: 0,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
    },
    {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 2,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
        + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
        + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 3,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 4,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 5,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 6,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 7,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 8,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 9,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
      {
        name: 'Alex John Doe',
        bid: '56.00',
        image:
          'https://drive.google.com/uc?export=download&id=1e55vwncLLReLhaTa-SYwSz9Wd5mdQbHZ',
        id: 10,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    + ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'Feb 12, 2020',
      },
  ]);
  const setPages = position => {
    if (position === 1 ){
      setColor({
        all: '#0099ff',
        stats: '#fff',
        alltext: '#fff',
        statstext: '#000',
      });
    }
    else if (position === 2){
      setColor({
        all: '#fff',
        stats: '#0099ff',
        alltext: '#000',
        statstext: '#fff',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="arrow-back-sharp" size={22} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', marginLeft: wp(2) }}>All Bids</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#F0F8FF', width: '100%' }}>
            <View
              style={{
                height: hp(10),
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '75%',
                  height: hp(6),
                  borderRadius: 50,
                  backgroundColor: color.all,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setColor({
                      all: '#0099ff',
                      stats: '#fff',
                      alltext: '#fff',
                      statstext: '#000',
                    });
                    handleChange(0);
                  }}
                  style={{ paddingHorizontal: wp(5) }}>
                  <Text style={[styles.toggletext, { color: color.alltext }]}>
                    All Bids
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setColor({
                      all: '#fff',
                      stats: '#0099ff',
                      alltext: '#000',
                      statstext: '#fff',
                    });
                    handleChange(1);
                  }}
                  style={{
                    height: hp(6),
                    width:'55%',
                    alignItems:'center',
                    justifyContent: 'center',
                    paddingHorizontal: wp(5),
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#f8f8f8',
                    backgroundColor: color.stats,
                  }}>
                  <Text style={styles.toggletext}>Bids Statistics</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, paddingTop: hp(2) }}>
            <PagerView
              initialPage={0}
              ref={pageRef}
              transitionStyle="curl"
              onPageSelected={e => {
                setPages(e.nativeEvent.position + 1);
              }}
              scrollEnabled={true}
              style={{
                flex: 1,
                height: hp(100),
                width: '100%',
                backgroundColor: 'white',
              }}>
              <View key="0">
                <Bids data={data} />
              </View>

              <View key="1">
              <BidStats data={data} />
              </View>
            </PagerView>
          </View>
        </View>
        <StatusBar hidden={false} translucent={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacing: {
    marginVertical: hp(1),
  },
  pagerstyle: {
    flex: 1,
    height: hp(70),
    width: '100%',
    backgroundColor: 'white',
  },
  toggletext: {
    fontSize: hp(1.75),
    fontWeight: 'bold',
    color: 'black',
  },
});
export default App;
