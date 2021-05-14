import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './bottomtabnavigation';
import LoginScreen from '../Screens/Login';

import Splash from '../Screens/Splash'

const Login = createStackNavigator();

export default IntroNav = () => {
  return (
    <Login.Navigator
      initialRouteName='Splash'
      screenOptions={{headerShown: false}}>
        <Login.Screen name="Splash" component={Splash} options={{}} />
      <Login.Screen name="LoginScreen" component={LoginScreen} options={{}} />
      <Login.Screen name="MyTabs" component={MyTabs} />
      
    </Login.Navigator>
  );
};
