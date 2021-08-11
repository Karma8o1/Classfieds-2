/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';

//imports for form validation and submitting
import * as yup from 'yup';
import { Formik } from 'formik';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';


//DropDown menu import
import DropDownPicker from 'react-native-dropdown-picker';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import ImagePicker from 'react-native-image-crop-picker';

const App = ({ route, navigation }) => {

    //attributes of drop down picker
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: 'Individual', value: 'Individual' },
    { label: 'Business', value: 'Business' },
    { label: 'Company', value: 'Company' },
  ]);
  const [profile, setProfile] = useState(route.params);

  const [modal, setModal] = useState(false);

  const [image,setImage] = useState(null);
  const _open_camera = () => {
    ImagePicker.openCamera({
        width: 200,
        height: 200,
        cropping: true,
      }).then(image => {
        setImage(image.path);
      });
  };
  const _open_gallrey = () => {
    ImagePicker.openPicker({
        width: 200,
        height: 200,
        cropping: true,
      }).then(image => {
        setImage(image.path);
        // console.log(image);
      });
  };
  const updateValidationSchema = yup.object().shape({
    name:yup
        .string()
        .required('Please enter username'),
    email: yup
        .string()
        .required('Please enter email'),
    contact_number: yup
        .string()
        .min(8, ({ min }) => 'Give full contact number')
        .required('Contact Number is Required'),
    location:yup
        .string()
        .required('location is required'),
    description:yup
        .string()
        .required('Please Enter Description'),
    fb:yup
        .string()
        .required('Links are mendatory'),
    twitter:yup
        .string()
        .required('Links are mendatory'),
    insta:yup
        .string()
        .required('Links are mendatory'),
    linkedin:yup
        .string()
        .required('Links are mendatory'),
  });
  return (
    <KeyboardAvoidingView style={styles.container}>
        <Formik
        validationSchema={updateValidationSchema}
        initialValues={{
          name:'',
          email: '',
          contact_number:'',
          location:'',
          description:'',
          fb:'',
          twitter:'',
          insta:'',
          linkedin:'',
        }}
        onSubmit={values => {
          console.log(values);
        }}>
        {props => (
          <>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.pop();
                }}>
                <Icon name="arrow-back-sharp" size={25} color="white" />
              </TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 14, marginLeft: 10 }}>
                Edit Profile
              </Text>
            </View>
          </View>
          <View style={styles.maincontainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                  <View style={{flexDirection:'row'}} >
                    <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>Edit Profile</Text>
                    <Text style={{color:'red'}}>*</Text>
                  </View>
              <TouchableOpacity>
                <Text style={{color:'green'}}>Change Password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spacing}>
                <Text style={styles.title}>Name</Text>
                <TextInput
                style={styles.input}
                placeholder={profile.name}
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
                />
            </View>
            {props.errors.name && props.touched.name && (
                        <Text style={styles.error}>{props.errors.name}</Text>
                      )}
            <View style={[styles.spacing,{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                }]}>

              <View style={{width:'48%'}}>
              <Text style={styles.title}>Email</Text>
                <TextInput
                keyboardType="email-address"
                style={styles.input}
                placeholder={profile.email.substring(0,17)}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email.trim()}
                />
                {props.errors.email && props.touched.email && (
                        <Text style={styles.error}>{props.errors.email}</Text>
                      )}
              </View>

              <View style={{width:'48%'}}>
              <Text style={styles.title}>Phone Number</Text>
                <TextInput
                keyboardType="phone-pad"
                style={styles.input}
                placeholder={profile.contact}
                onChangeText={props.handleChange('contact_number')}
                onBlur={props.handleBlur('contact_number')}
                value={props.values.contact_number}
                />
                {props.errors.contact_number && props.touched.contact_number && (
                        <Text style={styles.error}>{props.errors.contact_number}</Text>
                      )}
              </View>
            </View>
            <View style={styles.spacing}>
                <Text style={styles.title}>Account Type</Text>
                <DropDownPicker
                mode="BADGE"
                showBadgeDot={true}
                listMode="SCROLLVIEW"
                dropDownDirection="BOTTOM"
                open={open1}
                value={value1}
                items={items1}
                setOpen={setOpen1}
                setValue={values => setValue1(values)}
                setItems={setItems1}
                placeholder={profile.type}
                placeholderStyle={{color:'#999'}}
                style={{
                  borderWidth: 1,
                  borderColor: '#d3d3d3',
                  alignItems: 'center',
                  backgroundColor:'#f9f9f9',
                }}
                dropDownContainerStyle={{
                  flex:1,
                  borderWidth: 1,
                  borderColor: '#ededed',
                  backgroundColor:'#f9f9f9',
                  zIndex: 1000,
                }}
              />
            </View>
            <View style={styles.spacing}>
              <Text style={styles.title}>Location</Text>
                <TextInput
                style={styles.input}
                placeholder={profile.location}
                onChangeText={props.handleChange('location')}
                onBlur={props.handleBlur('location')}
                value={props.values.location}
                />
              </View>
              {props.errors.location && props.touched.location && (
                        <Text style={styles.error}>{props.errors.location}</Text>
                      )}
            <View style={styles.spacing}>
            <TouchableOpacity onPress={()=>{setModal(true);}} style={[image == null ?
                 (styles.imagecontainer) :
                  (styles.imagecontainer1)]}>
            {image == null ? (<View>
                    {/* if no image is selected yet, this will be shown */}
                    <View style={{marginVertical:hp(2),alignItems:'center'}}>
                    <Text style={{fontSize:16,color:'#000',marginBottom:5,}}>Upload Image</Text>
                    <Text style={{fontSize:12,marginBottom:10,}}>Upload only jpg,png max file size 7 mb</Text>
                    <Image source={require('../assets/images/upload.png')}
                    style={{height:50,width:50}}
                    />
                    </View>
                    </View>) : (
                    <View style={{alignItems:'center',justifyContent:'flex-end'}}>
                        {/* after user selects an image, cropped image will be shown */}
                        <Image source={{uri : image}} style={{height:200,width:200,borderRadius:5,}} 
                        resizeMode="cover"
                        />
                        <View style={{
                            position:'absolute',
                            backgroundColor:'rgba(240,240,240,0.5)',
                            bottom:20,
                            alignItems:'center',
                            alignSelf:'flex-end',
                            width:'100%',
                            }}>
                        <Icon name="camera-sharp" size={25} color="black" />
                        </View>
                    </View>
                        )}
                </TouchableOpacity>
                <Modal
                visible={modal}
                animationType="slide"
                transparent={true}
                onRequestClose={()=>setModal(false)}
                >
                    <View style={{
                        flex:1,alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:'rgba(0,0,0,0.1)',
                        }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        backgroundColor:'white',
                        paddingHorizontal:wp(5),
                        height:hp(10),
                        width:wp(80),
                        borderRadius:5,
                        }}>
                    <Pressable
                    onPress={()=>{
                        _open_gallrey();
                        setModal(false);
                    }}>
                    <View style={styles.modalbtn}>
                        <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>Pick From Gallery</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={()=>{
                                        _open_camera();
                                        setModal(false);
                                        }}>
                    <View style={styles.modalbtn}>
                        <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>Open Camera</Text>
                    </View>
                    </Pressable>

                    </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.spacing}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.title}>Ad Description</Text>
                    <Text style={{fontSize:12,marginLeft:10}}>Enter Long Description</Text>
                </View>
            <TextInput
              style={[styles.input,{textAlignVertical:'top'}]}
              multiline
              numberOfLines={5}
              placeholder={null}
              onChangeText={props.handleChange('description')}
                onBlur={props.handleBlur('description')}
                value={props.values.description}
            />
            </View>
            {props.errors.description && props.touched.description && (
                        <Text style={styles.error}>{props.errors.description}</Text>
                      )}
            <View style={styles.spacing}>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.title,{fontSize:16}]}>Social Links</Text>
                <Text style={{color:'red'}}>*</Text>
                </View>
            </View>
            <View style={styles.spacing}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{width:'48%'}}>
                        <Text style={styles.title}>Facebook</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Facebook.com"
                        onChangeText={props.handleChange('fb')}
                        onBlur={props.handleBlur('fb')}
                        value={props.values.fb}
                        />
                        {props.errors.fb && props.touched.fb && (
                        <Text style={styles.error}>{props.errors.fb}</Text>
                      )}
                    </View>

                    <View style={{width:'48%'}}>
                        <Text style={styles.title}>Twitter</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Twitter.com" 
                        onChangeText={props.handleChange('twitter')}
                        onBlur={props.handleBlur('twitter')}
                        value={props.values.twitter}
                        />
                        {props.errors.twitter && props.touched.twitter && (
                        <Text style={styles.error}>{props.errors.twitter}</Text>
                      )}
                    </View>
                </View>
        </View>
        <View style={styles.spacing}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{width:'48%'}}>
                        <Text style={styles.title}>LinkedIn</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="LinkedIn.com"
                        onChangeText={props.handleChange('linkedin')}
                        onBlur={props.handleBlur('linkedin')}
                        value={props.values.linkedin}
                        />
                        {props.errors.linkedin && props.touched.linkedin && (
                        <Text style={styles.error}>{props.errors.linkedin}</Text>
                      )}
                    </View>

                    <View style={{width:'48%'}}>
                        <Text style={styles.title}>Instagram</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Instagram.com"
                        onChangeText={props.handleChange('insta')}
                        onBlur={props.handleBlur('insta')}
                        value={props.values.insta}
                        />
                        {props.errors.insta && props.touched.insta && (
                        <Text style={styles.error}>{props.errors.insta}</Text>
                      )}
                    </View>
                </View>
        </View>
        <View style={styles.spacing}>
            <TouchableOpacity>
                <Text style={{color:'red'}}>Delete Account ?</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={props.handleSubmit}
        style={styles.spacing}>
        <View style={{
            backgroundColor:'#089cfc',
            height:50,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:5,
            }}>
                <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Update Now</Text>
        </View>
        </TouchableOpacity>

            {/*
                do not leave this container
                all internal code should be implemented here
                scrollview will break otherwise
            */}

          </View>
        </View>
      </ScrollView>
      </>
        )}
      </Formik>
</KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: 'gray',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    width: '100%',
    height: 40,
  },
  maincontainer: {
    flex: 1,
    width: '100%',
    paddingTop: hp(3),
    paddingHorizontal: wp(5),
    backgroundColor: 'white',
  },
  input:{
    borderWidth:1,
    borderRadius:5,
    borderColor:'#ddd',
    backgroundColor:'#f8f8f8',
    paddingHorizontal:15,
  },
  spacing:{
      marginVertical:hp(1.2),
  },
  title:{
      fontSize:14,
      color:'#000',
      marginBottom:5,
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
  error:{
    fontSize:10,
    alignSelf:'center',
    color:'red',
  },
});
export default App;
