/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, Switch, ScrollView, StatusBar} from 'react-native';
import {SvgXml} from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import phone from './../../../../assets/svg/phone.svg';
import accounts from './../../../../assets/svg/account.svg';
import invoice from './../../../../assets/svg/invoice-d.svg';
import Header2 from './../../../../components/CustomHomeHeader2';
import rightArrow from './../../../../assets/svg/right-arrow.svg';
import calendar from './../../../../assets/svg/calendar.svg';
import wallet from './../../../../assets/svg/wallet.svg';
import cal from './../../../../assets/svg/cal.svg';

export default function P19({navigation}) {
  const [isEnabled, setIsEnabled] = useState(true);
  const data = navigation.getParam('data');
  const goBack = () => {
    navigation.goBack();
  };

  const card1 = [
    {
      id: '1',
      icon: <SvgXml width="12" height="22" xml={phone} />,
      title: 'Utility',
    },
    {
      id: '2',
      icon: <SvgXml width="20" height="17" xml={accounts} />,
      title: 'Current Account',
    },
    {
      id: '3',
      icon: <SvgXml width="14" height="20" xml={invoice} />,
      title: 'Add a receipt',
    },
  ];

  const card2 = [
    {
      id: '1',
      icon: <SvgXml width="15" height="17" xml={calendar} />,
      title: 'June total spent',
      cost: 650.12,
    },
    {
      id: '2',
      icon: <SvgXml width="20" height="17" xml={wallet} />,
      title: 'Transaction in July',
      cost: 4,
    },
    {
      id: '3',
      icon: <SvgXml width="14" height="20" xml={cal} />,
      title: 'Average spent',
      cost: 200.01,
    },
  ];

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <View style={{backgroundColor: '#F5F6F7', flex: 1}}>
      <StatusBar backgroundColor="#BB53F2" />
      <Header2 goback={() => goBack()} />
      <View style={{flex: 1}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.fview, {}]}>
            <Text style={styles.datatxt}>5 JULY 2019 11:50 AM</Text>
            <Text style={styles.titletxt}>{data.title}</Text>
            <View style={styles.tranView}>
              {card1.map(item => {
                return (
                  <View style={styles.card} key={item.id}>
                    <View style={[{flex: 1}, styles.spacer]}>{item.icon}</View>
                    <View style={[{flex: 4}, styles.spacer, styles.bottomLine]}>
                      <Text style={styles.cardtxt}>{item.title}</Text>
                    </View>
                    <View
                      style={[
                        {flex: 1, alignItems: 'center'},
                        styles.spacer,
                        styles.bottomLine,
                      ]}>
                      <SvgXml width="6" height="10" xml={rightArrow} />
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{paddingVertical: 10, paddingHorizontal: 25}}>
            <Text style={styles.historytxt}>USER HISTORY</Text>
          </View>
          <View style={[styles.fview1, {}]}>
            <Text style={styles.titletxt}>You and {data.title}</Text>
            <View style={styles.tranView}>
              {card2.map(item => {
                return (
                  <View style={[styles.card]} key={item.id}>
                    <View style={[{flex: 1}, styles.spacer]}>{item.icon}</View>
                    <View style={[{flex: 3}, styles.spacer, styles.bottomLine]}>
                      <Text style={styles.cardtxt}>{item.title}</Text>
                    </View>
                    <View
                      style={[
                        {flex: 1, alignItems: 'flex-end', paddingRight: 25},
                        styles.spacer,
                        styles.bottomLine,
                      ]}>
                      <Text style={styles.costtxt}>
                        {item.title != 'Transaction in July' && `₦`} {item.cost}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{paddingVertical: 10, paddingHorizontal: 25}}>
            <Text style={styles.historytxt}>SUBSCRIPTION</Text>
          </View>
          <View style={[styles.fview1, {flexDirection: 'row'}]}>
            <View
              style={{
                flex: 4,
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={styles.subtxt}>Repeating payment</Text>
              <Text style={styles.subtxt1}>
                We’ll predict this for you in summary
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Switch
                trackColor={{false: '#767577', true: '#4CD964'}}
                thumbColor={isEnabled ? 'white' : 'white'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch()}
                value={isEnabled}
              />
            </View>
          </View>
        </ScrollView>

        <View style={[styles.circle, styles.circleShadow]}>
          <SvgXml width="18" height="32" xml={phone} />
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  circle: {
    height: '65rem',
    width: '65rem',
    borderRadius: '65rem',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-32.5rem',
    marginLeft: '25rem',
  },
  circleShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fview: {
    paddingTop: '50rem',
    backgroundColor: 'white',
    paddingLeft: '25rem',
  },
  fview1: {
    backgroundColor: 'white',
    paddingLeft: '25rem',
    paddingVertical: '10rem',
  },
  datatxt: {
    color: '#9CA0A5',
    fontSize: '13rem',
  },
  titletxt: {
    color: '#270450',
    fontSize: '22rem',
    marginTop: '10rem',
  },
  tranView: {
    marginTop: '10rem',
  },
  card: {
    flexDirection: 'row',
  },
  spacer: {
    paddingVertical: '15rem',
  },
  bottomLine: {borderBottomColor: '#D8D8D8', borderBottomWidth: 1},
  cardtxt: {
    color: '#270450',
    fontSize: '13rem',
    fontWeight: '500',
  },
  historytxt: {
    color: '#9CA0A5',
    fontSize: '13rem',
  },
  subtxt: {
    color: '#270450',
    fontSize: '13rem',
  },
  subtxt1: {
    color: '#9CA0A5',
    fontSize: '10rem',
    marginTop: '5rem',
  },
  costtxt: {
    color: '#270450',
    fontSize: '15rem',
  },
});
