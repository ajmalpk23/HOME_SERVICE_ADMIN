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
          <View style={Styles.headerview}>
          <Image
            source={require('../Assets/appbar.png')}
            style={Styles.img}></Image>
          <Text style={Styles.txt}> HOME SERVE</Text>
        </View>
        <Text style={Styles.txt2}>Home</Text>
      </View>
          {/* <View style={{width: 148, height: 47, paddingLeft: 90}}>
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

          <Text style={styles.headingStyle}>Update Service Pricing</Text>
        </View> */}

        <View style={styles.categorycontainer}>
          <TouchableOpacity
            style={styles.categorybtn}
           onPress={()  => navigation.navigate('CleaningAdmin')}>
            <View style={styles.categoryicon}>
              <Image
                source={require('../../Assets/Images/Cleaning.jpg')}
                style={{borderRadius: 14}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn1} 
           onPress={() => navigation.navigate('ACserviceAdmin')}
          >
            <View style={styles.categoryicon1}>
              <Image
                source={require('../../Assets/Images/AC.jpg')}
                style={{borderRadius: 14}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.categorycontainer2}>
          <TouchableOpacity style={styles.categorybtn2} 
          onPress={() => navigation.navigate('ApplianceAdmin')}>
            <View style={styles.categoryicon2}>
              <Image
                source={require('../../Assets/Images/Appliance.jpg')}
                style={{borderRadius: 14}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn3} 
          onPress={() => navigation.navigate('PlumbingAdmin')}
          >
            <View style={styles.categoryicon3}>
              <Image
                source={require('../../Assets/Images/Plumbing.jpg')}
                style={{borderRadius: 14}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.categorycontainer3}>
          <TouchableOpacity style={styles.categorybtn4} 
           onPress={() => navigation.navigate('InteriorAdmin')}
          >
            <View style={styles.categoryicon4}>
              <Image
                source={require('../../Assets/Images/Designing.jpg')}
                style={{borderRadius: 14}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn5} 
          onPress={() => navigation.navigate('ElectricalAdmin')}
          >
            <View style={styles.categoryicon5}>
              <Image
                source={require('../../Assets/Images/Electrical.jpg')}
                style={{borderRadius: 14}}
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
  headingStyle: {
    marginTop: 95,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    left: '-83%',
    paddingLeft: -40,
    paddingRight: 10,
  },
  buttonViewStyle: {
    left: '4%',
    right: '4%',
    top: 12,
    height: 90,
  },
  cardContainer: {
    marginTop: 10,
    flex: 2,
  },
  cardStyle: {
    marginTop: 5,
    backgroundColor: Colors.backgroundcolor,
    borderRadius: 16,
    left: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 6,
  },
  categorycontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
  categorycontainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    marginBottom: 20,
    marginRight: 10,
    borderRadius: 16,
    marginLeft: 10,
    borderRadius: 20,
  },
  categorycontainer3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    marginBottom: 32,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
  },

  categoryicon: {
    flex: 1,
    alignItems: 'center',
    marginBottom: -35,
    justifyContent: 'center',
    marginTop: 0,
    paddingLeft: 25,
    borderRadius: 5,
  },
  categoryicon1: {
    flex: 1,
    alignItems: 'center',
    marginBottom: -35,
    justifyContent: 'center',
    marginTop: 0,
    borderRadius: 5,
  },
  categoryicon2: {
    flex: 1,
    alignItems: 'center',
    marginBottom: -35,
    justifyContent: 'center',
    marginTop: 0,
    paddingLeft: 28,
    borderRadius: 5,
  },
  categoryicon3: {
    flex: 1,
    alignItems: 'center',
    marginBottom: -35,
    justifyContent: 'center',
    marginTop: 0,
    borderRadius: 5,
  },
  categoryicon4: {
    flex: 1,
    alignItems: 'center',
    marginBottom: -35,
    justifyContent: 'center',
    marginTop: 0,
    paddingLeft: 28,
    borderRadius: 5,
  },
  categoryicon5: {
    flex: 1,
    alignItems: 'center',
    marginBottom: -35,
    justifyContent: 'center',
    marginTop: 0,
    borderRadius: 20,
  },

  categorybtn: {
    flex: 1,
    width: 15,
    marginBottom: 5,
    marginLeft: 2,
    borderRadius: 9,
    marginRight: 20,
  },
  categorybtn1: {
    flex: 1,
    width: 15,
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 20,
    borderRadius: 9,
  },
  categorybtn2: {
    flex: 1,
    width: 15,
    marginBottom: 5,
    borderRadius: 9,
    marginLeft: 2,
    marginRight: 20,
  },
  categorybtn3: {
    flex: 1,
    width: 15,
    marginBottom: 5,
    marginLeft: 2,
    borderRadius: 9,
    marginRight: 20,
  },
  categorybtn4: {
    flex: 1,
    width: 15,
    marginBottom: 5,
    borderRadius: 9,
    marginLeft: 2,
    marginRight: 20,
  },
  categorybtn5: {
    flex: 1,
    width: 15,
    marginBottom: 5,
    marginLeft: 2,
    borderRadius: 9,
    marginRight: 20,
  },

  text: {
    fontSize: 15,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: -7,
    bottom: 30,
  },

  appbarcontainer: {
    width: 360,
    height: 50,
    backgroundColor: Colors.primarycolor,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconItem: {
    marginBottom: 50,
    paddingLeft: -5,
    left: -15,
    bottom: 10,
  }, img: {
    height: '220%',
    width: '15%',
    tintColor: Colors.backgroundcolor,
  },
});
export default Servicepricing;
