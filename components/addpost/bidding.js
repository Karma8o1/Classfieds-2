/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

//Toast Notifications
import Toast from 'react-native-toast-message';


import DateTimePickerModal from 'react-native-modal-datetime-picker';

//Styling imports
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
  Touchable,
} from 'react-native';

import {} from '@react-navigation/drawer';


//Icon imports
import Icon from 'react-native-vector-icons/Ionicons';

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
  const [selected, setSelected] = useState({
    category:null,
    start:new Date(),
    end:null,
  });
  const [visible, setVisible] = useState({
      start:false,
      end:false,
  });
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  const data = new Date();

  const handleConfirm1 = (date) => {
      if (date >= data){
        if (selected.end != null){
         if(selected.start > selected.end){
          alerts('Date issue',"Can't place a bid for past days",'error');
         }
         else {
          setSelected({...selected, start:date});
          setStart(false);
         }
        }
        else {
          setSelected({...selected, start:date});
          setStart(false);
        }

      }
      else {
        alerts('Date issue',"Can't place a bid for past days",'error');
        setStart(false);
      }
  };
  const handleConfirm2 = (date) => {
          if (date >= selected.start){
              setSelected({...selected, end:date});
              setEnd(false);
          }
          else {
              setEnd(false);
              alerts('End Date','End date can be same or bigger than start date','error');
          }
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
            <Text style={styles.title}>Bidding</Text>
            <Text style={{ color: 'red' }}>*</Text>
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
                    Bid Start Date
                  </Text>
                  <TouchableOpacity onPress={()=>{setStart(true);}}>
                  <View style={[styles.input,{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                {selected.start == null ? (<Text>Start Date</Text>) :
                  (<Text>{selected.start.toLocaleDateString()}</Text>)}
                  </View>
                  <Icon name="caret-down" size={10} />
                  </View>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '48%' }}>
                  <Text style={[styles.spacing, styles.secondtitle]}>Bid End Date</Text>
                  <TouchableOpacity onPress={()=>{setEnd(true);}}>
                  <View style={[styles.input,{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                  {selected.end == null ? (<Text>End Date</Text>) :
                  (<Text>{selected.end.toLocaleDateString()}</Text>)}
                  <Icon name="caret-down" size={10} />
                  </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop:hp(3),flexDirection: 'row' }}>
            <Text style={styles.title}>All Categories</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
          <View>
            <Text style={[styles.spacing, styles.secondtitle]}>Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Select Categories"
              value={selected.category}
                      onChangeText={(text)=>{
                        setSelected({...selected,
                          category:text});
              }}
            />
          </View>
          <DateTimePickerModal
        isVisible={start}
        mode="date"
        onConfirm={handleConfirm1}
        onCancel={()=>{setStart(false);}}
      />
      <DateTimePickerModal
        isVisible={end}
        mode="date"
        onConfirm={handleConfirm2}
        onCancel={()=>{setEnd(false);}}
      />
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
