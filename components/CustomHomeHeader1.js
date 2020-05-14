import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import info from './../assets/svg/info.svg';
import bottomcurve from './../assets/svg/bottomcurve.svg';
import {SvgXml} from 'react-native-svg';
import AvatarSocial from 'react-native-avatar-social';

export const deviceWidth = Dimensions.get('window').width;

export default function Header(props) {
  return (
    <View style={styles.containerStyle}>
      <SvgXml
        width={deviceWidth}
        height={deviceWidth * (267 / 365)}
        xml={bottomcurve}
        style={{top: -5}}
      />
      <View style={styles.sliderContainerStyle}>
        <View style={[styles.topcontent, {alignItems: 'center'}]}>
          <SvgXml width="20" height="20" xml={info} />

          <AvatarSocial
            dim={80}
            image={{
              uri:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg',
            }}
            name="Connie Nielsen"
            type="image"
            isStatus={true}
            isIcon={false}
            iconSize={20}
            iconColor={'#26C6DA'}
            badgeColor={'#ffffff'}
            badgeBackground={'#303030'}
            style={[styles.ellipse]}
          />
        </View>
        <View>
          <Text style={styles.headerText}>THURSDAY, 18 JUNE</Text>
          <Text style={styles.headerTextMain}>Welcome back,{`\n`}Olivia!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  containerStyle: {},
  sliderContainerStyle: {
    backgroundColor: 'transparent',
    height: '200rem',
    alignSelf: 'center',
    position: 'absolute',
    top: '25rem',
    width: '327rem',
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
});
