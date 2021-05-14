import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Order = () => {
  const navigation = useNavigation();
  const [text, setText] = useState([
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '1',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '2',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '3',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '4',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '5',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '6 ',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '7 ',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '8 ',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '9 ',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '10 ',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '11',
    },
    {
      text1: 'HomeSanitization | 1BHK',
      value: 'wed | 05-05-2021',
      name: 'Aditya Menon',
      key: '12',
    },
  ]);

  return (
    <View style={{backgroundColor: colors.backgroundcolor, height: '100%'}}>
      
        <View style={styles.header}>
          <TouchableOpacity
            style={{bottom: 5, left: 20, top: 10}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={{top: 10}}
              name="left"
              size={20}
              color={colors.backgroundcolor}
            />
          </TouchableOpacity>

          <View style={{width: 148, height: 47, paddingLeft: 90, top: 10}}>
            <Image
              style={{width: 45, height: 45, tintColor: '#fff'}}
              source={require('../../Assets/appbar.png')}
            />
          </View>
          <Text style={styles.text}>HOME SERVE</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.primarycolor,
            height: 45,
            borderBottomLeftRadius: 15,
            borderBottomEndRadius: 15,
            zIndex: 1,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: '700',
              color: colors.backgroundcolor,
            }}>
            Order Details
          </Text>
        </View>
        <ScrollView style={{height: 700}}>
        <View style={styles.container}>
          {text.map(item => {
            return (
              <TouchableOpacity style={styles.container1} key={item.key} onPress={() => navigation.navigate('Orderdetails')}>
                <Text style={styles.item}>{item.text1}</Text>
                <Text style={{color: colors.secondaryText, top: 10, left: 10}}>
                  {item.value}
                </Text>
                <Text style={{color: colors.secondaryText, top: 10, left: 10}}>
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Orderdetails')}
                  style={{top: 5, left: 290, top: 10}}>
                  <AntDesign
                    style={styles.iconItem}
                    name="right"
                    size={20}
                    color={colors.secondaryText}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default Order;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    elevation: 0,
    backgroundColor: colors.primarycolor,
  },
  text: {
    fontSize: 17,

    fontWeight: '700',
    color: colors.backgroundcolor,
    paddingLeft: -3,
    top: 5,
  },

  container1: {
    backgroundColor: colors.continercolor,
    width: 340,
    paddingTop: 10,
    height: 100,
    borderRadius: 9,
    // top:5,
    left: 10,

    flexDirection: 'column',

    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    color: colors.primarycolor,
    fontSize: 16,
    fontWeight: '700',
    top: 5,
    left: 10,
  },
  iconItem: {
    bottom: 45,
  },
});
