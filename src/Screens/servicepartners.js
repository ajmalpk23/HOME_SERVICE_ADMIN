import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Image,TextInput, Button,Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {Card} from 'react-native-paper';
//import Modal from 'react-native-modal';


const Servicepartners =()=>{
    const [name, setName] = useState([
        {list:'Nishant', value: '   8889998877', key:'1'},
        {list:'Vikram',  value:'   8889998877', key:'2'},
        {list:'Karthik',  value: '   8889998877', key:'3'},
        {list:'Sneha',   value:'    8889998877', key:'4'},
        {list:'Vijay',  value: '      8889998877', key:'5'},
        {list:'Pooja',  value:'     8889998877', key:'6'},
        {list:'Sundhar',value:'8889998877', key:'7'},
    ])
    const [modalVisible, setModalVisible] = useState(false);

    return(
        /**main view starts */
        <View>
            {/**header view */}
            <View style={styles.headerstyle}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:30}}>
                    <TouchableOpacity style={{paddingLeft:20}}>
                        <AntDesign name="left" size={20} color='white' >
                            
                            
                        </AntDesign>
                       
                    </TouchableOpacity>

                    <View style={{width:138,height:60,flexDirection:'row',right:98}}>
                         <Image style={{flex:1,width:44,height:44,tintColor:colors.backgroundcolor}} 
                          source={require('../Assets/appbar.png')}/>
                  

                    
                       <Text style={{fontSize:15, fontWeight:'bold',color:'white',}}> HOME SERVE</Text>
                    </View>
                </View>

                <Text style={{alignItems:'center',color:'white',fontWeight:'bold',fontSize:16,paddingLeft:100,bottom:1}}>Home Sanitization Services</Text>


            </View>
            {/*header view ends */}

            {/*view for inner starts */}
            <View style={styles.rect1}>
                <View style={{flexDirection:'row',padding:20}}>
                    <Text style={{fontSize:17,color:colors.secondaryText,fontWeight:'bold'}}>Service Partners List</Text>
                    <TouchableOpacity style={{paddingLeft:110}} onPress={() => {setModalVisible(true);}}>
                        <AntDesign name="edit" size={20} color={colors.secondaryText}/>
                    </TouchableOpacity>

                    {/*modal */}
                    <Modal
                        isVisible={modalVisible}
                        backdropOpacity={0.3}
                        style={{ margin:10,}}
                        animationIn={'fadeIn'}
                        animationOut={'fadeOut'}
                        onBackdropPress={() => setModalVisible(false)}>
    
                        <View style={styles.centeredView1}>
                        <View style={styles.modalView1}>

                        <View style={{width:290,padding:11,left:1}}>
                            <Text style={{fontSize:17,color:colors.secondaryText,fontWeight:'bold',paddingLeft:60,bottom:4}}>Update Partners List</Text>
                              { name.map((item) =>{
                                return(
                                    <View style={{borderBottomWidth:1.2,flexDirection:"row",padding:11,borderBottomColor:Colors.rectangle}} key={item.key}>
                                       <Text style={{color:colors.secondaryText,fontWeight:"bold"}}>{item.list}</Text>
                                       {/**<Text style={{paddingLeft:160,color:Colors.secondaryText}}>{item.value}</Text> */} 
                                       <View style={{left:99}}>
                                         
                                          <Text style={{fontSize:13,fontWeight:'bold',top:5,color:colors.secondaryText}}>{item.value}</Text>
                                          
                                       </View>
                              
                              
                                    </View>
                               )
                              })}

                              <TouchableOpacity>
                                <View style={{width:180,height:40,backgroundColor:Colors.secondaryText,borderRadius:12,top:15,padding:10,left:30}}>
                                  <TouchableOpacity> 
                                      {/**  onPress={()=> navigation.goBack(null)}*/}
                                  
                                      <Text style={{color:colors.backgroundcolor,fontSize:15,fontWeight:'bold',paddingLeft:55}}>UPDATE</Text>
                                  </TouchableOpacity>
                                </View>
                              </TouchableOpacity>

                         </View>
    
                
                    
                    
                    </View>
                    </View>
                </Modal>

                {/*modal */}








                   
                </View>

                <View style={{width:290,padding:10,left:25}}>
                    { name.map((item) =>{
                      return(
                          <View style={{borderBottomWidth:1.2,flexDirection:"row",padding:10,borderBottomColor:colors.continercolor}} key={item.key}>
                              <Text style={{color:colors.secondaryText}}>{item.list}</Text>
                              <Text style={{paddingLeft:120,color:colors.secondaryText}}>{item.value}</Text>
                              
                              
                          </View>
                      )
                    })}
                </View>

            </View>

            {/*view for inner ends */}


        </View>
        /**main view starts */
    );
};

export default Servicepartners;

const styles = StyleSheet.create({

    headerstyle:{
        
        margin:6,
        height:130,
        width:361,
        right:8,
        bottom:6,
        borderRadius:12,
        borderWidth:1,
        backgroundColor:colors.primarycolor,
        
        

    },
    rect1:{
        width:'94%',
        height:400,
        backgroundColor:colors.continercolor,
        borderRadius:10,
        top:35,
        left:10,
        
        
    },


    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position:'absolute',
         bottom:10,
        left:1,
        width:'100%',
        top:100,
       
        
      },
      modalView1: {
        backgroundColor:colors.backgroundcolor,
        borderRadius: 10,
        alignItems: "center",
        paddingBottom:15,
        paddingTop:20,
       
        paddingLeft:10,
        
       
      },

     


    
    

}
);

