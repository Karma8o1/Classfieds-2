import React, { useState, useEffect, useRef } from 'react';

//Toast Notifications
import Toast from 'react-native-toast-message';

import axios from 'axios';

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
  ImageBackground,
  FlatList,
  TouchableNativeFeedback,
  RefreshControl,
} from 'react-native';

import {} from '@react-navigation/drawer';

import { ActivityIndicator, Colors } from 'react-native-paper';

//Icon imports
import Icon from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
