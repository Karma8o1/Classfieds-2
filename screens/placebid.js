/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/Ionicons';

//redux imports
import { useSelector } from 'react-redux';

const App = ({ navigation }) => {

      const data = useSelector(state => state);
      const [bid, setBid] = useState({
            amount:null,
            comment:null,
      });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Icons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={{ color: 'white', paddingLeft: 8 }}>Bid Form</Text>
        </View>
        <View style={styles.subcontainer}>
          <View style={{ marginBottom: 15 }}>
            <Text
              style={{
                paddingBottom: 10,
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Bid Amount
            </Text>
            <TextInput
              style={[styles.input, {}]}
              placeholder=""
              keyboardType="numeric"
              onChangeText={(text)=>{setBid({...bid,amount:text});}}
              value={bid}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text
              style={{
                paddingBottom: 10,
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Comments
            </Text>
            <TextInput
              style={[styles.input,{textAlignVertical:'top'}]}
              multiline
              numberOfLines={5}
              placeholder={null}
              value={bid.comment}
              onChangeText={(text)=>{
                    setBid({...bid,
                          comment:text});
              }}
            />
          </View>
          <Text
            style={{
              color: '#d3d3d3',
              fontSize: 12,
            }}>
            Your phone number will be shown to the post author
          </Text>
        </View>
        <TouchableOpacity
        onPress={()=>{console.log(bid.amount + ' ' + bid.comment + ' ' + data.log.email);}}
          style={{
            position: 'absolute',
            top: hp(90),
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              height: 50,
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2cc0fc',
              borderRadius: 5,
              overflow: 'hidden',
            }}>
            <Text style={{ 
                  color: 'white',
                  fontWeight:'bold',
                  fontSize:16,
                   }}>Send Now</Text>
          </View>
        </TouchableOpacity>
        <StatusBar animted={true} hidden={true} backgroundColor="#000" />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    width: '100%',
    elevation: 1,
    paddingHorizontal: wp(2),
  },
  subcontainer: {
    paddingHorizontal: 10,
    paddingVertical: '5%',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#fcfcfc',
    paddingHorizontal: 12,
  },
});

export default App;
