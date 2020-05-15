import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import bottomcurve from './../assets/svg/bottomcurve1.svg';
import back from './../assets/svg/back.svg';
import {SvgXml} from 'react-native-svg';
import Slider from './slider';

const width = Dimensions.get('window').width;
export const deviceWidth = Dimensions.get('window').width;
export default function Header(props) {
  const {data, allpage} = props;
  const handlePosition = () => {
    // if (position < 320) {
    //   this.setState({position: 0});
    // } else if (position > 320 && position < 690) {
    //   this.setState({position: 1});
    // } else if (position > 690) {
    //   this.setState({position: 2});
    // }
  };
  return (
    <View style={styles.containerStyle}>
      <SvgXml
        width={deviceWidth}
        height={deviceWidth * (213 / 375)}
        xml={bottomcurve}
        style={{top: -5}}
      />
      <View style={styles.sliderContainerStyle}>
        <View style={[styles.topcontent, {}]}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => props.goBack()}>
              <SvgXml width="20" height="15" xml={back} />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.accttext}>
              {' '}
              {data.title == 'PROSPA CURRENT ACCOUNT'
                ? `CURRENT ACCOUNT`
                : data.title}
            </Text>
            <Text style={styles.acctno}>{data.acct_no}</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={styles.optionText}>Options</Text>
          </View>
        </View>
        <Slider data={allpage} currentPosition={e => handlePosition(e)} />
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  containerStyle: {},
  sliderContainerStyle: {
    backgroundColor: 'transparent',
    height: '200rem',
    position: 'absolute',
    top: '25rem',
    width: '100%',
  },
  topcontent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '25rem',
  },
  headerTextMain: {
    color: 'white',
    fontSize: '40rem',
    fontWeight: '500',
  },
  optionText: {
    color: '#FA4A84',
    fontSize: '13rem',
  },
  accttext: {
    color: '#FFFFFF',
    fontSize: '17rem',
    fontWeight: '600',
  },
  acctno: {
    color: '#9CA0A5',
    fontSize: '13rem',
  },
});
