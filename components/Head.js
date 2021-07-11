import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';


class Head extends Component{
  render(){
    return(
      <View style={styles.viewer}>
        <Text style={styles.text}>Quiz Buzzer</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  viewer:{
    borderWidth:2,
    marginTop:20,
    width:Dimensions.get('window').width,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#212121"

  },
  text:{
    fontSize:30,
    fontWeight:"bold",
    color:'#ffffff'
  }
});

export default Head;