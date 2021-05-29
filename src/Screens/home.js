import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Colors from '../config/colors';

export default Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.backgroundcolor, height: '100%'}}>
      <View style={Styles.header}>
        <View style={Styles.headerview}>
          <Image
            source={require('../Assets/appbar.png')}
            style={Styles.img}></Image>
          <Text style={Styles.txt}> HOME SERVE</Text>
        </View>
        <Text style={Styles.txt2}>Home</Text>
      </View>
      <View style={{width: '92%', left: '4%', right: '4%', top: 20,}}>
        <TouchableOpacity
         onPress={() => navigation.navigate('UpdateServicepricing')}
          style={{
            backgroundColor: Colors.continercolor,
            height: 100,
            borderRadius: 15,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assets/price.png')}
            style={{height: 60, width: 60, top: 20, left: 15}}></Image>
          <Text
            style={{
              color: Colors.secondaryText,
              fontSize: 16,
              fontWeight: '700',
              top: 40,
              left: 30,
            }}>
            Update Service Pricing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.navigate('UpdateServicepartners')}
          style={{
            backgroundColor: Colors.continercolor,
            height: 100,
            borderRadius: 15,
            flexDirection: 'row',
            top:20
          }}>
          <Image
            source={require('../Assets/ups.png')}
            style={{height: 60, width: 60, top: 20, left: 15}}></Image>
          <Text
            style={{
              color: Colors.secondaryText,
              fontSize: 16,
              fontWeight: '700',
              top: 40,
              left: 30,
            }}>
            Update Service Partners
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.navigate('Order')}
          style={{
            backgroundColor: Colors.continercolor,
            height: 100,
            borderRadius: 15,
            flexDirection: 'row',
            top:40
          }}>
        {/* <View
          style={{
            backgroundColor: Colors.continercolor,
            height: 100,
            borderRadius: 15,
            flexDirection: 'row',top:40
          }}> */}
          <Image
            source={require('../Assets/vod.png')}
            style={{height: 60, width: 40, top: 20, left: 25}}></Image>
          <Text
            style={{
              color: Colors.secondaryText,
              fontSize: 16,
              fontWeight: '700',
              top: 40,
              left: 45,
            }}>
           View Order Details
          </Text>
          </TouchableOpacity>
        {/* </View> */}
        <TouchableOpacity
         onPress={() => navigation.navigate('Feedback')}
          style={{
            backgroundColor: Colors.continercolor,
            height: 100,
            borderRadius: 15,
            flexDirection: 'row',top:60,
          }}>
          <Image
            source={require('../Assets/vf.png')}
            style={{height: 50, width: 55, top: 25, left: 15}}></Image>
          <Text
            style={{
              color: Colors.secondaryText,
              fontSize: 16,
              fontWeight: '700',
              top: 40,
              left: 30,
            }}>
            View Feedbacks
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primarycolor,
    width: '100%',
    height:'23%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerview: {
    flexDirection: 'row',
    top: '8%',
    alignSelf: 'center',
    right:'5%'
  },
  img: {
    height: '220%',
    width: '15%',
    tintColor: Colors.backgroundcolor,
    
  },
  txt: {
    color: Colors.backgroundcolor,
    fontWeight: 'bold',
    fontSize: 17,
    top: 12,
    //left: 1,
  },
  txt2: {
    color: Colors.backgroundcolor,
    fontWeight: '700',
    fontSize: 15,
    alignSelf: 'center',
    top: 70,
  },
});
