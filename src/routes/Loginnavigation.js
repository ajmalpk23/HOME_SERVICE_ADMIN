import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './bottomtabnavigation';
import LoginScreen from '../Screens/Login';

const Login = createStackNavigator();

export default IntroNav = () => {
  return (
    <Login.Navigator
      initialRouteName={LoginScreen}
      screenOptions={{headerShown: false}}>
      <Login.Screen name="LoginScreen" component={LoginScreen} options={{}} />
      <Login.Screen name="MyTabs" component={MyTabs} />
      
    </Login.Navigator>
  );
};
