/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {SvgXml} from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header1 from './../../../../components/CustomHomeHeader1';
import Card from './../../../../components/card';
import Adscard from './../../../../components/adscard';
import current from './../../../../assets/svg/wallet-round.svg';
import savings from './../../../../assets/svg/savings-round.svg';
import tax from './../../../../assets/svg/tax.svg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default function P17({navigation}) {
  const data = [
    {
      id: '1',
      cost: 5234.96,
      title: 'PROSPA CURRENT ACCOUNT',
      acct_no: '00-00-00 18361554',
      icon: <SvgXml width="40" height="40" xml={current} />,
      onPress: (e, allpage) => accountPage(e, allpage),
    },
    {
      id: '2',
      cost: 3234.43,
      title: 'SAVINGS ACCOUNT',
      acct_no: '00-00-00 18361554',
      icon: <SvgXml width="40" height="40" xml={savings} />,
      onPress: (e, allpage) => accountPage(e, allpage),
    },
    {
      id: '3',
      cost: 10234.01,
      title: 'TAX ACCOUNT',
      acct_no: '00-00-00 18361554',
      icon: <SvgXml width="40" height="40" xml={tax} />,
      onPress: (e, allpage) => accountPage(e, allpage),
    },
  ];

  const accountPage = (e, allpage) => {
    navigation.navigate('P18', {data: e, allpage});
  };

  return (
    <View style={{backgroundColor: '#F5F6F7', flex: 1}}>
      <Header1 />

      <View style={styles.scrollContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {data.map(item => {
            return (
              <Card
                key={item.id}
                data={item}
                onPress={() => item.onPress(item, data)}
              />
            );
          })}
          <Adscard />
          <View style={{height: 300}} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  scrollContainer: {
    position: 'absolute',
    top: '220rem',
    width: deviceWidth,
    height: EStyleSheet.value(deviceHeight - 256),
    alignItems: 'center',
  },
});
