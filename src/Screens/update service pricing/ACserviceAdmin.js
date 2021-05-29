import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/colors';

const ACserviceAdmin = ({navigation}) => {
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
          <View style={styles.headerview}>
          <Image
            source={require('../../Assets/appbar.png')}
            style={styles.img}></Image>
          <Text style={styles.txt}> HOME SERVE</Text>
        </View>
        <Text style={styles.txt2}>AC Services and Repair</Text>
      </View>
          
        {/* <ScrollView styles={{height:900}}> */}
         <View styles={{height:'100%'}}>
         
        
         {/* firsr row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around',top:'10%'}}>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('Sanitizationservices', {head: 'Ac'});
              }}>
              <Image
                source={require('../../Assets/adm/acser.png')}
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('Sanitizationservices', {head: 'Ac Repair'}); }}
                >
              <Image
                source={require('../../Assets/adm/acrep.png')}
                style={{}}
              />
            </TouchableOpacity>
            
            </View>

            {/* second row */}
          <View style={{top:'40%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Sanitizationservices', {head: 'Ac Gas Charging'});
                }}>
                <Image
                  source={require('../../Assets/adm/acgas.png')}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Sanitizationservices', {head: 'Ac Installation/Unistallation'});
                }}>
                <Image
                  source={require('../../Assets/adm/acinstall.png')}
                  style={{}}
                />
              </TouchableOpacity>
              </View>
              </View>

              
        </View>
        {/* </ScrollView> */}
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
  headerview: {
    flexDirection: 'row',
    bottom: '14%',
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
    bottom: '5%',
  },
  continer: {
    backgroundColor: Colors.backgroundcolor,
    height: 112,
    width: 112,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  iconItem: {
    marginBottom: 50,
     paddingLeft: -5,
    left: -15,
    bottom: 10,
   },
});
export default ACserviceAdmin;






















































// import React from 'react';
// import {
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Colors from '../../config/colors';
// // import ACservice from './ACservice';

// const ACserviceAdmin = ({navigation}) => {
//   return (
//     <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
//       <ScrollView>
//         <View style={styles.header}>
//           <TouchableOpacity
//             style={{bottom: 5, left: 20}}
//             onPress={() => navigation.goBack()}>
//             <AntDesign
//               style={styles.iconItem}
//               name="left"
//               size={20}
//               color={Colors.backgroundcolor}
//             />
//           </TouchableOpacity>
//           <View style={{width: 148, height: 47, paddingLeft: 90}}>
//             <Image
//               style={{
//                 flex: 1,
//                 width: 48,
//                 height: 10,
//                 bottom: 32,
//                 left: 5,
//                 tintColor: '#fff',
//               }}
//               source={require('../../Assets/Images/Home.png')}
//             />
//           </View>
//           <Text style={styles.text}>HOME SERVE</Text>

//           <Text style={styles.headingStyle}>AC Services and Repair</Text>
//         </View>

//         <View style={styles.categorycontainer}>
//           <TouchableOpacity
//             style={styles.categorybtn}
//             onPress={() => navigation.navigate('Sanitizationservices', {head: 'Ac'})}>
//             <View style={styles.categoryicon}>
//               <Image
//                 source={require('../../Assets/adm/acser.png')}
//                 style={styles.img}
//               />
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.categorybtn}
//             onPress={() => navigation.navigate('Sanitizationservices', {head: 'Ac Repair'})}>
//             <View style={styles.categoryicon}>
//               <Image
//                 source={require('../../Assets/adm/acrep.png')}
//                 style={styles.img}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.categorycontainer1}>
//           <TouchableOpacity
//             style={styles.categorybtn}
//             onPress={() => navigation.navigate('Sanitizationservices', {head: 'Ac Gas Charging'})}>
//             <View style={styles.categoryicon}>
//               <Image
//                 source={require('../../Assets/adm/acgas.png')}
//                 style={styles.img}
//               />
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.categorybtn}
//             onPress={() => navigation.navigate('Sanitizationservices', {head: 'Ac Installation/Unistallation'})}>
//             <View style={styles.categoryicon}>
//               <Image
//                 source={require('../../Assets/adm/acinstall.png')}
//                 style={styles.img}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     width: '100%',
//     height: 160,
//     flexDirection: 'row',
//     paddingTop: 1,
//     alignItems: 'center',
//     elevation: 1,
//     borderBottomEndRadius: 12,
//     borderBottomStartRadius: 12,
//     backgroundColor: Colors.primarycolor,
//   },

//   categorycontainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//     marginLeft: 10,
//     marginTop: 20,
//   },
//   categorycontainer1: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//     marginLeft: 10,
//     marginTop: 20,
//   },
//   categoryicon: {
//     flex: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   categorybtn: {
//     flex: 1,
//     marginTop: 15,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   //   headingStyle: {
//   //     marginTop: 10,
//   //     marginBottom: 10,
//   //     fontSize: 16,
//   //     fontWeight: '900',
//   //     textAlign: 'center',
//   //     alignItems: 'center',
//   //     fontWeight: 'bold',
//   //     color: Colors.text,
//   //   },

//   //   text: {
//   //     fontSize: 20,
//   //     fontWeight: '900',
//   //     fontWeight: 'bold',
//   //     color: Colors.text,
//   //     paddingLeft: 10,
//   //   },

//   appbarcontainer: {
//     width: 360,
//     height: 50,
//     backgroundColor: Colors.primarycolor,
//     borderBottomEndRadius: 17,
//     borderBottomStartRadius: 17,
//   },

//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },

//   textInput: {
//     paddingTop: 180,
//     textAlign: 'center',
//     color: Colors.backgroundcolor,
//     fontSize: 20,
//   },

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//   },
//   containers: {
//     flex: 4,

//     flexDirection: 'column',
//   },
//   img: {
//     width: 120,
//     height: 120,
//   },
//   iconItem: {
//     marginBottom: 50,
//     paddingLeft: -5,
//     left: -15,
//     bottom: 10,
//   },
//   text: {
//     fontSize: 15,
//     fontWeight: '900',
//     fontWeight: 'bold',
//     color: Colors.backgroundcolor,
//     paddingLeft: -7,
//     bottom: 30,
//   },
//   headingStyle: {
//     marginTop: 95,
//     marginBottom: 10,
//     fontSize: 15,
//     fontWeight: '900',
//     textAlign: 'center',
//     alignItems: 'center',
//     fontWeight: 'bold',
//     color: Colors.backgroundcolor,
//     left: -150,
//     paddingLeft: -40,
//     paddingRight: 10,
//   },
// });
// export default ACserviceAdmin;
