import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import Colors from '../../config/colors';
import {Button, Divider, Card, Title} from 'react-native-paper';
const Orderdetails = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.backgroundcolor,height:'100%'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{top:'30%', left: 20}}
          onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={colors.backgroundcolor}
          />
        </TouchableOpacity>
        <View style={styles.headerView}>
          <Image
            style={styles.img}
            source={require('../../Assets/appbar.png')}
          />
        
        <Text style={styles.txt}>HOME SERVE</Text>
        </View>
        <Text style={styles.txt2}>Order Details</Text>
      </View>
      <ScrollView>
      <View style={styles.cardView}>
        <Card.Content>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 20,
              left: -1,
              top: -11,
              color: colors.secondaryText,
            }}>
            Service Date{' '}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              top: -1,
              color: colors.secondaryText,
            }}>
            02 April 2021 | 10:00 am
          </Text>
          <Divider
            style={{
              backgroundColor: 'rgba(51,52,88,0.06)',
              width: 307,
              left: -1,
              top: -26,
            }}
          />
        </Card.Content>
      </View>
      <View style={styles.cardView2}>
        <Card.Content>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 20,
              top: -11,
              left: -1,
              color: colors.secondaryText,
            }}>
            Requested Services{' '}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '200',
              top: -4,
              color: colors.secondaryText,
            }}>
            Home Sanitization
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              top: -4,
              color: colors.secondaryText,
            }}>
            Size of house: 2BHK
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              top: -4,
              color: colors.secondaryText,
            }}>
            Storey: Single
          </Text>
          <Divider
            style={{
              backgroundColor: 'rgba(51,52,88,0.06)',
              width: 307,
              left: -1,
              top: -61,
            }}
          />
        </Card.Content>
      </View>
      <View style={styles.cardView3}>
        <Card.Content>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 20,
              left: -1,
              bottom: 11,
              color: colors.secondaryText,
            }}>
            Service Address{' '}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              top: -2 ,
              color: colors.secondaryText,
            }}>
            kjdbksfbfbzjvjfbjabj,
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              top: -1,
              color: colors.secondaryText,
            }}>
            lfknjadvfv v klvnjznfv,
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              top: -1,
              color: colors.secondaryText,
            }}>
            jbvhjbhbvbhzfbh
          </Text>
          <Divider
            style={{
              backgroundColor: 'rgba(51,52,88,0.06)',
              width: 307,
              left: -1,
              bottom:  55,
            }}
          />
        </Card.Content>
      </View>
      <View style={styles.cardView4}>
        <Card.Content>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 20,
              top: -10,
              left: 1,
              color: colors.secondaryText,
            }}>
            Total amount :
          </Text>
          <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 20,
              bottom: '3%',
              left: '20%',
              color: colors.secondaryText,
            }}> ₹1899{' '}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'normal',
              top: -8,
              left: 2,
              color: colors.secondaryText,
            }}>
            Discount :
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'normal',
              bottom: '3%',
            justifyContent:'flex-end',
            left:'10%',
              color: colors.secondaryText,
            }}>
             - ₹50
          </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              top: 5,
              color: colors.secondaryText,
            }}>
            Total Payable :
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              top: '2%',
              left:'50%',
              color: colors.secondaryText,
            }}>
             ₹1,849{' '}
          </Text>
          </View>
          <Divider
            style={{
              backgroundColor: 'rgba(51,52,88,0.06)',
              width: 307,
              left: -1,
              marginTop: -19,
            }}
          />
        </Card.Content>
       </View>
       
      
      {/* <View style={styles.iconss}>
        <TouchableOpacity
          style={{bottom: 5, left: 20}}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.iconItem} name="doubleleft" size={15} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsss}>
        <TouchableOpacity
          style={{bottom: 5, left: 20}}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.iconItem} name="doubleright" size={15} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonStyle1}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: colors.secondaryText,
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: colors.secondaryText,
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            Next
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
    bottom: '13%',
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
    bottom: '8%',
  },
  // headingStyle: {
  //   marginTop: 95,
  //   marginBottom: 10,
  //   fontSize: 15,
  //   fontWeight: '900',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   fontWeight: 'bold',
  //   color: colors.backgroundcolor,
  //   right:'80%',
  
  // },
  cardTitle: {
    marginTop: 35,
    color: colors.primarycolor,
    fontWeight: 'bold',
    fontSize: 16,
    left: 120,
  },
  cardView: {
   // marginTop: 20,
    width: '92%',
    height: 80,
    left: '4%',
    right:'4%',
   bottom:'3%',
    borderRadius: 10,
    backgroundColor: colors.continercolor,
    marginTop: StatusBar.currentHeight || 0,
  },
  buttonContainer: {
    bottom: '10%',
    left: 50,
    flexDirection:'row'
  },
  buttonStyle1: {
    borderWidth: 1,
            borderRadius: 7,
            backgroundColor: colors.backgroundcolor,
            height: 30,
            width: '30%',
            justifyContent: 'center',
           
            top:'8%',
left:'15%',
  },
  buttonStyle2: {
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: colors.backgroundcolor,
    height: 30,
    width: '30%',
    justifyContent: 'center',
  left:'90%',top:'8%',
  },
  cardView2: {
    //marginTop: 17,
    width: '92%',
    height: 100,
    left: '4%',
    right:'4%',
   bottom: '6%',
    borderRadius: 10,
    backgroundColor: colors.continercolor,
    justifyContent:'flex-start',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0,
  },
   cardView3: {
     marginTop: 17,
     width: "92%",
     height: 105,
     left: "4%",
     bottom: '6%',
     borderRadius: 10,
     backgroundColor: '#F5F5F5',
     right:'4%'
   },
  cardView4: {
  marginTop: 17,
     width: '92%',
     height: 98,
     left: "4%",
     bottom: '6%',
     borderRadius: 10,
    backgroundColor: '#F5F5F5',right:'4%'
   },
  cardStyle: {
    marginTop: 5,
    backgroundColor: colors.backgroundcolor,
    borderRadius: 16,
    left: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 6,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
    fontWeight: 'bold',
    color: colors.backgroundcolor,
    left:'0.1%',
    bottom:'6%',
  },
  iconItem: {
    marginBottom: 50,
    paddingLeft: -5,
    left: -15,
    bottom: 10,
  },
  iconss: {
    top: 34,
    right: 120,
    alignItems: 'center',
    elevation: 1,
    color: '#F5F5F5',
  },
  iconsss: {
    paddingTop: 10,
    top: -42,
    right: -80,
    alignItems: 'center',
    elevation: 1,
    color: '#F5F5F5',
  },
});
export default Orderdetails;