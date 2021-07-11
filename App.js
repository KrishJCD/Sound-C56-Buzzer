import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import SoundButton from './components/SoundButton'
import Head from './components/Head'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles1.viewer}>
        <View>
          <Head/>
        </View>
        <View>
        <SoundButton/>
        </View>
      </View>
    );
  }
}

const styles1=StyleSheet.create({
    viewer:{
      alignItems:"center",
      justifyContent:"center",
    }
});

