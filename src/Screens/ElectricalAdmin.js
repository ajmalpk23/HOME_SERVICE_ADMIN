import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/colors';

const ElectricalAdmin = ({navigation}) => {
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
        <Text style={styles.txt2}>Electrical Work</Text>
      </View>
          
         <ScrollView> 
         <View styles={{height:'100%'}}>
         
        
         {/* firsr row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around',top:'10%'}}>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('Sanitizationservices', {head: 'Switch & Socket'});
              }}>
              <Image
                source={require('../../Assets/adm/switch.png')}
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('Sanitizationservices', {head: 'Fan'}); }}
                >
              <Image
                source={require('../../Assets/adm/fan.png')}
                style={{}}
              />
            </TouchableOpacity>
            
            </View>

            {/* second row */}
          <View style={{top:'25%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Sanitizationservices', {head: 'light'});
                }}>
                <Image
                  source={require('../../Assets/adm/light.png')}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Sanitizationservices', {head: 'Wiring'});
                }}>
                <Image
                  source={require('../../Assets/adm/wiring.png')}
                  style={{}}
                />
              </TouchableOpacity>
              </View>
              </View>

               {/* Third row */}
               {/* <View styles={{height:590}}> */}
          <View style={{top:'40%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Sanitizationservices', {head: 'Inverter & Stabilizer'});
                }}>
                <Image
                  source={require('../../Assets/adm/inverter.png')}
                  style={{}}
                />
              </TouchableOpacity>
                <TouchableOpacity
                style={styles.continer}
                  onPress={() => {
                  navigation.navigate('Sanitizationservices', {head: 'Room Heater'});
                }}>
                <Image
                  source={require('../../Assets/adm/heater.png')}
                  style={{}}
                />
              </TouchableOpacity> 
              </View> 
              </View>

              {/*fourth row*/}

              <View style={{top:'40%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Sanitizationservices', {head: 'MCB & Fuse'});
                }}>
                <Image
                  source={require('../../Assets/adm/fuse.png')}
                  style={{}}
                />
              </TouchableOpacity>
                <TouchableOpacity
                style={styles.continer}>
                 
              </TouchableOpacity> 
              </View> 
              </View>
              {/* </View> */}
          
        </View>
         </ScrollView> 
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
    height: 112,
    width: 112,
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
export default ElectricalAdmin;










































