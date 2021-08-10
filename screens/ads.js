/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = ({ navigation }) => {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#051D4D',
      }}>
      <View
        style={
          (styles.container,
          {
            flex: 1,
            backgroundColor: 'white',
          })
        }>
        <Text>MY ADS</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
