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
import colors from '../config/colors';

const Feedback = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.continercolor}}>
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
      <ScrollView>
        <View style={styles.feedbackContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/feedback.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <View style={styles.feedbackNameView}>
              <Text style={styles.feedbackName}>Maneesha Yadav</Text>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={20}
                style={{}}
                ratingBackgroundColor="rgba(51, 52, 88, 0.06)"
              />
            </View>
          </View>

          <Text style={styles.feedbackText}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet deserunt uAmet minim mollit non "
          </Text>
        </View>
        <View style={styles.feedbackContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/feedback.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <View style={styles.feedbackNameView}>
              <Text style={styles.feedbackName}>Maneesha Yadav</Text>
              <Rating type="star" ratingCount={5} imageSize={20} />
            </View>
          </View>

          <Text style={styles.feedbackText}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet deserunt uAmet minim mollit non "
          </Text>
        </View>
        <View style={styles.feedbackContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/feedback.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <View style={styles.feedbackNameView}>
              <Text style={styles.feedbackName}>Maneesha Yadav</Text>
              <Rating type="star" ratingCount={5} imageSize={20} />
            </View>
          </View>

          <Text style={styles.feedbackText}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet deserunt uAmet minim mollit non "
          </Text>
        </View>
        <View style={styles.feedbackContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/feedback.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <View style={styles.feedbackNameView}>
              <Text style={styles.feedbackName}>Maneesha Yadav</Text>
              <Rating type="star" ratingCount={5} imageSize={20} />
            </View>
          </View>

          <Text style={styles.feedbackText}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet deserunt uAmet minim mollit non "
          </Text>
        </View>

        <View style={styles.feedbackContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/feedback.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <View style={styles.feedbackNameView}>
              <Text style={styles.feedbackName}>Maneesha Yadav</Text>
              <Rating type="star" ratingCount={5} imageSize={20} />
            </View>
          </View>

          <Text style={styles.feedbackText}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet deserunt uAmet minim mollit non "
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 414,
    height: 80,
    flexDirection: 'row',
    paddingTop: 20,
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
  feedbackText: {
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
    color: Colors.secondaryText,
  },
  feedbackName: {
    color: Colors.primarycolor,
    fontWeight: 'bold',
    fontSize: 14,
  },
  feedbackNameView: {
    flexDirection: 'column',
    marginStart: 30,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    alignSelf: 'center',
    bottom: 5,
  },

  appbarcontainer: {
    width: 390,
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

  cardTitle: {
    marginTop: 10,
    color: Colors.primarycolor,
    fontWeight: 'bold',
    fontSize: 20,
    left: 8,
  },
  feedbackContainer: {
    marginTop: 10,
    
    height: 141,
    left: '4%',
    borderRadius: 8,
    backgroundColor: Colors.backgroundcolor,width:'92%',right:'4%'
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
export default Feedback;
