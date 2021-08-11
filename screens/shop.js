/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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

import { Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import { SwipeListView } from 'react-native-swipe-list-view';


//Toast Notifications
import Toast from 'react-native-toast-message';





const App = ({ navigation }) => {


  //sample data for swiper list
  const [data, setData] = useState([
    {name:'Best Beats Solo 3 ', price:'500',amount:1,checked:false,
    image:'https://drive.google.com/uc?export=download&id=1q3h-5u17FZ8jQbUYImcVAPq7yKvjnGE2',
    id:1},
    {name:'Best Beats Solo 3 ', price:'500',amount:1,checked:false,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdIDm4LpPrykCegcd5v-5ReI0rTZ3f_J1Vg&usqp=CAU',
    id:2},
    {name:'Best Beats Solo 3 ', price:'500',amount:1,checked:false,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMkRg8z-useXQ05MMXujMTBXW1x1O2tK1iQ&usqp=CAU',
    id:3},
    {name:'Best Beats Solo 3 ', price:'500',amount:1,checked:false,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXsfg_rRJW1-_fCynaFlMSLuGv1O70mfw8g&usqp=CAU',
    id:4},
    {name:'Best Beats Solo 3 ', price:'500',amount:1,checked:false,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEXM2BvTm3wAx4fQluLndY8Mf46MdGacxKjjfOAG2N1xoIJHyt6A74eOxaCDhzw3evz0&usqp=CAU',
    id:5},
    {name:'Best Beats Solo 3 ', price:'500',amount:1,checked:false,
    image:'https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-19.png',
    id:6},
  ]);

  const [state,setState] = useState(0);

  const _check = itemID => {
    data[itemID - 1].checked = !data[itemID - 1].checked;
    setSelected((select) => {
      return data.filter(data => data.checked === true);
    });
    setState(state + 1);
  };


  const _add = itemID => {
    data[itemID - 1].amount += 1;
    setState(state + 1);
  };


  const _subtract = itemID => {
    if (data[itemID - 1].amount > 1){
    data[itemID - 1].amount -=  1;
    setState(state + 1);
  }
  };

  const _delete = itemID => {
    setData((prevdata)=>{
      return data.filter(data => data.id !== itemID);
    });
  };

  const [selected, setSelected] = useState(null);

  const _processOrder = () => {
    setSelected((select) => {
      return data.filter(data => data.checked === true);
    });
    setState(state + 1);
    if (selected === null || selected.length === 0){
      alerts('No product selected', 'Please select a product from cart','info');
    }
    else {
      navigation.navigate('Billing Address', selected);
    }
  };


  // Toast notification code
  const alerts = (message1, message2, type) => {
    return Toast.show({
      text1: message1,
      text2: message2,
      type: type,
      topOffset: 50,
      visibilityTime: 5000,
    });
  };

  const [coupon, setCoupon] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}
        showsVerticalScrollIndicator={false}
        >
        <View>
        <View style={{ flex: 1, width: '100%' }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="arrow-back-sharp" size={22} color="white" />
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text
              style={{
                color: 'white',
              marginLeft: wp(2),
              }}>
              My Cart ({data.length < 10 ? ('0' + data.length) : (data.length)})
            </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 15,
              backgroundColor: '#f9f9f9',
              borderBottomWidth: 1,
              borderColor: '#d3d3d3',
            }}>
            <TextInput
              style={{
                paddingHorizontal: wp(5),
                paddingVertical: 5,
                marginRight: 15,
                borderWidth: 1,
                borderColor: '#d3d3d3',
                borderRadius: 5,
                backgroundColor: 'white',
                width: '65%',
                color: 'black',
                fontSize: 12,
              }}
              value={coupon}
              onChangeText={text=>{setCoupon(text)}}
              placeholder="Enter Your Coupon Code"
            />
            <TouchableOpacity style={styles.button}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
                Apply Now
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainContainer} />
          <SwipeListView
            nestedScrollEnabled={true}
            keyExtractor={(item) => item.id}
            data={data}
            style={{marginTop:15}}
            renderItem={ ({item}, rowMap) => (

                <View style={styles.rowFront}>
                    <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      paddingHorizontal:10,
                      marginBottom:5,
                  }}>
                    <Checkbox
                        value={item.id}
                        status={ item.checked ? 'checked' : 'unchecked'}
                        onPress={() => _check(item.id)}
                        color="#039BE5"
                    />
                    <View style={{
                      paddingHorizontal:5,
                      paddingVertical:5,
                      backgroundColor:'#eef3f6',
                      borderWidth:1,
                      borderColor:'#e0e0e0',
                      marginHorizontal:10,
                      borderRadius:5,
                      }}>
                    <Image source={{ uri: item.image}} resizeMode="contain"
                    style={{height:hp(8),width:hp(7),
                    borderColor:'black'}}
                    />
                    </View>
                    <View>
                      <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{color:'#049cff',fontWeight:'bold',fontSize:15}}>${item.price}</Text>
                      <Text style={{fontSize:10,color:'#999'}}>/Per Piece</Text>
                      </View>
                    </View>
                    </View>
                    <View style={{
                      flexDirection:'row',
                      borderRadius:5,
                      borderWidth:1,
                      borderColor:'#ededed',
                      overflow:'hidden',
                      }}>
                        <TouchableOpacity
                        onPress={()=>_add(item.id)}
                        style={styles.counter}>
                            <Text>+</Text>
                        </TouchableOpacity>
                        <Text style={[styles.counter,{backgroundColor:'white'}]}>{item.amount}</Text>
                        <TouchableOpacity
                        onPress={()=>_subtract(item.id)}
                        style={[styles.counter]}>
                            <Text>-</Text>
                        </TouchableOpacity>
                      </View>
                </View>
            )}
            renderHiddenItem={ ({item}, rowMap) => (
                <View style={[styles.rowBack,{backgroundColor:'red'}]}>
                  <TouchableOpacity
                  onPress={()=>{_delete(item.id);}}
                  style={{
                    backgroundColor:'red',
                    }}>
                  <View>
                    <Icon name="trash-sharp" size={35} color="white"/>
                    <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>Delete</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={0}
            rightOpenValue={-75}
        />
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
              ${selected != null ?
            selected.reduce((accumulator, current) => accumulator + current.price * current.amount, 0)
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
            ${selected != null ?
            (selected.reduce((accumulator, current) => accumulator + current.price * current.amount, 0) + 15 - 11)
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
      <StatusBar translucent={false} animated={true} backgroundColor="black" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  mainContainer: {
    width:'100%',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#049cff',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  rowFront:{
    width:'100%',
    backgroundColor:'rgba(250,250,255,1)',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#d3d3d3',
    flexDirection:'row',
    paddingRight:wp(5),
    paddingVertical:10,
  },
  rowBack:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    height:'100%',
    width:'100%',
    paddingRight:10,
    alignSelf:'center',
  },
  counter:{
    paddingHorizontal:10,
    paddingVertical:2.5,
    backgroundColor:'#fbfdff',
    width:wp(7),
    height:wp(7),
  },
});
export default App;
