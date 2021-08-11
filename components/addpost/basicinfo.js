/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

//Toast Notifications
import Toast from 'react-native-toast-message';


//Styling imports
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import {} from '@react-navigation/drawer';


//Icon imports
import Icon from 'react-native-vector-icons/Ionicons';


import ImagePicker from 'react-native-image-crop-picker';

import { Picker } from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const [selected, setSelected] = useState({
    price_type: null,
    currency: null,
    ads_type: null,
    condition: null,
    warranty: null,
    title:null,
    price: null,
    tags: null,
    link: null,
    description:null,
    image:null,
  });
  const [modal, setModal] = useState(false);


  const _open_camera = () => {
    ImagePicker.openCamera({
        width: 200,
        height: 200,
        cropping: true,
      }).then(image => {
        setSelected({...selected,image:image.path});
      });
  };
  const _open_gallrey = () => {
    ImagePicker.openPicker({
        width: 200,
        height: 200,
        cropping: true,
      }).then(image => {
        setSelected({...selected,image:image.path});
        // console.log(image);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={{ flexGrow: 1, width: '100%', backgroundColor: null }}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: wp(3.5), paddingTop: hp(3) }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>Basic Info</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
          <View style={styles.spacing}>
            <Text style={[styles.spacing, styles.secondtitle]}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Title, character limit (50)"
              value={selected.title}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          title:text});
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>
                Price Type
              </Text>
              <View style={styles.input}>
              <Picker
                mode="dropdown"
                selectedValue={selected.price_type}
                onValueChange={(itemValue, itemIndex) =>
                  setSelected({
                    ...selected,
                    price_type:itemValue,
                  })
                }>
                <Picker.Item style={styles.item} label="Retail Price" value="retail" />
                <Picker.Item style={styles.item} label="Discounted Price" value="discount" />
                <Picker.Item style={styles.item} label="Sales Price" value="sale" />
                <Picker.Item style={styles.item} label="Promotional Price" value="promo" />

              </Picker>
              </View>
            </View>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>Price</Text>
              <TextInput style={[styles.input]} placeholder={null}
              value={selected.price}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          price:text});
              }}
              keyboardType="numeric"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>
                Select Currency
              </Text>
              <View style={styles.input}>
              <Picker
                mode="dropdown"
                selectedValue={selected.currency}
                onValueChange={(itemValue, itemIndex) =>
                  setSelected({
                    ...selected,
                    currency:itemValue,
                  })
                }>
                <Picker.Item style={styles.item} label="USD ($)" value="dollar" />
                <Picker.Item style={styles.item} label="PKR (R)" value="rupee" />
                <Picker.Item style={styles.item} label="GBP (£)" value="pound" />
              </Picker>
              </View>
            </View>
            <View style={{ width: '48%' }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={[styles.spacing, styles.secondtitle]}>Tags </Text>
              <Text style={{fontSize:12}}>Comma ( , ) seperated</Text>
              </View>
              <TextInput style={[styles.input]} placeholder={null}
              value={selected.tags}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          tags:text});
              }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>
                Type of Ads
              </Text>
              <View style={styles.input}>
              <Picker
                mode="dropdown"
                selectedValue={selected.ads_type}
                onValueChange={(itemValue, itemIndex) =>
                  setSelected({
                    ...selected,
                    ads_type:itemValue,
                  })
                }>
                <Picker.Item style={styles.item} label="Bidding Ad" value="bid" />
                <Picker.Item style={styles.item} label="Shop Ad" value="shop" />
              </Picker>
              </View>
            </View>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>Item Condition</Text>
              <View style={styles.input}>
              <Picker
                mode="dropdown"
                selectedValue={selected.condition}
                onValueChange={(itemValue, itemIndex) =>
                  setSelected({
                    ...selected,
                    condition:itemValue,
                  })
                }>
                <Picker.Item style={styles.item} label="New" value="new" />
                <Picker.Item style={styles.item} label="Used" value="old" />
                <Picker.Item style={styles.item} label="Refurbished" value="referb" />
              </Picker>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>
                Price Type
              </Text>
              <View style={styles.input}>
              <Picker
                mode="dropdown"
                selectedValue={selected.warranty}
                onValueChange={(itemValue, itemIndex) =>
                  setSelected({
                    ...selected,
                    warranty:itemValue,
                  })
                }>
                <Picker.Item style={styles.item} label="No Warranty" value="none" />
                <Picker.Item style={styles.item} label="Only Return Policy" value="7 days" />
                <Picker.Item style={styles.item} label="1 Year" value="1" />
                <Picker.Item style={styles.item} label="Company Warranty" value="company" />

              </Picker>
              </View>
            </View>
            <View style={{ width: '48%' }}>
              <Text style={[styles.spacing, styles.secondtitle]}>Youtube Links</Text>
              <TextInput style={[styles.input]} placeholder="www.youtube.com"
              value={selected.link}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          link:text});
              }}
              />
            </View>
          </View>
          <View style={{marginTop:hp(2.5)}}>
          <TouchableOpacity onPress={()=>{setModal(true);}} style={[selected.image == null ?
                 (styles.imagecontainer) :
                  (styles.imagecontainer1)]}>
            {selected.image == null ? (<View>
                    {/* if no image is selected yet, this will be shown */}
                    <View style={{marginVertical:hp(2),alignItems:'center'}}>
                    <Text style={{fontSize:16,color:'#000',marginBottom:5}}>Upload Image</Text>
                    <Text style={{fontSize:12,marginBottom:10}}>Upload only jpg,png max file size 7 mb</Text>
                    <Image source={require('../../assets/images/upload.png')}
                    style={{height:50,width:50}}
                    />
                    </View>
                    </View>) : (
                    <View style={{alignItems:'center',justifyContent:'flex-end'}}>
                        {/* after user selects an image, cropped image will be shown */}
                        <Image source={{uri : selected.image}} style={{height:hp(35),width:hp(35)}}
                        resizeMode="contain"
                        />
                        <View style={{
                            position:'absolute',
                            backgroundColor:'rgba(240,240,240,0.5)',
                            bottom:20,
                            alignItems:'center',
                            alignSelf:'flex-end',
                            width:'100%',
                            }}>
                        <Icon name="camera-sharp" size={25} color="black" />
                        </View>
                    </View>
                        )}
                </TouchableOpacity>
                </View>
                <Modal
                visible={modal}
                animationType="slide"
                transparent={true}
                onRequestClose={()=>setModal(false)}
                >
                  <TouchableWithoutFeedback onPress={()=>{setModal(false);}}>
                    <View style={{
                        flex:1,alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:'rgba(0,0,0,0.1)',
                        }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        backgroundColor:'white',
                        paddingHorizontal:wp(5),
                        height:hp(10),
                        width:wp(80),
                        borderRadius:5,
                        }}>
                    <Pressable
                    onPress={()=>{
                        _open_gallrey();
                        setModal(false);
                    }}>
                    <View style={styles.modalbtn}>
                        <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>Pick From Gallery</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={()=>{
                                        _open_camera();
                                        setModal(false);
                                        }}>
                    <View style={styles.modalbtn}>
                        <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>Open Camera</Text>
                    </View>
                    </Pressable>
                    </View>
                    </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <View style={styles.spacing}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={[styles.title,{fontSize:14}]}>Ad Description{'  '}</Text>
                    <Text style={{fontSize:10}}>Enter Description</Text>
                  </View>
                  <TextInput
                      style={[styles.input,{textAlignVertical:'top',height:120}]}
                      multiline
                      numberOfLines={5}
                      placeholder={sampleText}
                      value={selected.description}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          description:text});
              }}
            />
                </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: wp(4),
    color: 'black',
    fontWeight: 'bold',
  },
  secondtitle: {
    fontSize: wp(3.5),
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#fcfcfc',
    paddingHorizontal: 12,
    height:hp(5),
    justifyContent:'center',
    borderRadius:5,
  },
  spacing: {
    paddingVertical: hp(1),
  },
  item:{
    fontSize:12,
    color:'black',
  },
  imagecontainer:{
    backgroundColor:'#f8f8f8',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#ededed',
    borderRadius:5,
},
imagecontainer1:{
  height:200,
  width:200,
  borderRadius:500,
  overflow:'hidden',
  alignSelf:'center',

},
modalbtn:{
    height:hp(5),
    width:wp(32),
    backgroundColor:'#089cfc',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:3,
    elevation:5,
    borderRadius:5,

  },
});

export default App;
