import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SvgXml} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import mastercard from './../assets/svg/mastercard.svg';
export default function adscard(props) {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#F44987', '#D04DAF', '#9250EB']}
      style={styles.card}>
      <Text style={styles.txt1}>Get your contactless card</Text>
      <Text style={styles.txt2}>Use it to push new services on the app</Text>
    </LinearGradient>
  );
}

const styles = EStyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '327rem',
    height: '70rem',
    borderRadius: '5rem',
    marginBottom: '20rem',
    flex: 1,
    flexDirection: 'column',

    paddingHorizontal: '15rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    color: '#FFFFFF',
    fontSize: '15rem',
    fontWeight: '600',
  },
  txt2: {
    color: '#FFFFFF',
    fontSize: '11rem',
  },
});
