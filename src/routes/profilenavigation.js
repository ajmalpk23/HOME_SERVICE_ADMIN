import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


import Profile from '../Screens/Profile'
import ProfileDetails from '../Screens/ProfileDetails'



const ProfileNav = createStackNavigator();
export default profilenavigation = () => {
  return (
    <ProfileNav.Navigator initialRouteName='Profile' headerMode={false}>
      <ProfileNav.Screen name='Profile' component={Profile} />
      <ProfileNav.Screen name='ProfileDetails' component={ProfileDetails} />
      

    </ProfileNav.Navigator>
  );
};
