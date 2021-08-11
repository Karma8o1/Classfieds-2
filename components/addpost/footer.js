/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import BottomButton from './RoundedButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = ({
  backgroundColor,
  rightButtonLabel = false,
  rightButtonPress = false,
  leftButtonLabel = false,
  leftButtonPress = false,
  button = null,

}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: leftButtonLabel ? 'space-between' : 'flex-end',
        height: hp(5),
        width:'100%',
        backgroundColor:backgroundColor,
        opacity: 1,
        activeOpacity:1,
        alignItems: 'center',
        paddingHorizontal: wp('5'),
        }}>
      {leftButtonLabel && (
        // <BottomButton label={leftButtonLabel} onPress={leftButtonPress} />
        <Text style={{fontWeight:'bold',fontSize:16,color:'white'}}>{leftButtonLabel}</Text>
      )}
      <View style={{flexDirection:'row',alignItems:'center'}}>
      {rightButtonLabel && (
      <BottomButton label={rightButtonLabel} onPress={rightButtonPress} />
      )}
      {button && (
        <TouchableOpacity onPress={rightButtonPress}>
        <Icon name= {button} size={20} color="white" />
        </TouchableOpacity>
      )}
      </View>
    </SafeAreaView>
  );
};
export default App;
