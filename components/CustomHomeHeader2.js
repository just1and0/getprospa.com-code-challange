import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import backwhite from './../assets/svg/backwhite.svg';
import phone from './../assets/svg/phone.svg';
import {SvgXml} from 'react-native-svg';
export default function Header(props) {
  const {goback} = props;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.sliderContainerStyle}>
        <View style={[styles.topcontent, {alignItems: 'center'}]}>
          <TouchableOpacity onPress={() => goback()}>
            <SvgXml width="20" height="15" xml={backwhite} />
          </TouchableOpacity>

          <Text style={styles.optiontxt}>Options</Text>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  containerStyle: {},
  sliderContainerStyle: {
    backgroundColor: '#BB53F2',
    height: '90rem',
    paddingHorizontal: '10rem',
    paddingVertical: '15rem',
  },
  topcontent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    color: '#9CA0A5',
    fontSize: '11rem',
    marginBottom: '15rem',
  },
  headerTextMain: {
    color: 'white',
    fontSize: '28rem',
    fontWeight: '500',
  },
  optiontxt: {
    color: 'white',
    fontSize: '13rem',
  },
});
