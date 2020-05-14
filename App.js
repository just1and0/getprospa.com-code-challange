import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import Apper from './src/HomeScreen';

import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

EStyleSheet.build({
  $textColor: '#0275d8',
  $rem: entireScreenWidth / 380,
  $dw: entireScreenWidth,
  $dh: entireScreenHeight,
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Apper />
      </SafeAreaView>
    );
  }
}
