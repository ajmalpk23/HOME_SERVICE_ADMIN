import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {Card} from 'react-native-paper';
import Modal from 'react-native-modal';
// import FlashMessage from 'react-native-flash-message'
// import {showMessage,hideMessage} from 'react-native-flash-message';

const Servicepartners = ({route, navigation}) => {
  const {head} = route.params;

  const [isModalVisible, setModalVisible] = useState(false);
  const [alertModalVisible, setalertModalVisible] = useState(false);

  const [name, setName] = useState([
    {list: 'Nishant', value: ' 8889998877', key: '1'},
    {list: 'Vikram ', value: ' 8889998877', key: '2'},
    {list: 'Kishor  ', value: ' 8889998877', key: '3'},
    {list: 'Amaya', value: ' 8889998877', key: '4'},
    {list: 'Daniel  ', value: ' 8889998877', key: '5'},
    {list: 'Pranav', value: ' 8889998877', key: '6'},
    {list: 'Nandhu', value: '8889998877', key: '7'},
  ]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const alerttoggleModal = () => {
    setalertModalVisible(!alertModalVisible);
  };

  return (
    /**main view starts */
    <View>
      {/**header view */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{bottom: 5, left: 20}}
          onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={colors.backgroundcolor}
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
            source={require('../Assets/Images/Home.png')}
          />
        </View>
        <Text style={styles.text}>HOME SERVE</Text>

        <Text style={styles.headingStyle}>{head} Services</Text>
      </View>
      {/*header view ends */}

      {/*view for inner starts */}
      <View style={styles.rect1}>
        <View style={{flexDirection: 'row', padding: 20}}>
          <Text
            style={{
              fontSize: 17,
              color: colors.secondaryText,
              fontWeight: 'bold',
            }}>
            Service Partners List
          </Text>
          <TouchableOpacity
            style={{paddingLeft: 110}}
            onPress={() => {
              toggleModal();
            }}>
            <AntDesign name="edit" size={20} color={colors.secondaryText} />
          </TouchableOpacity>

          {/*modal */}
          <Modal
            isVisible={isModalVisible}
            hasBackdrop={true}
            backdropOpacity={0}
            style={{backgroundColor: 'rgba(52, 52, 52, alpha)'}}
            //   onBackdropPress={()=>{toggleModal();}}
          >
            <View style={styles.centeredView1}>
              <View style={styles.modalView1}>
                <View style={{width: 290, padding: 11, left: 1}}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: colors.secondaryText,
                      fontWeight: 'bold',
                      paddingLeft: 60,
                      //bottom: ,
                    }}>
                    Update Partners List
                  </Text>
                  {name.map(item => {
                    return (
                      <View
                        style={{
                          borderBottomWidth: 1.2,
                          flexDirection: 'row',
                          //padding: 2,

                          borderBottomColor: colors.continercolor,
                        }}
                        key={item.key}>
                        <View style={{width: 65}}>
                          <TextInput
                            style={{
                              color: colors.secondaryText,
                              fontWeight: 'bold',
                              //right:8,
                            }}
                            placeholder={item.list}></TextInput>
                        </View>

                        <View style={{left: 100}}>
                          <TextInput
                            style={{
                              fontSize: 13,
                              fontWeight: 'bold',
                              top: 5,
                              color: colors.secondaryText,
                            }}
                            keyboardType="numeric"
                            placeholder={item.value}></TextInput>
                        </View>
                      </View>
                    );
                  })}

                  {/*<TouchableOpacity>*/}
                  <View
                    style={{
                      width: 100,
                      height: 40,
                      backgroundColor: colors.secondaryText,
                      borderRadius: 12,
                      top: 15,
                      padding: 10,
                      //left: 30,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        {
                          toggleModal();
                        }
                        {
                          setalertModalVisible(true);
                        }
                      }}>
                      <Text
                        style={{
                          color: colors.backgroundcolor,
                          fontSize: 15,
                          fontWeight: 'bold',
                          paddingLeft: 15,
                          alignItems: 'center',
                        }}>
                        UPDATE
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/*</TouchableOpacity>*/}

                  {/**<TouchableOpacity> */}
                  <View
                    style={{
                      width: 100,
                      height: 40,
                      backgroundColor: colors.secondaryText,
                      borderRadius: 12,
                      bottom: 25,
                      padding: 10,
                      left: 140,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        toggleModal();
                      }}>
                      <Text
                        style={{
                          color: colors.backgroundcolor,
                          fontSize: 15,
                          fontWeight: 'bold',
                          paddingLeft: 20,
                        }}>
                        BACK
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/**</TouchableOpacity> */}
                </View>
              </View>
            </View>
          </Modal>

          {/*modal */}
        </View>

        {/**modal alert start */}
        <Modal
          isVisible={alertModalVisible}
          hasBackdrop={true}
          backdropOpacity={0.4}
          style={{backgroundColor: 'rgba(52, 52, 52, alpha)', padding: 25}}>
          <View
            style={{
              backgroundColor: colors.backgroundcolor,
              width: 270,
              height: 160,
              borderRadius: 12,
            }}>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: 20,
                fontWeight: 'bold',
                padding: 18,
              }}>
              Update
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: 16,
                paddingLeft: 20,
              }}>
              Are you sure you want to update?
            </Text>

            <View
              style={{
                width: 80,
                height: 40,
                backgroundColor: colors.secondaryText,
                borderRadius: 12,
                top: 15,
                padding: 10,
                left: 35,
              }}>
              <TouchableOpacity
                onPress={() => {
                  {
                    alerttoggleModal();
                  }
                  {
                    ToastAndroid.show('Partners List Updated ', 2000);
                  }
                  // {
                  //   showMessage({
                  //     message: 'Partners List Updated',
                  //     // description:"update",
                  //     // type:"update",
                  //     color: 'black',
                  //     backgroundColor: colors.continercolor,
                  //   });
                  // }
                }}
                style={{width: 50}}>
                <Text
                  style={{
                    color: colors.backgroundcolor,
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    alignItems: 'center',
                  }}>
                  YES
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: 80,
                height: 40,
                backgroundColor: colors.secondaryText,
                borderRadius: 12,
                bottom: 25,
                padding: 10,
                left: 150,
              }}>
              <TouchableOpacity
                onPress={() => {
                  alerttoggleModal();
                }}>
                <Text
                  style={{
                    color: colors.backgroundcolor,
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingLeft: 18,
                    alignItems: 'center',
                  }}>
                  NO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/**modal alert ends */}

        <View style={{width: 290, padding: 10, left: 25}}>
          {name.map(item => {
            return (
              <View
                style={{
                  borderBottomWidth: 1.2,
                  flexDirection: 'row',
                  padding: 10,
                  borderBottomColor: colors.continercolor,
                }}
                key={item.key}>
                <Text style={{color: colors.secondaryText}}>{item.list}</Text>
                <Text style={{paddingLeft: 120, color: colors.secondaryText}}>
                  {item.value}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/*view for inner ends */}

      <View
        style={{
          color: colors.continercolor,
          flex: 1,
          width: 180,
          top: 30,
          padding: 7,
          left: 90,
          alignItems: 'center',
          borderRadius: 18,
        }}>
        {/* <FlashMessage position="bottom" width={25} /> */}
      </View>
    </View>
    /**main view starts */
  );
};

export default Servicepartners;

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
    backgroundColor: colors.primarycolor,
  },
  rect1: {
    width: '94%',
    height: 400,
    backgroundColor: colors.continercolor,
    borderRadius: 10,
    top: 35,
    left: 10,
  },

  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    left: 1,
    width: '100%',
    top: 100,
  },
  modalView1: {
    backgroundColor: colors.backgroundcolor,
    borderRadius: 15,
    alignItems: 'center',
    paddingBottom: 15,
    // paddingTop: 10,

    paddingLeft: 10,
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
    color: colors.backgroundcolor,
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
    color: colors.backgroundcolor,
    left: -150,
    paddingLeft: -40,
    paddingRight: 10,
  },
});
