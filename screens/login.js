/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
//basic react import
import React, { useState } from 'react';
//imports for form validation and submitting
import * as yup from 'yup';
import { Formik } from 'formik';

//pre-built compoonent imports
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
} from 'react-native';
import { CheckBox } from 'react-native-elements';
//import of pixel fitting screens (responsive)

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//Icon imports
import Icon from 'react-native-vector-icons/MaterialIcons';

//Social Media Login Imports
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

//Redux Imports
import { useDispatch } from 'react-redux';
import { login } from '../src/redux/actions';

const App = ({navigation}) => {
  const [remember, setRemember] = useState(false);
  //dispatching to set user to logged in
  const dispatch = useDispatch();

  //for remember me checkbox
  const check = () => {
    if (remember === true) {
      setRemember(false);
    } else {
      setRemember(true);
    }
  };

  //login validation for login
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
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor:'gray',
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
      <Formik
        //validationSchema={loginValidationSchema}
        initialValues={{
          email: '',
          pass: '',
        }}
        onSubmit={values => {
          console.log(values);
          dispatch(login(values.email));
        }}>
        {props => (
          <>
            <ScrollView>
              <KeyboardAvoidingView style={{ marginTop: hp('30'), flex: 1 }}>
                <View style={styles.innerContent}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Sign in with your Account
                  </Text>
                  <View>
                    <View style={{ marginVertical: hp('1.5') }}>
                      <Text style={styles.heading}>Email Address</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Your Email"
                        secureTextEntry={false}
                        onChangeText={props.handleChange('email')}
                        onBlur={props.handleBlur('email')}
                        value={props.values.email.trim()}
                      />
                      {props.errors.email && props.touched.email && (
                        <Text style={styles.error}>{props.errors.email}</Text>
                      )}
                    </View>
                    <View style={{ marginVertical: hp('1.5') }}>
                      <Text style={styles.heading}>Password</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Your Password"
                        secureTextEntry={true}
                        onChangeText={props.handleChange('pass')}
                        onBlur={props.handleBlur('pass')}
                        value={props.values.pass}
                      />
                      {props.errors.pass && props.touched.pass && (
                        <Text style={styles.error}>{props.errors.pass}</Text>
                      )}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <CheckBox
                        title="Remember Me"
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
                      <TouchableOpacity>
                        <Text style={{ color: '#789ffb' }}>
                          Forget Password?
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={props.handleSubmit}>
                      <View style={styles.button}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: 16,
                          }}>
                          Login Now
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
                  marginTop: hp('-1'),
                  alignSelf: 'center',
                }}>
                <Text>Don't have an account ? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('signup');
                  }}>
                  <Text style={{ color: '#789ffb', fontWeight: 'bold' }}>
                    Register Here
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
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
    elevation:5,
    marginBottom:hp('5'),
    borderWidth:1,
    borderColor:'#ededed',
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
  error:{
    fontSize:10,
    alignSelf:'center',
    color:'red',
  },
});
export default App;
