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
import Colors from '../config/colors';
import {Rating} from 'react-native-ratings';
import {TextInput} from 'react-native';

const ProdetAdmin = ({navigation}) => {
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
        <Text style={styles.headingStyle}>Profile Details</Text>
      </View>
        <View style={styles.container}>
          <Image source={require('../Assets/profile.png')} />
        </View>
        <View style={styles.labelContainer}>
          <View>
            <Text style={styles.labelText}>Name</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'John Smith'}
              placeholderTextColor="#dcdcdc"></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Mobile Number</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'9876554321'}
              placeholderTextColor="#dcdcdc"></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Email ID</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'jsmith@example.com'}
              placeholderTextColor="#dcdcdc"></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'**********'}
              placeholderTextColor="#dcdcdc"></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Confirm Password</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'**********'}
              placeholderTextColor="#dcdcdc"></TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn1}
          >
            <Text style={{fontWeight: 'bold', marginTop: 10}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}
           onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: Colors.backgroundcolor,
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

  text: {
    fontSize: 20,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: 10,
  },
  labelContainer: {
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
  },
  appbarcontainer: {
    width: 360,
    height: 50,
    backgroundColor: Colors.primarycolor,
    borderBottomEndRadius: 17,
    borderBottomStartRadius: 17,
  },
  labelText: {
    fontWeight: 'bold',
    color: '#5F5F82',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  txtInput: {
    borderRadius: 8,
    borderColor: '#dcdcdc',
    margin: 10,
    borderWidth: 2,
    width: 340,
    height: 40,
    alignItems: 'center',
  },
  btn1: {
    borderRadius: 8,
    borderColor: Colors.primarycolor,
    marginRight: 20,
    borderWidth: 2,
    width: 96,
    height: 40,
    alignItems: 'center',
  },
  btn2: {
    borderRadius: 8,
    backgroundColor: Colors.primarycolor,
    width: 96,
    height: 40,
    alignItems: 'center',
  },

  textInput: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.text,
    fontSize: 20,
  },
  button: {
    backgroundColor: Colors.primarycolor,
    width: '40%',
    height: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default ProdetAdmin;
