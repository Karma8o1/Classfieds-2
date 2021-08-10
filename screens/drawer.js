/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';


import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../src/redux/actions';
//for disabling rendering warning
import { LogBox } from 'react-native';

import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  StatusBar,
  Image,
  Text,
  Alert,
  ScrollView,
} from 'react-native';

import Main from './mainpage';
import Profile from './profile';
import AdvanceSearch from './advance';
import Messages from './messages';
import Packages from './packages';
import Ads from './ads';
import Favads from './favads';
import Shop from './shop';
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/AntDesign';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Drawer Menu Items to add selectable screens to drawer
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

// //Animtaion Imports
import Animated from 'react-native-reanimated';

const Screens = ({ navigation, style }) => {
  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: '#051d4d' }}>
      <Animated.View style={[styles.stack, style]}>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f4511e',
              height: 100,
            },
            headerLeft: () => (
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <View
                  style={{
                    paddingHorizontal: wp('5'),
                  }}>
                  <Icon
                    name="nav-icon-list"
                    size={20}
                    style={{ color: '#fff' }}
                  />
                </View>
              </TouchableNativeFeedback>
            ),
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Advance Search" component={AdvanceSearch} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Package" component={Packages} />
          <Stack.Screen name="My Ads" component={Ads} />
          <Stack.Screen name="Fav Ads" component={Favads} />
          <Stack.Screen name="Shop" component={Shop} />
        </Stack.Navigator>
      </Animated.View>
      <StatusBar animated={true} backgroundColor="#011642" />
    </View>
  );
};

const DrawerContent = props => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('Sample');
  const [email, setEmail] = useState('Sample@gmail.com');
  const logging = ()=> {
      Alert.alert('Logout', 'Are you sure you want to logout ?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },

        {
          text: 'LOGOUT',
          onPress: () => {
            dispatch(logout());
            console.log('LOGGED OUT');
          },
        },
      ]);
  };
  useEffect(() => {
    setEmail(data.log.email);
  }, [data.log.email]);

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#051d4d',
        borderWidth: 1,
        borderColor: '#051d4d',
        shadowColor:'transparent',
      }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(5),
            marginLeft: wp(5),
          }}>
          <Image
            source={require('../components/user.png')}
            resizeMode="center"
            style={{ borderRadius: 30, height: hp(15), width: wp(20) }}
          />
          <ScrollView>
            <View style={{ marginLeft: 10, overflow: 'hidden' }}>
              <Text style={{ color: '#fff', fontSize: 14 }}>
                Sample Username
              </Text>
              <Text style={{ color: '#fff', fontSize: 10 }}>
                {data.log.email}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{ width: wp('100') }}>
          <DrawerItem
            label="Home"
            labelStyle={styles.drawerLabel}
            // style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Main')}
            icon={() => <Icons name="home" size={25} style={styles.icon} />}
          />

          <DrawerItem
            label="Profile"
            labelStyle={styles.label}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Profile')}
            icon={() => <Icons name="user" size={25} style={styles.icon} />}
          />

          <DrawerItem
            label="Advance Search"
            labelStyle={styles.label}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Advance Search')}
            icon={() => <Icons name="search1" size={25} style={styles.icon} />}
          />

          <DrawerItem
            label="Messages"
            labelStyle={styles.label}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Messages')}
            icon={() => <Icons name="message1" size={25} style={styles.icon} />}
          />
          <DrawerItem
            label="Packages"
            labelStyle={styles.label}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Package')}
            icon={() => <Icons name="tags" size={25} style={styles.icon} />}
          />

          <DrawerItem
            label="My Ads"
            labelStyle={styles.label}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('My Ads')}
            icon={() => <Icons name="phone" size={25} style={styles.icon} />}
          />

          <DrawerItem
            label="Shop"
            labelStyle={styles.label}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Shop')}
            icon={() => <Icon name="shopping-basket-add" size={20} style={styles.icon} />}
          />
          <View style={{ paddingHorizontal: wp('4') }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: hp('2'),
              }}>
              Other
            </Text>
          </View>
          <View>
            <DrawerItem
              label="Logout"
              labelStyle={styles.label}
              icon={() => <Icons name="logout" size={25} style={styles.icon} />}
              onPress={() => {
                logging();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
};
 LogBox.ignoreAllLogs();
const App = () => {
  const Drawer = createDrawerNavigator();
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }], overflow:'hidden' };
  // eslint-disable-next-line no-shadow
  const prog = (progress) => {
    setProgress(progress);
  };
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Main"
        overlayColor="transparent"
        drawerStyle={{width:'60%',backgroundColor:'#051d4d'}}
        drawerContent={props => {
          // ren(props);
          // setProgress(props.progress);
          prog(props.progress);
          return <DrawerContent {...props} />;
        }}
        drawerType="slide">
        {/* <Drawer.Screen name="Screens" component={Screens}
        style={animatedStyle}
        /> */}
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 5,
  },
  stack: {
    flex: 1,
    shadowColor: '#ededed',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.32,
    elevation: 10,
    overflow: 'scroll',
    borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { marginVertical: hp(0.5) },
  drawerLabel: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    height: 60,
    width: 60,
  },
  icon: {
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 5,
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default App;
