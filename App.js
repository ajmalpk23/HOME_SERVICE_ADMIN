import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import MyTabs from './src/routes/bottomtabnavigation';
import Login from './src/routes/Loginnavigation';

const Stack = createStackNavigator();

export default HomeSerice = () => {
  return (
    <NavigationContainer>
      {/* <MyTabs /> */}


      <Login />
    </NavigationContainer>
  );
};
