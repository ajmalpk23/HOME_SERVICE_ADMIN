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
import Colors from '../../config/colors';

const ElectricalAdmin = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{bottom: 5, left: 20}}
          onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={Colors.backgroundcolor}
          />
        </TouchableOpacity>
        <View style={{width: 148, height: 47, paddingLeft: 80}}>
          <Image
            style={{
              flex: 1,
              width: 48,
              height: 10,
              bottom: 32,
              left: 5,
              tintColor: '#fff',
            }}
            source={require('../../Assets/Images/Home.png')}
          />
        </View>
        <Text style={styles.text}>HOME SERVE</Text>

        <Text style={styles.headingStyle}>Electrical Work</Text>
      </View>
      <ScrollView>
        <View style={styles.categorycontainer}>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() =>
              navigation.navigate('Sanitizationservices', {
                head: 'Switch & Socket',
              })
            }>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/switch.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() =>
              navigation.navigate('Sanitizationservices', {head: 'Fan'})
            }>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/fan.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer}>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() =>
              navigation.navigate('Sanitizationservices', {head: 'light'})
            }>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/light.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() =>
              navigation.navigate('Sanitizationservices', {head: 'Wiring'})
            }>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/wiring.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer2}>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() =>
              navigation.navigate('Sanitizationservices', {
                head: 'Inverter & Stabilizer',
              })
            }>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/inverter.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() =>
              navigation.navigate('Sanitizationservices', {head: 'Room Heater'})
            }>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/heater.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer1}>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() =>
              navigation.navigate('Sanitizationservices', {head: 'MCB & Fuse'})
            }>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/fuse.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    elevation: 1,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    backgroundColor: Colors.primarycolor,
  },
  categorycontainer1: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
  },

  categorycontainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
  },

  categorycontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
  },
  categoryicon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorybtn: {
    flex: 1,
    marginTop: 15,
    marginLeft: 22,
    marginRight: 20,
  },
  //   headingStyle: {
  //     marginTop: 10,
  //     marginBottom: 10,
  //     fontSize: 16,
  //     fontWeight: '900',
  //     textAlign: 'center',
  //     alignItems: 'center',
  //     fontWeight: 'bold',
  //     color: Colors.text,
  //   },

  //   text: {
  //     fontSize: 20,
  //     fontWeight: '900',
  //     fontWeight: 'bold',
  //     color: Colors.text,
  //     paddingLeft: 10,
  //   },

  appbarcontainer: {
    width: 360,
    height: 50,
    backgroundColor: Colors.Appbar,
    borderBottomEndRadius: 17,
    borderBottomStartRadius: 17,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  textInput: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.text,
    fontSize: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  containers: {
    flex: 1,

    flexDirection: 'column',
  },
  img: {
    width: 120,
    height: 120,
  },
  iconItem: {
    marginBottom: 50,
    paddingLeft: -5,
    left: -15,
    bottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    right:8,
    bottom: 30,
  },
  headingStyle: {
    marginTop: 95,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.backgroundcolor,
    right: '85%',
    // paddingLeft: -40,
    //paddingRight: 10,
  },
});
export default ElectricalAdmin;
