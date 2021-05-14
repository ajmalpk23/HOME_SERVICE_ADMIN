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
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {Card} from 'react-native-paper';
import Modal from 'react-native-modal';

const Sanitizationservices = ({route,navigation}) => {

    const {head} =route.params;

  const [price, setPrice] = useState([
    {bhk: '1RK  ', value: '   RS 300/-', key: '1'},
    {bhk: '1BHK', value: '  RS 400/-', key: '2'},
    {bhk: '2BHK', value: '  RS 600/-', key: '3'},
    {bhk: '3BHK', value: '  RS 800/-', key: '4'},
    {bhk: '4BHK', value: '  RS 1000/-', key: '5'},
    {bhk: '5BHK', value: '  RS 1200/-', key: '6'},
    {bhk: 'Duplex', value: 'RS 1800/-', key: '7'},
  ]);

  //   const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    /**main view starts */
    <View>
      {/* *header view */}
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
              color: Colors.secondaryText,
              fontWeight: 'bold',
            }}>
            Existing pricing
          </Text>
          <TouchableOpacity
            style={{paddingLeft: 140}}
            // onPress={() => {
            //   setModalVisible(true);
            // }}
            onPress={()=>toggleModal()}
            >
            <AntDesign name="edit" size={20} color={Colors.secondaryText} />
          </TouchableOpacity>

          {/*modal */}
          <Modal
              isVisible={isModalVisible}
              hasBackdrop={true}
              backdropOpacity={0}
              style={{backgroundColor:'rgba(52, 52, 52, alpha)'}}
            //   onBackdropPress={()=>{toggleModal()}}
            
          
              >
            <View style={styles.centeredView1}>
              <View style={styles.modalView1}>
                <View style={{width: 290, padding: 11, left: 1}}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: Colors.secondaryText,
                      fontWeight: 'bold',
                      paddingLeft: 75,
                      bottom: 4,
                    }}>
                    Update Pricing
                  </Text>
                  {price.map(item => {
                    return (
                      <View
                        style={{
                          borderBottomWidth: 1.2,
                          flexDirection: 'row',
                          padding: 8,
                          borderBottomColor: Colors.continercolor,
                        }}
                        key={item.key}>
                        <Text
                          style={{
                            color: Colors.secondaryText,
                            fontWeight: 'bold',
                          }}>
                          {item.bhk}
                        </Text>
                        
                        <View style={{left: 99}}>
                          <Card style={styles.cardStyle}>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                top: 5,
                                color: Colors.secondaryText,
                              }}>
                              {item.value}
                            </Text>
                          </Card>
                        </View>
                      </View>
                    );
                  })}

                  <TouchableOpacity>
                    <View
                      style={{
                        width: 180,
                        height: 40,
                        backgroundColor: Colors.secondaryText,
                        borderRadius: 12,
                        top: 15,
                        padding: 10,
                        left: 30,
                      }}>
                      <TouchableOpacity onPress={()=>{toggleModal()}}>
                        <Text
                          style={{
                            color: Colors.backgroundcolor,
                            fontSize: 15,
                            fontWeight: 'bold',
                            paddingLeft: 55,
                          }}>
                          UPDATE
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View style={{width: 290, padding: 10, left: 25}}>
          {price.map(item => {
            return (
              <View
                style={{
                  borderBottomWidth: 1.2,
                  flexDirection: 'row',
                  padding: 10,
                  borderBottomColor: Colors.continercolor,
                }}
                key={item.key}>
                <Text style={{color: Colors.secondaryText}}>{item.bhk}</Text>
                <Text style={{paddingLeft: 160, color: Colors.secondaryText}}>
                  {item.value}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/*view for inner ends */}
    </View>
    /**main view starts */
  );
};

export default Sanitizationservices;

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
  rect1: {
    width: '94%',
    height: 400,
    backgroundColor: Colors.continercolor,
    borderRadius: 10,
    top: 35,
    left: 10,
  },

  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 130,
    left: 1,
    width: '100%',
    borderRadius:15
  },
  modalView1: {
    backgroundColor: Colors.backgroundcolor,
    borderRadius: 15,
    alignItems: 'center',
    paddingBottom: 15,

    paddingLeft: 10,
  },

  cardStyle: {
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    flexDirection: 'column',

    borderRadius: 1,
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
    alignSelf:'center',
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
