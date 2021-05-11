import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Switch,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';

const ProfileAdmin = ({navigation}) => {
  const [switchVal, setSwitchVal] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
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

        <View style={{width: 148, height: 70, paddingLeft: 80}}>
          <Image
            style={{
              width: 45,
              height: 45,
              tintColor: '#fff',
              top: 10,
              alignSelf: 'center',
            }}
            source={require('../Assets/appbar.png')}
          />
        </View>
        <Text style={styles.text}>Home Serve</Text>
      </View>

      <View style={styles.appbarcontainer}>
        <Text style={styles.headingStyle}>Feedbacks</Text>
      </View>
      <TouchableOpacity style={styles.profileContainer}
       onPress={() => navigation.navigate('ProfileDetails')}
      >
        <View style={{flexDirection: 'row', margin: 15}}>
          <Image source={require('../Assets/profile.png')} />
          <View style={styles.profileNameView}>
            <Text style={styles.profileName}>John Smith</Text>
            <Text style={styles.profileNumber}>+91 98765 54321</Text>
            <Text style={styles.profileEmail}>jsmith@example.com</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              style={{marginLeft: 50, marginTop: 20}}
              name="chevron-forward-sharp"
              size={20}
              color="#5F5F82"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.notifyContainer}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <MaterialIcons
            style={{marginLeft: 15}}
            name="notifications-none"
            size={30}
            color="#5F5F82"
          />
          <Text style={styles.notifyName}>Notification</Text>

          <Switch
            style={{marginLeft: 130}}
            rackColor={{false: '#5F5F82', true: '#E5E5E5'}}
            thumbColor={switchVal ? '#5F5F82' : '#E5E5E5'}
            onValueChange={() => setSwitchVal(prevVal => !prevVal)}
            value={switchVal}
          />
        </View>
      </View>
      <Text style={styles.logout}>Logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 414,
    height: 100,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    elevation: 1,
    backgroundColor: Colors.primarycolor,
  },
  logout: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EB5757',
    textDecorationLine: 'underline',
  },
  headingStyle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
  },
  profileText: {
    width: 302,
    height: 62,
    marginTop: 10,
    marginLeft: 16,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
    textAlign: 'justify',
    alignItems: 'center',
    display: 'flex',
  },
  profileName: {
    color: '#5F5F82',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 16.8,
    marginLeft: 20,
  },
  profileNumber: {
    color: '#5F5F82',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16.8,
    marginLeft: 20,
    marginTop: 5,
  },
  profileEmail: {
    color: '#5F5F82',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16.8,
    marginLeft: 20,
    marginTop: 5,
  },
  profileNameView: {
    flexDirection: 'column',
    marginStart: 5,
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: 10,
  },

  appbarcontainer: {
    width: 360,
    height: 50,
    backgroundColor: Colors.primarycolor,
    borderBottomEndRadius: 17,
    borderBottomStartRadius: 17,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  profileContainer: {
    marginTop: 10,
    width: 334,
    height: 100,
    left: 12,
    borderRadius: 8,
    backgroundColor:colors.continercolor,
  },
  notifyContainer: {
    marginTop: 10,
    width: 334,
    height: 70,
    left: 12,
    borderRadius: 8,
    backgroundColor:colors.continercolor,
  },
  notifyName: {
    color: '#5F5F82',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 16.8,
    marginLeft: 20,
    marginTop: 10,
  },
  textInput: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.secondaryText,
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
});
export default ProfileAdmin;
