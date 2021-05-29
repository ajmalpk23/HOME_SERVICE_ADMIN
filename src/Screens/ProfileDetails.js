import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  ImageBackground,
  ToastAndroid,
  StatusBar
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {Rating} from 'react-native-ratings';
import {TextInput} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import RNModal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProdetAdmin = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [image, setImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(0);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(0);
    });
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(0)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.bottomHeader}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  // fall = new Animated.Value(1);
  const[passLength,setPasslength] =useState(0);
  const [mobno, setMobileno] = useState('')
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

          <View style={styles.headerView}>
            <Image
              style={styles.img}
              source={require('../Assets/appbar.png')}
            />
          
          <Text style={styles.txt}>Home Serve</Text>
          </View>
          <Text style={styles.txt2}>Profile Details</Text>
        </View>

       
        <ScrollView>
        <View style={styles.container}>
          
        <View style={styles.containerDP}>
         
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              toggleModal();
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
            {/* modal */}
            <Modal
              isVisible={isModalVisible}
              hasBackdrop={true}
              backdropOpacity={0}
              style={{backgroundColor: 'rgba(52, 52, 52, alpha)',margin:0,padding:0}}
              onBackdropPress={() => {
                toggleModal();
              }}>
              <View style={{bottom: -240,margin:0,padding:0}}>
                <View style={styles.panel}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>
                      Choose Your Profile Picture
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={takePhotoFromCamera}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={choosePhotoFromLibrary}>
                    <Text style={styles.panelButtonTitle}>
                      Choose From Library
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={() => {
                      // bs.current.snapTo(0);
                      toggleModal();
                    }}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* modal end */}
          </TouchableOpacity>
        </View>
         
        </View>
        <View style={styles.labelContainer}>
          <View>
            <Text style={styles.labelText}>Name</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'Enter fullname'}
              placeholderTextColor="#dcdcdc"
              textContentType='name'
              autoCompleteType='name'
              returnKeyType='next'></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Mobile Number</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'Enter Mobile Number'}
              placeholderTextColor="#dcdcdc"
              textContentTyp='telephoneNumber'
              keyboardType='phone-pad'
              autoCapitalize='none'
              onChangeText={(num)=>setMobileno(num)}
              autoCorrect={false }></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Email ID</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'Enter your Email-ID'}
              placeholderTextColor="#dcdcdc"
              textContentType='emailAddress'
              keyboardType='email-address'
              autoCapitalize='none'
              returnKeyType='next'></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'Enter your Password'}
              placeholderTextColor="#dcdcdc"
              textContentType='password'
              autoCapitalize='none'
              onChangeText={(text)=>{setPasslength(text.length);}}
              secureTextEntry={true}
              returnKeyType='next'></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Confirm Password</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'Re-enter your Password'}
              placeholderTextColor="#dcdcdc"
              textContentType='password'
              autoCapitalize='none'
              onChangeText={(text)=>{setPasslength(text.length);}}
              secureTextEntry={true}
              returnKeyType='done'></TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn1}
          onPress={() => {
            ToastAndroid.show('Cancelled',2000)
          }}>
            <Text style={{fontWeight: 'bold', marginTop: 10}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {navigation.goBack()
              ToastAndroid.show('Updated',2000)}}>
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
  // header: {
  //   width: 414,
  //   height: 100,
  //   flexDirection: 'row',
  //   paddingTop: 1,
  //   alignItems: 'center',
  //   elevation: 1,
  //   backgroundColor: Colors.primarycolor,
  // },
  // headingStyle: {
  //   marginTop: 10,
  //   marginBottom: 10,
  //   left:10,
  //   fontSize: 16,
  //   fontWeight: '900',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   fontWeight: 'bold',
  //   color: Colors.backgroundcolor,
  // },

  // text: {
  //   fontSize: 20,
  //   fontWeight: '900',
  //   fontWeight: 'bold',
  //   color: Colors.backgroundcolor,
  //   right: 10,
  // },
  labelContainer: {
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
  },
  // appbarcontainer: {
  //   width: 360,
  //   height: 50,
  //   backgroundColor: Colors.primarycolor,
  //   borderBottomEndRadius: 17,
  //   borderBottomStartRadius: 17,
  // },
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
   // marginTop: 20,
  },
  txtInput: {
    borderRadius: 8,
    borderColor: '#dcdcdc',
   // margin: 10,
    borderWidth: 2,
    bottom:'12%',
    width: '92%',
    height: 40,
    left:'4%',
    right:'4%',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
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

  // textInput: {
  //   top: '10%',
  //   textAlign: 'center',
  //   color: Colors.text,
  //   fontSize: 20,
  // },
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
  bottomHeader: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    shadowOffset: {width: -2, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 30,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.continercolor,
    // marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panel: {
    padding: 20,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    margin: 0,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: Colors.primarycolor,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
});
export default ProdetAdmin;
