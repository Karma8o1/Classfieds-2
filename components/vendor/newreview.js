/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';

//Styling imports
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  Pressable,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableNativeFeedback,
} from 'react-native';

import {} from '@react-navigation/drawer';

//ratings import
import { AirbnbRating } from 'react-native-ratings';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  const [rating, setRating] = useState(3);
  const [ratingstyle, setRatingstyle] = useState({
    color:'#9b870c',
    text:'Three',
  });

  const [review, setReview] = useState({
      title:null,
      review:null,
  })
  const _rating = (number) => {

    setRating(number);

    if (number === 1){
        setRatingstyle({
            color:'red',
            text:'One',
        });
    }
    else if (number === 2){
        setRatingstyle({
            color:'red',
            text:'Two',
        });
    }
    else if (number === 3){
        setRatingstyle({
            color:'#9b870c',
            text:'Three',
        });
    }
    else if (number === 4){
        setRatingstyle({
            color:'green',
            text:'Four',
        });
    }
    else if (number === 5){
        setRatingstyle({
            color:'green',
            text:'Five',
        });
    }
    else {
        setRatingstyle({
            color:'red',
            text:'Zero',
        });
    }
  };
  return (
      <>
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}} style={styles.container}>
      <>
      <View>
        <View style={[styles.spacing, { alignItems: 'flex-start' }]}>
          <Text
            style={[
              styles.spacing,styles.title]}>
            Ratings & Reviews
          </Text>
          <View style={{flexDirection:'row'}}>
            <AirbnbRating
              type="star"
              ratingCount={5}
              defaultRating={rating}
              size={16}
              onFinishRating={ratings => {
                _rating(ratings);
              }}
              showRating={false}
              ratingBackgroundColor="#000"
            />
            <View style={{
                backgroundColor:ratingstyle.color,
                marginHorizontal: 5,
                flexDirection: 'row',
                paddingHorizontal:5,
                alignItems:'center',
                borderRadius:5,
                 }}>
              <Text style={{fontSize:12,fontWeight:'bold',color:'white'}}> {ratingstyle.text} </Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:'white'}}>Star</Text>
            </View>
          </View>
          <KeyboardAvoidingView>
          <View style={styles.spacing}>
                 <Text style={styles.title}>
                    Review Title
                 </Text>
            </View>
            <TextInput
                 placeholder={null}
                 style={styles.input}
                 autoFocus={true}
                 value={review.title}
                 onChangeText={text=>setReview({...review,title:text})}
                 />

            <View style={styles.spacing}>
                 <Text style={styles.title}>
                    Your Review
                 </Text>
            </View>
            <TextInput
              style={[styles.input,{textAlignVertical:'top'}]}
              multiline
              numberOfLines={5}
              placeholder={null}
              value={review.review}
              onChangeText={(text)=>{
                    setReview({...review,
                          review:text});
              }}
            />
            </KeyboardAvoidingView>
        </View>
      </View>
        <TouchableNativeFeedback>
            <View style={[styles.button,{position:'absolute',bottom:hp(10),alignSelf:'center',borderRadius:5}]}>
                <Text style={[styles.title,{color:'white'}]}>Submit Review</Text>
            </View>
        </TouchableNativeFeedback>
            </>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    marginVertical: hp(1.2),
  },
  title: {
    fontSize: wp(3.5),
    color: '#000',
    fontWeight: 'bold',
  },
  input:{
      borderWidth:1,
      backgroundColor:'#f5f5f5',
      borderColor:'#ededed',
      width:wp(95),
      borderRadius:5,
  },
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#049cff',
    padding: 10,
  },
});

export default App;
