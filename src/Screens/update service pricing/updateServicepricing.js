import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/colors';

const Servicepricing = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor,height:'100%'}}>
     
        <View style={styles.header}>
          <TouchableOpacity
            style={{top:'30%', left: 20}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={Colors.backgroundcolor}
            />
          </TouchableOpacity>
          <View style={styles.headerview}>
          <Image
            source={require('../../Assets/appbar.png')}
            style={styles.img}></Image>
          <Text style={styles.txt}> HOME SERVE</Text>
        </View>
        <Text style={styles.txt2}>Update Service Pricing</Text>
      </View>
          
        {/* <ScrollView styles={{height:900}}> */}
         <View styles={{height:'100%'}}>
         
        
         {/* firsr row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around',top:'10%'}}>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('CleaningAdmin');
              }}>
              <Image
                source={require('../../Assets/Images/Cleaning.jpg')}
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('ACserviceAdmin'); }}
                >
              <Image
                source={require('../../Assets/Images/AC.jpg')}
                style={{}}
              />
            </TouchableOpacity>
            
            </View>

            {/* second row */}
          <View style={{top:'20%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('ApplianceAdmin');
                }}>
                <Image
                  source={require('../../Assets/Images/Appliance.jpg')}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('PlumbingAdmin');
                }}>
                <Image
                  source={require('../../Assets/Images/Plumbing.jpg')}
                  style={{}}
                />
              </TouchableOpacity>
              </View>
              </View>

               {/* Third row */}
               {/* <View styles={{height:590}}> */}
          <View style={{top:'30%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('InteriorAdmin');
                }}>
                <Image
                  source={require('../../Assets/Images/Designing.jpg')}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('ElectricalAdmin');
                }}>
                <Image
                  source={require('../../Assets/Images/Electrical.jpg')}
                  style={{}}
                />
              </TouchableOpacity>
              </View>
              </View>
              {/* </View> */}
          
        </View>
        {/* </ScrollView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primarycolor,
    width: '100%',
    height:'23%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerview: {
    flexDirection: 'row',
    bottom: '14%',
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
    bottom: '5%',
  },
  continer: {
    backgroundColor: Colors.backgroundcolor,
    height: 120,
    width: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  iconItem: {
    marginBottom: 50,
     paddingLeft: -5,
    left: -15,
    bottom: 10,
   },
});
export default Servicepricing;
