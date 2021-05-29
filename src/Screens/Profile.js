import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Switch,
  ToastAndroid
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../config/colors';

const ProfileAdmin = ({navigation}) => {
  const [switchVal, setSwitchVal] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: Colors.background,height:'100%'}}>
       <View style={styles.header}>
        <TouchableOpacity
          style={{top:'30%' , left: 20}}
          onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={Colors.backgroundcolor}
          />
        </TouchableOpacity>

        <View style={styles.headerView}>
          <Image
            style={styles.img}
            source={require('../Assets/appbar.png')}
          />
        
        <Text style={styles.txt}>Home Serve</Text>
      </View>
       <Text style={styles.txt2}> Profile</Text>
       </View>
      {/* <View style={styles.appbarcontainer}>
        <Text style={styles.headingStyle}>Profile</Text>
      </View> */}
      <TouchableOpacity style={styles.profileContainer}
       onPress={() => navigation.navigate('ProfileDetails')}
      >
        <View style={{flexDirection: 'row', margin: 15}}>
        <FontAwesome name='user-circle' color='rgba(95, 95, 130, 1)' size={65} 
          style={{justifyContent:'center',}} /> 
          <View style={styles.profileNameView}>
            <Text style={styles.profileName}>John Smith</Text>
            <Text style={styles.profileNumber}>+91 98765 54321</Text>
            <Text style={styles.profileEmail}>jsmith@example.com</Text>
          </View>
            <Ionicons
              style={{right: -60, marginTop: 23}}
              name="chevron-forward-sharp"
              size={20}
              color="#5F5F82"
            />
        </View>
      </TouchableOpacity>
      <View style={styles.notifyContainer}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Feather
            style={{left: 20}}
            name="bell"
            size={30}
            color="#5F5F82"
          />
          <Text style={styles.notifyName}>Notification</Text>

          <Switch
            style={{left: 150}}
            rackColor={{false: '#5F5F82', true: '#E5E5E5'}}
            thumbColor={switchVal ? '#5F5F82' : '#E5E5E5'}
            onValueChange={() => setSwitchVal(prevVal => !prevVal)}
            value={switchVal}
          />
        </View>
      </View>
      <View style={styles.logoutContainer}>
      <TouchableOpacity style={{flexDirection: 'row', marginTop: 15}}
      onPress={() =>{ 
        navigation.navigate('LoginScreen');
        ToastAndroid.show('Logout',2000)
        }}>
      <AntDesign
            style={{left: 20,top:5}}
            name="logout"
            size={25}
            color="#5F5F82"
          />
      <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // header: {
  //   width: 414,
  //   height: 100,
  //   flexDirection: 'row',
  //   paddingTop: 1,
  //   alignItems: 'center',
  //   elevation: 1,
  //   backgroundColor: Colors.primarycolor,
  // },
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
    top: '30%',
  },
  logout: {
    color: '#5F5F82',
    fontWeight: '900',
    fontSize: 18,
    lineHeight: 16.8,
    left: 30,
    marginTop: 10,
  },
  // headingStyle: {
  //   marginTop: 10,
  //   marginBottom: 10,
  //   right:20,
  //   fontSize: 16,
  //   fontWeight: '900',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   fontWeight: 'bold',
  //   alignSelf:'center',
  //   color: Colors.backgroundcolor,
  // },
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
  // text: {
  //   fontSize: 20,
  //   fontWeight: '900',
  //   fontWeight: 'bold',
  //   color: Colors.backgroundcolor,
  //   right: '10%',
  //   alignSelf:'center'
  // },

  // appbarcontainer: {
  //   width: 395,
  //   height: 50,
  //   backgroundColor: Colors.primarycolor,
  //   borderBottomEndRadius: 17,
  //   borderBottomStartRadius: 17,
  // },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  profileContainer: {
    marginTop: 10,
    width: '92%',
    height: 100,
    left: '4%',
    right:'4%',
    borderRadius: 8,
    backgroundColor:colors.continercolor,
  },
  notifyContainer: {
    marginTop: 10,
    width: '92%',
    height: 70,
    left: '4%',
    right:'4%',
    borderRadius: 8,
    backgroundColor:colors.continercolor,
  },
  logoutContainer: {
    marginTop: 10,
    width: '92%',
    height: 70,
    left: '4%',
    right:'4%',
    borderRadius: 8,
    backgroundColor:colors.continercolor,
  },
  notifyName: {
    color: '#5F5F82',
    fontWeight: '900',
    fontSize: 17,
    lineHeight: 16.8,
    left: 25,
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
