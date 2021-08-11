/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
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
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

import { Searchbar, RadioButton } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { Divider } from 'react-native-elements';

const App = ({ navigation }) => {
  const [search, setSearch] = useState(null);
  const [modal, setModal] = useState(false);
  const [sort,setSort] = useState({
    sorting:null,
    nto:false,
    otn:false,
    lth:false,
    htl:false,
  });
  const [data, setData] = useState([
    {
      name: 'Computer Chair',
      rating: '2.8',
      price: '65.00',
      old_price: '75.00',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61zKLzUQoJL._AC_SX466_.jpg',
      sale: true,
      id: 0,
    },
    {
      name: 'Canon 1DX Mark iii',
      rating: '2.8',
      price: '6500.00',
      old_price: '7000.00',
      image:
        'https://www.usa.canon.com/internet/wcm/connect/us/720671a7-9b17-44a7-8951-e8c23598a4a0/1DX_MARKIII_BODY_FRONT_OPEN_675x450.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-720671a7-9b17-44a7-8951-e8c23598a4a0-mZZwVOK',
      sale: true,
      id: 1,
    },
    {
      name: 'Bose Headphones',
      rating: '3.8',
      price: '350.00',
      old_price: '500.00',
      image:
        'https://m.media-amazon.com/images/I/919m6Fn487L._AC_SL1500_.jpg',
      sale: true,
      id: 2,
    },
    {
      name: 'Computer Chair',
      rating: '2.8',
      price: '65.00',
      old_price: '75.00',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61zKLzUQoJL._AC_SX466_.jpg',
      sale: true,
      id: 3,
    },
    {
      name: 'Sony WHX1000',
      rating: '5',
      price: '399.00',
      old_price: null,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUa2GwHDhpWJaABGZ90K_AnEq6e-3ZXf6Rg&usqp=CAU',
      sale: true,
      id: 4,
    },
    {
      name: 'Computer Chair',
      rating: '2.8',
      price: '65.00',
      old_price: '75.00',
      image:
        'https://4.img-dpreview.com/files/p/E~TS590x0~articles/8781234366/NikonZ6-fancy03b.jpeg',
      sale: true,
      id: 5,
    },
    {
      name: "Samsung OLED 45''",
      rating: '1.5',
      price: '65.00',
      old_price: '75.00',
      image:
        'https://www.bhphotovideo.com/images/images2500x2500/samsung_un32n5300afxza_n5300_series_32_smart_1395974.jpg',
      sale: true,
      id: 6,
    },
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#051D4D',
      }}>
      <View style={styles.container}>
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 1, backgroundColor: '#fff', width: '100%' }}>
          <View style={{ flex: 1, width: '100%' }}>
            <View>
              <View style={[styles.header,{height:hp(5),backgroundColor:'white'}]}>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:wp(2.5)}}>
                <Text style={{color:'black'}}>{data.length} Items For : {' '}</Text>
                <Text style={{color:'#0099FF'}}>Classfieds</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>setModal(true)}>
                  <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-evenly',
                    paddingRight:5,
                    }}>
                    <Icon name="swap-vertical" size={20} color="#0099FF" />
                    <Text style={{fontSize:10}}>Sort</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('filters');}}>
                  <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-evenly',
                    paddingRight:5,
                    }}>
                    <Icon name="md-funnel" size={20} color="#0099FF" />
                    <Text style={{fontSize:10}}>Filter</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-evenly',
                    paddingRight:5,
                    }}>
                    <Icon name="heart-sharp" size={20} color="#0099FF" />
                  </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.openDrawer();
                  }}>
                  <Icon name="list" size={30} color="white" />
                </TouchableOpacity>
                <Searchbar
                  placeholder="Search Products"
                  onChangeText={text => {
                    setSearch(text);
                  }}
                  value={search}
                  style={{
                    height: 35,
                    width: '80%',
                    backgroundColor: '#fff',
                    color: 'white',
                    marginRight: wp(5),
                    borderRadius: 50,
                  }}
                  inputStyle={{
                    fontSize: 10,
                    backgroundColor: '#fff',
                    color: '#000',
                    borderLeftWidth: 1,
                    borderColor: '#d3d3d3',
                    textDecoration: 'none',
                    underlineColor: 'transparent',
                  }}
                  iconColor="#0099ff"
                  placeholderTextColor="#000"
                />
              </View>
            </View>
            <View style={{width:'100%',alignItems:'center'}}>
              <FlatList
              nestedScrollEnabled={true}
              style={{marginTop:hp(2)}}
              data={data}
              keyExtractor={(item)=>item.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item})=>(
                <TouchableOpacity style={{
                  marginHorizontal:wp(2.5),
                  marginBottom:hp(2),
                  backgroundColor:'white',
                  borderWidth:1,
                  borderColor:'#f8f8f8',
                  borderRadius:5,
                  overflow:'hidden',
                  elevation:5,
                  }}>
                <View style={{
                  backgroundColor:'white',
                  }}>
                  {/* image view */}
                  <View style={{
                    backgroundColor:'white',
                    height:hp(22),
                    width:hp(22),
                    alignItems:'center',
                    justifyContent:'center',
                    }}>
                    <Image source={{uri: item.image}}
                    resizeMode="contain"
                    resizeMethod="auto"
                    style={{height:hp(22),width:hp(22),backgroundColor:'white'}}
                    />
                    <View style={{
                      position:'absolute',
                      top:hp(1),
                      width:'100%',
                      paddingHorizontal:wp(2.5),
                      }}>
                      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
                      <TouchableOpacity
                      style={{backgroundColor:'#eef3f6',
                      padding:2.5,
                      borderRadius:50,
                      elevation:5,
                      alignItems:'center',
                      justifyContent:'center',
                      }}>
                        <Icon name="md-heart-outline" size={20} />
                      </TouchableOpacity>
                      <View>
                        {item.old_price != null ? (<Image source={require('../assets/images/sale.png')}
                        style={{height:hp(5),width:hp(5)}}
                        />) : (<Text style={{color:'transparent',fontSize:hp(3.75)}}></Text>)}
                      </View>
                    </View>
                    </View>
                  </View>
                  <Divider orientation="horizontal"
                  color="#ededed"
                  style={{width:'80%',alignSelf:'center'}}/>
                  {/* view to hold the information */}
                  <View style={{backgroundColor:'white',paddingHorizontal:wp(2.5),paddingBottom:5}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Rating
                    showRating={false}
                    startingValue={item.rating}
                    readonly={true}
                    imageSize={12}
                    // onFinishRating={this.ratingCompleted}
                    style={{ paddingTop: 10,paddingBottom:5 }}/>
                    <Text style={{fontSize:10, color:'black',fontWeight:'bold',marginLeft:5}}>{item.rating}</Text>
                    </View>
                    <Text style={[{fontWeight:'bold',color:'black'}]}>{item.name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={[styles.spacing,{marginRight:wp(2.5),color:'#00008b',fontWeight:'bold'}]}>${item.price}</Text>
                    <Text style={[styles.spacing,{fontSize:11,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>
                      {item.old_price !== null ? ('$' + item.old_price) : (null)}
                      </Text>
                    </View>
                </View>
                </View>
                </TouchableOpacity>
              )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
      transparent={true}
      style={{alignItems:'flex-end',justifyContent:'flex-end'}}
      animationType="slide"
      onRequestClose={()=>{setModal(false);}}
      visible={modal}>
        <TouchableWithoutFeedback 
        onPress={()=>{setModal(false);}}
        style={{
          height:'100%',
          width:'100%',
          backgroundColor:'rgba(0,0,0,0.1)',
          justifyContent:'flex-end',
          }}>
            <View style={{height:'100%',justifyContent:'flex-end'}}>
            <View style={{
              height:'25%',
              backgroundColor:'white',
              paddingHorizontal:wp(5),
              paddingTop:hp(2),
              borderTopRightRadius:20,
              borderTopLeftRadius:20,
              }}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Sort By</Text>
                    <TouchableOpacity onPress={()=>{setModal(false);}} style={{elevation:5}}>
                    <View style={{padding:hp(0.5),backgroundColor:'#e33028',borderRadius:100}}>
                      <Icon name="ios-close" size={12} color="white" />
                    </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingTop:hp(1)}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <RadioButton
                      value="Date Ascending"
                      status={sort.nto ? 'checked' : 'unchecked'}
                      onPress={(value) => {setSort({
                        sorting:'Date Ascending',
                        nto:true,
                        ...false,
                      });
                    setModal(false);
                    }}
                      color="#039BE5"
                    />
                    <Text>Newest To Oldest</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <RadioButton
                      value="Date Descending"
                      status={sort.otn ? 'checked' : 'unchecked'}
                      onPress={(value) => {setSort({
                        sorting:'Date Descending',
                        otn:true,
                        ...false,
                      });
                    setModal(false);
                    }}
                      color="#039BE5"
                    />
                    <Text>Oldest To Newest</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <RadioButton
                      value="Price Descending"
                      status={sort.htl ? 'checked' : 'unchecked'}
                      onPress={(value) => {setSort({
                        sorting:'Price Descending',
                        htl:true,
                        ...false,
                      });
                      setModal(false);}}

                      color="#039BE5"
                    />
                    <Text>Price: High To Low</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <RadioButton
                      value="Price Descending"
                      status={sort.lth ? 'checked' : 'unchecked'}
                      onPress={(value) => {setSort({
                        sorting:'Price Ascending',
                        lth:true,
                        ...false,
                      });
                    setModal(false);
                    }}
                      color="#039BE5"
                    />
                    <Text>Price: Low To High</Text>
                    </View>
                  </View>
            </View>
            </View>
        </TouchableWithoutFeedback>
      </Modal>
      <StatusBar translucent={false} backgroundColor="black" />
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
    height: hp(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2.5),
  },
  spacing:{
    marginVertical:hp(0.5),
  },
});
export default App;
