/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

const App: () => Node = ({ navigation }) => {
  const [details, setDetails] = useState({
    name:null,
    email:null,
    password:null,
    contact:null,
  });
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(false);
  const check = () => {
    if (remember === true) {
      setRemember(false);
    } else {
      setRemember(true);
    }
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email Format Incorrect')
      .required('Please enter email'),
    pass: yup
      .string()
      .min(8, ({ min }) => 'Password too short')
      .required('Password is required'),
  });

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
        <Image
          source={require('../assets/images/back.png')}
          resizeMode={'cover'}
          style={{
            position: 'absolute',
            top: hp(-20),
            left: 0,
            width: wp('100'),
          }}
        />
        <View
          style={{
            alignItems: 'center',
            marginTop: hp('5'),
            width: wp('100'),
          }}>
          <Image
            source={require('../assets/logo.png')}
            resizeMode={'contain'}
            style={{
              alignSelf: 'center',
            }}
          />
          <Text style={{ color: 'white', fontSize: 14 }}>
            This is Sample Text and
          </Text>
          <Text style={{ color: 'white', fontSize: 14 }}>
            it should be replaced before deployment
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ marginTop: hp('22'), flex: 1 }}>
          <View style={styles.innerContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
              Sign up with your Account
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{ marginVertical: hp('1.5'), width: wp('40') }}>
                  <Text style={styles.heading}>Username</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => {
                      setDetails({ name: text });
                    }}
                    value={details.name}
                    placeholder="Your Name"
                    secureTextEntry={false}
                  />
                </View>
                <View style={{ marginVertical: hp('1.5'), width: wp('40') }}>
                  <Text style={styles.heading}>Email Address</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => {
                      setDetails({ email: text });
                    }}
                    value={email}
                    placeholder="Your Email"
                    secureTextEntry={false}
                  />
                </View>
              </View>

              <View style={{ marginVertical: hp('1.5') }}>
                <Text style={styles.heading}>Contact Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => {
                    setDetails({ contact: text });
                  }}
                  value={details.contact}
                  placeholder="Your Contact Number"
                  secureTextEntry={false}
                  keyboardType="numeric"
                />
              </View>

              <View style={{ marginVertical: hp('1.5') }}>
                <Text style={styles.heading}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => {
                    setDetails({ password: text });
                  }}
                  value={details.password}
                  placeholder="Your Password"
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginLeft: -10,
                }}>
                <CheckBox
                  title="I agree to Terms & Conditions"
                  checked={remember}
                  onPress={() => {
                    check();
                  }}
                  uncheckedColor="white"
                  checkedIcon={<Icon name="check-box" size={15} />}
                  uncheckedIcon={
                    <Icon name="check-box-outline-blank" size={15} />
                  }
                />
              </View>
              <TouchableOpacity onPress={()=>{remember ? console.log('selected') :console.log('unselected')}}>
                <View style={styles.button}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 16,
                    }}>
                    Register Now
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View style={styles.lines} />
                <Text>OR</Text>
                <View style={styles.lines} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginVertical: hp('2'),
                }}>
                <GoogleSigninButton
                  style={{ width: wp('40'), height: 40 }}
                  size={GoogleSigninButton.Size.Standard}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={() => console.log('Pressed')}
                  disabled={false}
                />
                <LoginButton
                  style={{
                    width: wp('40'),
                    height: 35,
                    alignItems: 'center',
                    elevation: 3,
                  }}
                  onLoginFinished={(error, result) => {
                    if (error) {
                      console.log('login has error: ' + result.error);
                    } else if (result.isCancelled) {
                      console.log('login is cancelled.');
                    } else {
                      AccessToken.getCurrentAccessToken().then(data => {
                        console.log(data.accessToken.toString());
                      });
                    }
                  }}
                  onLogoutFinished={() => console.log('logout.')}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: hp('1'),
            marginTop:hp('-1'),
            alignSelf: 'center',
          }}>
          <Text>Already Registered ? </Text>
          <TouchableOpacity onPress={()=>{navigation.pop();}}>
            <Text style={{ color: '#789ffb', fontWeight: 'bold' }}>
              Login Here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar animated={true} backgroundColor="#011642" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed',
  },
  innerContent: {
    flex: 1,
    width: wp('95'),
    backgroundColor: 'white',
    paddingHorizontal: wp('5'),
    paddingVertical: hp('2'),
    borderRadius: 10,
    elevation: 5,
    marginBottom: hp('5'),
    borderWidth: 1,
    borderColor: '#ededed',
  },
  input: {
    height: hp('6'),
    borderWidth: 1,
    marginTop: wp('2'),
    borderRadius: 5,
    borderColor: '#ededed',
    paddingHorizontal: wp('2'),
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: hp(0.5),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: hp('1.5'),
    backgroundColor: '#3578fa',
    marginVertical: hp('2'),
  },
  lines: {
    width: wp('35'),
    height: hp('0.5'),
    backgroundColor: '#ddd',
    borderRadius: 30,
  },
});
export default App;
