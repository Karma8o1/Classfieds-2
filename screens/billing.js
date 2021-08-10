/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';


//Toast Notifications
import Toast from 'react-native-toast-message';

const App = ({ navigation, route }) => {
  const [data, setData] = useState(route.params);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1, width: '100%' }}>
        <View>
          <View
            style={{
              flex: 1,
              height: hp(6),
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#000',
              paddingHorizontal: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Icon
                  name="arrow-back-sharp"
                  size={25}
                  color="white"
                  style={{
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 14, color: 'white' }}>
                Billing Address
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 0 }}>
            {data != null ? (
              data.map(data => {
                return (
                  <View style={[styles.cards,{justifyContent:'space-between'}]}>
                    <View style={[styles.cards,{borderColor:'transparent'}]}>
                      <View style={styles.slide1}>
                        <Image
                          style={{ height: hp(5), width: hp(5) }}
                          source={{ uri: data.image }}
                          resizeMode="cover"
                        />
                      </View>
                      <View>
                        <Text style={styles.heading}>{data.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.price}>${data.price}</Text>
                          <Text>/Per Piece</Text>
                        </View>
                      </View>
                    </View>
                    <Text style={{paddingRight:wp(5)}}>Amount : {data.amount}</Text>
                  </View>
                );
              })
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
          <View style={{flex:1,paddingHorizontal:wp(5),paddingTop:hp(2)}}>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.heading}>Billing Information</Text>
              <Text style={{color:'red'}}>*</Text>
              </View>
                <View style={styles.spacing}>
                    <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        First Name
                    </Text>
                    <TextInput style={styles.inputs} placeholder='Enter Your First Name'/>
                    <View style={{flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    width:'100%',
                    }}>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        Last Name
                    </Text>
                    <TextInput style={[styles.inputs]} placeholder='Enter Your Last Name'/>
                        </View>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        Email Address
                    </Text>
                    <TextInput style={[styles.inputs]} placeholder='Enter Your Email Address'/>
                        </View>
                    </View>
                    <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        Phone Number
                    </Text>
                    <TextInput style={styles.inputs} placeholder='Enter Your Phone Number'/>
                </View>
          </View>
          <View style={{flex:1,paddingHorizontal:wp(5),paddingTop:hp(2)}}>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.heading}>Payment Method</Text>
              <Text style={{color:'red'}}>*</Text>
              </View>
                <View style={styles.spacing}>
                    <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        PayPal Name
                    </Text>
                    <TextInput style={styles.inputs} placeholder='Enter Your PayPal Name'/>
                    <View style={{flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    width:'100%',
                    }}>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        PayPal Email
                    </Text>
                    <TextInput style={[styles.inputs]} placeholder='Enter Your PayPal Email'/>
                        </View>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        Phone Number
                    </Text>
                    <TextInput style={[styles.inputs]} placeholder='Enter Your Phone Number'/>
                        </View>
                    </View>
                    <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        Coupon Code
                    </Text>
                    <TextInput style={styles.inputs} placeholder='Enter Coupon Code'/>
                </View>
          </View>
          <View style={{flex:1,paddingHorizontal:wp(5),paddingTop:hp(-1)}}>
                <View>
                    <View style={{flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    width:'100%',
                    }}>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        Card Number
                    </Text>
                    <TextInput style={[styles.inputs]} placeholder='0000 0000 0000 0000'/>
                        </View>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:13}]}>
                        Cardholder Name
                    </Text>
                    <TextInput style={[styles.inputs]} placeholder='Card Holder Name'/>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    width:'100%',
                    }}>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:12}]}>
                        Expiry Month
                    </Text>
                    <TextInput style={[styles.inputs,{fontSize:10,width:wp(27)}]} placeholder='MM'/>
                        </View>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:12}]}>
                        Expiry Year
                    </Text>
                    <TextInput style={[styles.inputs,{fontSize:10,width:wp(27)}]} placeholder='YYYY'/>
                        </View>
                        <View>
                        <Text style={[styles.spacing,styles.heading,{fontSize:12}]}>
                        CVC
                    </Text>
                    <TextInput style={[styles.inputs,{fontSize:10,width:wp(27)}]} placeholder='***'/>
                        </View>
                    </View>
                </View>
          </View>
          <View style={{
          marginTop:hp(5),
          paddingHorizontal:wp(7),
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          backgroundColor:'#fbfdff',
          borderWidth:1,
          borderColor:'#d3d3d3',
          }}>
          <Text style={{
            fontSize:18,
            color:'black',
            fontWeight:'bold',
            paddingVertical:10,
            }}>Cart Total</Text>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:15}}>
            <Text>Sub Total</Text>
            <Text style={{color:'black'}}>
              ${data != null ?
            data.reduce((accumulator, current) => accumulator + current.price * current.amount, 0)
             : ('0')}.00
             </Text>
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:15}}>
            <Text>Shipping Charges</Text>
            <Text style={{color:'black'}}>$ 15.00</Text>
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:15}}>
            <Text>Total Discount</Text>
            <Text style={{color:'black'}}>$ 11.00</Text>
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:15}}>

            <Text style={{color:'red',fontWeight:'bold'}}>Total Order</Text>

            <Text style={{color:'#049cff',fontWeight:'bold'}}>
            ${data != null ?
            (data.reduce((accumulator, current) => accumulator + current.price * current.amount, 0) + 15 - 11)
             : ('0')}.00
              </Text>

          </View>

          <TouchableOpacity
          onPress={()=>{_processOrder();}}
          style={{alignItems:'center',width:'100%'}}
          >
          <View style={{
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          height:hp(5),
          backgroundColor:'#0099ff',
          borderRadius:5,
          marginBottom:10,
          }}>
            <Text style={{color:'white',fontWeight:'bold'}}>Billing Address</Text>
          </View>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(4),
    backgroundColor:'white',
  },
  slide1: {
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    backgroundColor: '#eef3f6',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: wp(5),
    borderRadius: 5,
  },
  cards: {
    flexDirection: 'row',
    borderBottomWidth:1,
    borderColor:'#ededed',
    paddingVertical: 10,
    backgroundColor: '#fbfdff',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    color: '#049cff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputs:{
    backgroundColor:'#fafafa',
    borderWidth:1,
    borderColor:'#ededed',
    borderRadius:5,
    paddingLeft:15,
    height:hp(5),
    fontSize:12,
},
spacing:{
    marginVertical:hp(1),
},
});

export default App;
