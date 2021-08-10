/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState} from 'react';
import filter from 'lodash.filter';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Searchbar } from 'react-native-paper';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';

import SearchInput, { createFilter } from 'react-native-search-filter';

const App = ({ navigation }) => {

  const [data, setData] = useState([
    { name: 'Building Toys', iconname: 'house-siding', id: 1 },
    { name: 'Animals & Pets', iconname: 'goat', id: 2 },
    { name: 'Real Estate', iconname: 'house', id: 3 },
    { name: 'Building Toys', iconname: 'house-siding', id: 4 },
    { name: 'Animals & Pets', iconname: 'pets', id: 5 },
    { name: 'Real Estate', iconname: 'house', id: 6 },
    { name: 'Building Toys', iconname: 'house-siding', id: 7 },
    { name: 'Animals & Pets', iconname: 'goat', id: 8 },
    { name: 'Real Estate', iconname: 'house', id: 9 },
    { name: 'Building Toys', iconname: 'house-siding', id: 10 },
  ]);

  //hook constants
  const [search, setSearch] = useState();
  const [searchedData, setSearchedData] = useState(data);

  const KEYS_TO_FILTERS = ['name'];


  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(data, user => {
      return contains(user, formattedQuery);
    });
    setSearchedData(filteredData);
    setSearch(text);
  };

  const contains = ({ name }, query) => {


    if (
      name.includes(query)
    ) {
      return true;
    }

    return false;
  };

  const searchUpdated = (term) => {
    setSearch(term);
  };
//   const filteredEmails = data.filter(
//   createFilter(search, KEYS_TO_FILTERS),
// );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: hp('7'),
                backgroundColor: 'black',
                paddingHorizontal: wp('5'),
                paddingVertical: hp('1'),
              }}>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.pop();
                }}>
                <Icon
                  name="arrow-left"
                  size={25}
                  style={{ color: 'white', marginHorizontal: wp(2) }}
                />
              </TouchableNativeFeedback>
              <Text style={{ color: 'white', fontSize: 16 }}>
                Select Your Category
              </Text>
            </View>

            <View style={{ marginVertical: hp(2), marginHorizontal: wp('5') }}>
              {/* <Searchbar
                placeholder="Search Products"
                onChangeText={text => {
                  setSearch(text);
                  handleSearch(text);
                }}
                value={search}
                style={{
                  height: hp('5'),
                  backgroundColor: '#fff',
                  color: 'white',
                }}
                inputStyle={{
                  fontSize: 14,
                  backgroundColor: '#fff',
                  color: '#000',
                }}
                iconColor="#000"
                placeholderTextColor="#ededed"
              /> */}
              <SearchInput
                onChangeText={term => {
                  searchUpdated(term);
                }}
                style={styles.searchInput}
                placeholder="Type a message to search"
              />
            </View>
          </>
        }
        data={searchedData}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              borderTopWidth: 1,
              borderColor: '#ddd',
              paddingVertical: hp('2'),
              paddingHorizontal: wp(5),
            }}>
            <View style={{ height: 35, width: 35, marginRight: wp(2.5) }}>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.pop();
                }}>
                <Icons name={item.iconname} size={35} />
              </TouchableNativeFeedback>
            </View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <StatusBar animated={true} hidden={true} backgroundColor="#000" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
export default App;
