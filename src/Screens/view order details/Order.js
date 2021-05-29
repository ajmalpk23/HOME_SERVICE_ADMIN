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
import Colors from '../../config/colors';
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
    <View style={{backgroundColor: colors.backgroundcolor, height: '100%',flex:1}}>
      
        <View style={styles.header}>
          <TouchableOpacity
            style={{ left: 20, top:'55%'}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={colors.backgroundcolor}
            />
          </TouchableOpacity>

          <View style={styles.headerView}>
            <Image
              style={styles.img}
              source={require('../../Assets/appbar.png')}
            />
          
          <Text style={styles.txt}>HOME SERVE</Text>
        </View>
         {/* <View
          style={{
            backgroundColor: colors.primarycolor,
            height: 45,
            borderBottomLeftRadius: 15,
            borderBottomEndRadius: 15,
            zIndex: 1,
          }}>  */}
          <Text
            style={styles.txt2}>
            Order Details
          </Text>
        </View>
        <ScrollView>
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
                  style={{ left: 300, bottom: '8%',justifyContent:'flex-end'}}>
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
    backgroundColor: Colors.primarycolor,
    width: '100%',
    height:'23%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerView: {
    flexDirection: 'row',
    top: '1%',
    alignSelf: 'center',
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
    left: 4,
  },
  txt2: {
    color: Colors.backgroundcolor,
    fontWeight: '700',
    fontSize: 15,
    alignSelf: 'center',
    top: '27%',
  },
  // text: {
  //   fontSize: 17,

  //   fontWeight: '700',
  //   color: colors.backgroundcolor,
  //   right:'15%',
  //   top: 5,
  // },

  container1: {
    backgroundColor: colors.continercolor,
    width:'92%',
    bottom: '1%',
    height: 100,
    borderRadius: 10,
    // top:5,
    left: '4%',
    right:'4%',
     justifyContent:'flex-start',
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
