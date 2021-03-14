import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {getFontSize, getLayoutSize} from "../Helper/ResponsiveUtils"
import AppString from "../Helper/AppString"

const Main = ({navigation}) => {

    const [data, setData] = React.useState({
      defaultNum : 1000,
      count : '',
    });

    const Sum = () => {
      console.log("SUM ....");
      var dNum = parseInt(data.defaultNum);
      var n1 = parseInt(data.count);
      var add = 0;
       if (n1 === 0 && n1 === undefined){
         add = dNum;
         //alert('0 is invalid number to add')
       }else{
         add = dNum+n1;
       }
       setData({
                ...data,
                defaultNum: add,
                count: '',
            });
    }

    const Subtract = () => {
      console.log("SUBTRACT ....");
      var dNum = parseInt(data.defaultNum);
      var n1 = parseInt(data.count);
      var sub = 0;
       if (n1 !== 0 && n1 !== undefined && !(n1 > dNum)){
         sub = dNum - n1;
       }else {
         var s  = 0 ;
         if(n1==0){
           s = dNum - n1;
         }else{
           s = dNum;
           alert('Please enter less than OR equal to '+ dNum + ' to substract.');
         }
         sub = s;
       }
       setData({
                ...data,
                defaultNum: sub,
                count:'',
            });
    }


    const onTextChanged = (text) => {
       text = text.replace(/[,.-]/g, '')
      // this.setState({ count: text.replace(/ /g,'') });
       setData({
                ...data,
                count: text.replace(/ /g,'')
            });
     }



    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#7F7F7F' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>{AppString.welcome}</Text>
        </View>
        <Animatable.View
            animation="fadeInUpBig"
            style={[styles.footer, { backgroundColor: '#D8D8D8' }]}>

            <View style={styles.numBoxBg}>
                <Text style={{fontSize:getFontSize(30),}}>{data.defaultNum}</Text>
            </View>

            <View style={{width:getLayoutSize(300),alignSelf:'center',marginTop:getLayoutSize(50)}}>
                <TextInput
                      style={{borderWidth: 1,borderRadius:6, margin:getLayoutSize(10),paddingLeft:getLayoutSize(10),backgroundColor:'#FFFF'}}
                      placeholder={AppString.enter_num}
                      keyboardType="numeric"
                      value={data.count}
                      onChangeText={text => onTextChanged(text)}
                />
            </View>

            <View style={{flexDirection:'row',width:'100%', justifyContent:'center',alignItems:'center',marginTop:30}}>
                <TouchableOpacity style={styles.button} onPress={Sum}>
                    <Text style={styles.buttonText}>{AppString.add}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={Subtract}>
                    <Text style={styles.buttonText}>{AppString.sub}</Text>
                </TouchableOpacity>
            </View>

        </Animatable.View>
      </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7F7F7F'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: getLayoutSize(25),
        paddingBottom: getLayoutSize(40)
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: getLayoutSize(20),
        paddingVertical: getLayoutSize(30)
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: getFontSize(30)
    },
    button:{
      width: getLayoutSize(130),
      height: getLayoutSize(50),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#7F7F7F',
      borderRadius:getLayoutSize(30),
      margin:getLayoutSize(15)
    },
    buttonText:{
      color:'white',
    },
    numBoxBg:{
      backgroundColor:'#FFFF',
      height:getLayoutSize(220),
      width:getLayoutSize(220),
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      marginTop:getLayoutSize(50),
      borderWidth:1,
      borderColor:'#000000',
      borderRadius:5
    },
  });
