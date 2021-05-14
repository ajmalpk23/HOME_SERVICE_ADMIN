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

const PlumbingAdmin = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      <ScrollView>
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
          <View style={{width: 148, height: 47, paddingLeft: 90}}>
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

          <Text style={styles.headingStyle}>Plumbing Work</Text>
        </View>

        <View style={styles.categorycontainer}>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() => navigation.navigate('Sanitizationservices', {head: 'Basin & Sink'})}>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/sink.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() => navigation.navigate('Sanitizationservices', {head: 'Tap & Mixer'})}>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/tap.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer}>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() => navigation.navigate('Sanitizationservices', {head: 'Motor'})}>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/motor.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() => navigation.navigate('Sanitizationservices', {head: 'Toilet'})}>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/toilet.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer1}>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() => navigation.navigate('Sanitizationservices', {head: 'Bath Fitting'})}>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/adm/bath.png')}
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
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 10,
    marginLeft: 5,
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
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorybtn: {
    flex: 1,
    marginTop: 15,
    marginLeft: 20,
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
    flex: 4,

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
    paddingLeft: -7,
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
    color: Colors.backgroundcolor,
    left: -150,
    paddingLeft: -40,
    paddingRight: 10,
  },
});
export default PlumbingAdmin;
