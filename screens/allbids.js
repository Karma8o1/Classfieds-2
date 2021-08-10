import React, { useState, useEffect, useRef } from 'react';
// import { Switch } from 'react-native-switch';
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
  SafeAreaView,
  ImageBackground,
  TextInput,
} from 'react-native';
import {} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

import { Divider } from 'react-native-elements';

import PagerView from 'react-native-pager-view';

const App = () => {
  //    for view pager
  const pageRef = useRef(null);
  const [page, setPage] = useState(1);

  const handleChange = pageNum => {
    pageRef.current.setPage(pageNum);
    setPage(pageNum + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flexGrow: 1, width: '100%', backgroundColor: 'gray' }}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="arrow-back-sharp" size={22} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', marginLeft: wp(2) }}>All Bids</Text>
          </View>
          <View style={{flex:1,backgroundColor:'white'}}>
            {/* <Switch
              value={true}
              onValueChange={val => console.log(val)}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={30}
              barHeight={1}
              circleBorderWidth={3}
              backgroundActive={'green'}
              backgroundInactive={'gray'}
              circleActiveColor={'#30a566'}
              circleInActiveColor={'#000000'}
              changeValueImmediately={true}
              //   renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
              //   changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }} // style for inner animated circle for what you (may) be rendering inside the circle
              outerCircleStyle={{}} // style for outer animated circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(4),
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacing: {
    marginVertical: hp(1),
  },
  pagerstyle: {
    flex: 1,
    height: hp(70),
    width: '100%',
    backgroundColor: 'white',
  },
});
export default App;
