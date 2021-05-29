import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ColorPropType,
} from 'react-native';
import colors from '../config/colors';

import Colors from '../config/colors';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default Login = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);

  const [username, setusername] = useState('');
  return (
    <View style={{backgroundColor: colors.backgroundcolor, height: '100%'}}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../Assets/appbar.png')}></Image>
        <Text style={styles.txt}> HOME SERVE</Text>
        <Text style={styles.txt1}>ADMIN LOGIN</Text>
      </View>
      <View style={styles.view2}>
        <View style={{top: 30}}>
          <Text style={{color: Colors.secondaryText}}>
            Email ID / Mobile No.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Email ID / Mobile No."
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            // left={35}
            onChangeText={name => setusername(name)}></TextInput>
        </View>
        <View style={{top: 50}}>
          <Text style={{color: Colors.secondaryText}}>Password</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Password"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              inlineImageLeft="search_icon"
              // left={35}
              onChangeText={name => setusername(name)}></TextInput>
            <Icon
              name={hidePass ? 'eye-slash' : 'eye'}
              style={{top: 18, right: 30}}
              size={15}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
        </View>
        <Text style={styles.forgot}> Forgot password ?</Text>
        <TouchableOpacity
          style={styles.loginbtn}
          onPress={() => navigation.navigate('MyTabs')}>
          <Text style={styles.logintxt}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primarycolor,
    height: 210,
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  img: {
    tintColor: Colors.backgroundcolor,
    height: 55,
    width: 55,
    alignSelf: 'center',
    top: 40,
  },
  txt: {
    color: Colors.backgroundcolor,
    alignSelf: 'center',
    fontWeight: 'bold',
    top: 60,
    fontSize: 17,
  },
  txt1: {
    color: Colors.backgroundcolor,
    fontWeight: '400',
    alignSelf: 'center',
    top: 80,
    fontSize: 20,
  },
  view2: {
    width: '100%',
    left: '4%',
    right: '4%',
  },
  textInput: {
    marginTop: 5,
    width: '92%',
    height: 40,
    elevation: 0,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(51, 52, 88, 0.06)',
  },
  forgot: {
    color: Colors.secondaryText,
    alignSelf: 'flex-end',
    top: 55,
    right: 25,
  },
  loginbtn: {
    height: 40,
    backgroundColor: Colors.primarycolor,
    width: '92%',
    borderRadius: 10,
    top: 90,
  },
  logintxt: {
    color: Colors.backgroundcolor,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: 10,
  },
});
