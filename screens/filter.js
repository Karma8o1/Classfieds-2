/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback, useEffect } from 'react';
import { Checkbox } from 'react-native-paper';
import filter from 'lodash.filter';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
//DropDown menu import
import DropDownPicker from 'react-native-dropdown-picker';


import Slider from 'rn-range-slider';

import Thumb from '../components/Slider/Thumb';
import Rail from '../components/Slider/Rail';
import RailSelected from '../components/Slider/RailSelected';
import Notch from '../components/Slider/Notch';
import Label from '../components/Slider/Label';
// import TextButton from '../components/TextButton';

const App = ({ navigation }) => {

//garbage state
  const [state,setState] = useState(0);

//Search Keyword storage
  const [keyword, setKeyword] = useState(null);


  //attributes of drop down picker
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: '1K - 10K', value: '1K - 10K' },
    { label: '10K - 20K', value: '10K - 20K' },
    { label: '20K - 30K', value: '20K - 30K' },
    { label: '30K - 50K', value: '30K - 50K' },
    { label: '50K - 100K', value: '50K - 100K' },
    { label: '100K - 200K', value: '100K - 200K' },
  ]);

  const [attribs, setAttribs] = useState({
    open:false,
    value:null,
  });
  const [open2,setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label:'Price',value:'price'},
    {label:'Color',value:'color'},
    {label:'Location',value:'location'},
    {label:'On Promotion',value:'promotions'},
    {label:'On Sale',value:'sale'},
  ]);
  //attributes for range picker
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(1000);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  // eslint-disable-next-line no-shadow
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

//checkbox data and functionality
  const [data, setData] = useState([
    { name: '24 hours security', checked: false, id: 1 },
    { name: 'Air Conditioning', checked: false, id: 2 },
    { name: 'Balcony', checked: false, id: 3 },
    { name: 'Control Heating', checked: false, id: 4 },
    { name: 'Fire Alarm', checked: false, id: 5 },
    { name: 'Gym', checked: false, id: 6 },
    { name: 'Home Theater', checked: false, id: 7 },
    { name: 'Lounge', checked: true, id: 8 },
    { name: 'Park', checked: false, id: 9 },
  ]);
//checkbox 
  const checkThisBox = itemID => {
    data[itemID - 1].checked = !data[itemID - 1].checked;
    setState(state + 1);
    console.log(data[itemID]);
  };

  useEffect(()=>{
    console.log('rendered');
  },[data]);

  return (
    <ScrollView
      style={{ flex: 1, height: '100%', backgroundColor: 'white' }}
      nestedScrollEnabled={true}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'black',
          width: '100%',
          height: hp('6'),
          top: 0,
        }}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.pop();
          }}>
          <Icon
            name="arrow-left"
            size={30}
            style={{ color: 'white', marginHorizontal: wp(2) }}
          />
        </TouchableNativeFeedback>
        <Text style={{ color: 'white', fontSize: 18 }}>Search By Filter</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: 'transparent',
            marginTop: hp(1),
          }}>
          <View style={styles.cards}>
            <View
              style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                marginTop: hp('3'),
              }}>
              <Icons
                name="search1"
                size={20}
                style={{ marginRight: wp('2') }}
              />
              <Text>Search by Keyword</Text>
            </View>
            <View
              style={{
                width: '100%',
                marginVertical: hp('2'),
                alignItems: 'flex-start',
              }}>
              <Searchbar
                placeholder="Search Products"
                onChangeText={text => {
                  setKeyword(text);
                }}
                value={keyword}
                style={{
                  height: 40,
                  width: '100%',
                  backgroundColor: '#fff',
                  color: '#000',
                  elevation: 5,
                  alignSelf: 'flex-start',
                }}
                inputStyle={{
                  fontSize: 14,
                  backgroundColor: '#fff',
                  color: '#000',
                }}
                iconColor="#000"
                placeholderTextColor="#ddd"
              />
            </View>
          </View>
          <View style={styles.cards}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: hp('1'),
                }}>
                <Icons name="tags" size={25} style={{ marginRight: wp('2') }} />
                <Text>Price Range</Text>
              </View>
              <View>
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  showsVerticalScrollIndicator={false}
                  open={open1}
                  value={value1}
                  items={items1}
                  setOpen={setOpen1}
                  setValue={value => setValue1(value)}
                  setItems={setItems1}
                  placeholder="Select Price"
                  style={{
                    borderColor: '#ededed',
                    borderWidth: 1,
                    alignItems: 'center',
                    width: 150,
                  }}
                  dropDownContainerStyle={{
                    height: 150,
                    showsVerticalScrollIndicator: false,
                    borderWidth: 1,
                    borderColor: '#ededed',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                marginVertical: hp('2'),
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Minimum"
                keyboardType="numeric"
                style={styles.input}
                value={low.toString()}
                onChangeText={text => {
                  setLow(text);
                }}
              />
              <View
                style={{ height: 5, width: 10, backgroundColor: '#ededed' }}
              />
              <TextInput
                placeholder="Maximum"
                keyboardType="numeric"
                style={styles.input}
                value={high.toString()}
                onChangeText={text => {
                  setHigh(text);
                }}
              />
            </View>
            <View style={{ width: '100%', height: hp('10') }}>
              <Slider
                style={styles.slider}
                min={min}
                max={max}
                low={low}
                high={high}
                step={1}
                floatingLabel={true}
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                onValueChanged={handleValueChange}
              />
            </View>
          </View>
          <View style={[styles.cards,{elevation:3}]}>
            <View
              style={{
                marginTop: hp('1'),
                flexDirection: 'row',
                marginBottom: hp(2),
              }}>
              <Icons
                name="dribbble"
                size={25}
                style={{ marginRight: wp('2') }}
              />
              <Text>Filter By Attributes</Text>
            </View>
              <DropDownPicker
                mode="BADGE"
                showBadgeDot={true}
                listMode="SCROLLVIEW"
                dropDownDirection="BOTTOM"
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={values => setValue2(values)}
                setItems={setItems2}
                placeholder="Any Color"
                placeholderTextColor="gray"
                style={{
                  borderWidth: 1,
                  borderColor: '#ddd',
                  alignItems: 'center',
                }}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#ededed',
                  zIndex: 10,
                }}
              />
          </View>
          <View style={[styles.cards]}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="feature-search" size={25} />
              <Text>Filter By Features</Text>
            </View>
            <View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  style={{ flex: 1 }}
                  numColumns={3}
                  data={data}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: wp('2.5'),
                        width: '35%',
                      }}>
                      <Checkbox
                        status={item.checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                          checkThisBox(item.id);
                        }}
                      />
                      <Text>{item.name}</Text>
                    </View>
                  )}
                />
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: hp(2),
                height: 40,
                width: '85%',
                backgroundColor: '#2596be',
                borderRadius: 5,
              }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>
                Search Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <StatusBar animated={true} hidden={true} backgroundColor="#011642" />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ededed',
    width: '45%',
    paddingLeft: wp('2'),
    backgroundColor: '#FFFAFA',
  },
  cards: {
    flex:1,
    width: '96%',
    alignSelf: 'center',
    padding: '2.5%',
    marginTop: hp('1'),
    marginBottom:hp('1'),
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    shadowColor:'#777',
    borderWidth:1,
    borderColor:'#ededed',
  },
});
export default App;
