/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Header, SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  //hooks constants
  const [search, setSearch] = useState();

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#051D4D',
      }}>
      <Animated.View
        style={
          // eslint-disable-next-line no-sequences
          (styles.container,
          {
            flex: 1,
            backgroundColor: 'white',
          })
        }>
        <View>
          <View style={{ position: 'absolute', top: 0 }}>
            <Header
              containerStyle={{
                backgroundColor: '#011642',
                borderBottomWidth: 0,
                alignItems: 'flex-start',
                height: 150,
              }}
              leftComponent={
                <TouchableOpacity
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}>
                  <Icon name="menu-open" size={35} style={{ color: 'white' }} />
                </TouchableOpacity>
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="filter" size={30} style={{ color: '#828EA6' }} />
                  <Text style={{ color: 'white' }}>Filter</Text>
                </View>
              }
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: hp('12'),
              backgroundColor: 'white',
              width: wp('100'),
              padding: wp('5'),
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#3578FA',
                        padding: hp('1.2'),
                        borderRadius: 10,
                      }}>
                      <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                        View all
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Animated.View>
      <StatusBar animated={true} backgroundColor="#011642" />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
