import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './screens/login';
import signup from './screens/signup';
import drawer from './screens/drawer';
import categories from './screens/categories';
import filters from './screens/filter';
import details from './screens/addetailspage';
import maps from './screens/maps';
import placebids from './screens/placebid';
import editprofile from './screens/editprofile';
import vendorprofile from './screens/vendordetails';
import contact from './screens/contactseller';
import billing from './screens/billing';
import allbids from './screens/allbids';
import postads from './screens/addpost';

import { useSelector } from 'react-redux';

const App = () => {
  const Stack = createStackNavigator();
  const data = useSelector(state => state);

  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({ fade: true });
      }}>
      <Stack.Navigator>
        {data.log.loggedin ? (
          <>
            <Stack.Screen
              name="drawer"
              component={drawer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="categories"
              component={categories}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="filters"
              component={filters}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={details}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Maps"
              component={maps}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlaceBids"
              component={placebids}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={editprofile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VendorProfile"
              component={vendorprofile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactSeller"
              component={contact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Billing Address"
              component={billing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="All Bids"
              component={allbids}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Post Ads"
              component={postads}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="signup"
              component={signup}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
