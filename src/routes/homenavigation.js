import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from '../Screens/home'
import Feedback from '../Screens/Feedback'
import UpdateServicepricing from '../Screens/update service pricing/updateServicepricing'
import UpdateServicepartners from '../Screens/update service partners/UpdateServicepartners'
import CleaningAdmin from '../Screens/update service pricing/CleaningAdmin'
import ACserviceAdmin from '../Screens/update service pricing/ACserviceAdmin'
import ApplianceAdmin from '../Screens/update service pricing/ApplianceAdmin'
import PlumbingAdmin from '../Screens/update service pricing/PlumbingAdmin'
import InteriorAdmin from '../Screens/update service pricing/InteriorAdmin'
import ElectricalAdmin from '../Screens/update service pricing/ElectricalAdmin'
import Order from '../Screens/view order details/Order'
import Orderdetails from '../Screens/view order details/Orderdetails'
import Sanitizationservices from '../Screens/Sanitizationservices'
import Servicepartners from '../Screens/servicepartners';
const HomeNav = createStackNavigator();
export default Homenavigation = () => {
  return (
    <HomeNav.Navigator initialRouteName='Home' headerMode={false}>
      <HomeNav.Screen name='Home' component={Home} />
      <HomeNav.Screen name='Feedback' component={Feedback} />
      <HomeNav.Screen name='UpdateServicepricing' component={UpdateServicepricing} />
      <HomeNav.Screen name='UpdateServicepartners' component={UpdateServicepartners} />
      <HomeNav.Screen name='CleaningAdmin' component={CleaningAdmin} />
      <HomeNav.Screen name='ACserviceAdmin' component={ACserviceAdmin} />
      <HomeNav.Screen name='ApplianceAdmin' component={ApplianceAdmin} />
      <HomeNav.Screen name='PlumbingAdmin' component={PlumbingAdmin} />
      <HomeNav.Screen name='InteriorAdmin' component={InteriorAdmin} />
      <HomeNav.Screen name='ElectricalAdmin' component={ElectricalAdmin} />
      <HomeNav.Screen name='Sanitizationservices' component={Sanitizationservices}/> 
      <HomeNav.Screen name='Servicepartners' component={Servicepartners}/> 
      <HomeNav.Screen name='Order' component ={Order}/>
      <HomeNav.Screen name='Orderdetails' component={Orderdetails}/>
    </HomeNav.Navigator>
  );
};
