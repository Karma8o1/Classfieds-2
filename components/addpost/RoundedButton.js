/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

const Btn = ({label, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={onPress}>
        <Text style={{fontSize: wp('4'), color: 'white', fontWeight: 'bold'}}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Btn;
