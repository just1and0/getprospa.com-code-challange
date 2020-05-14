/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from './../../../../components/CustomHomeHeader';
import transfer from './../../../../assets/svg/transfericon.svg';
import travel from './../../../../assets/svg/travel.svg';
import Transactioncard from './../../../../components/transactioncard';
import right from './../../../../assets/svg/right.svg';
import payicon from './../../../../assets/svg/payicon.svg';
import cardicon from './../../../../assets/svg/card-icon.svg';
import planeround from './../../../../assets/svg/plane-round.svg';
import mobileround from './../../../../assets/svg/mobile-round.svg';
import invoiceround from './../../../../assets/svg/invoice-round.svg';

export default function P18({navigation}) {
  const data = navigation.getParam('data');
  const allpage = navigation.getParam('allpage');

  const goBack = () => {
    navigation.goBack();
  };

  const transactions = [
    {
      id: '1',
      cost: 5234.96,
      title: 'British Airways',
      type: 'Travel',
      icon: <SvgXml width="40" height="40" xml={planeround} />,
      onPress: e => accountPage(e),
      componentstyle: {
        costColor: {color: '#3CBA54'},
        themeColor: {color: '#FA4A84'},
      },
    },
    {
      id: '2',
      cost: 250.79,
      title: 'MTN Mobile',
      type: 'Utility',
      icon: <SvgXml width="40" height="40" xml={mobileround} />,
      onPress: e => accountPage(e),
      componentstyle: {
        costColor: {color: '#270450'},
        themeColor: {color: '#BB53F2'},
      },
    },
    {
      id: '3',
      cost: 1050.01,
      title: 'Invoice #0044',
      type: 'Sales',
      icon: <SvgXml width="40" height="40" xml={invoiceround} />,
      onPress: e => accountPage(e),
      componentstyle: {
        costColor: {color: '#3CBA54'},
        themeColor: {color: '#7E51FF'},
      },
    },
    {
      id: '4',
      cost: 250000.01,
      title: 'Christina Rose',
      type: 'Salary',
      icon: <SvgXml width="40" height="40" xml={travel} />,
      onPress: e => accountPage(e),
      componentstyle: {
        costColor: {color: '#270450'},
        themeColor: {color: '#74D4F0'},
      },
    },
  ];

  const listdata = [
    {
      id: '1',
      title: 'Transfer',
      icon: (
        <View style={styles.circle}>
          <SvgXml width="20" height="20" xml={transfer} />
        </View>
      ),
    },
    {
      id: '2',
      title: 'Pay',
      icon: (
        <View style={styles.circle}>
          <SvgXml width="20" height="20" xml={payicon} />
        </View>
      ),
    },
    {
      id: '3',
      title: 'Card',
      icon: (
        <View style={styles.circle}>
          <SvgXml width="20" height="20" xml={cardicon} />
        </View>
      ),
    },
  ];

  const accountPage = e => {
    navigation.navigate('P19', {data: e});
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header goBack={goBack} data={data} allpage={allpage} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'column',
              paddingVertical: 0,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {listdata.map(items => {
                return (
                  <View
                    key={items.id}
                    style={[
                      {justifyContent: 'center', alignItems: 'center'},
                      styles.list,
                    ]}>
                    {items.icon}
                    <Text style={[{color: '#5D6262'}, styles.listtxt]}>
                      {items.title}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={[styles.card]}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}} />
                  <View style={{flex: 3}}>
                    <Text style={[styles.daytext, {alignSelf: 'center'}]}>
                      Last 30 days
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <SvgXml width="15" height="10" xml={right} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{paddingVertical: 15}}>
            <Text
              style={{
                color: '#9CA0A5',
                fontSize: 13,
                fontWeight: '500',
                paddingHorizontal: 25,
                paddingVertical: 15,
                backgroundColor: '#F5F6F7',
              }}>
              WED, 3 JULY
            </Text>
          </View>
          <View style={{backgroundColor: 'white'}}>
            {transactions.map(item => {
              return (
                <Transactioncard
                  key={item.id}
                  componentstyle={item.componentstyle}
                  data={item}
                  onPress={() => item.onPress(item)}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  list: {
    paddingVertical: '10rem',
  },
  listtxt: {
    marginTop: '10rem',
    fontSize: '13rem',
    color: '#5D6262',
  },
  card: {
    width: '327rem',
    height: '126rem',
    backgroundColor: 'white',
    borderRadius: '5rem',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingVertical: '10rem',
    paddingHorizontal: '15rem',
  },
  daytext: {
    color: '#FA4A84',
    fontSize: '12rem',
    letterSpacing: '1rem',
  },
  circle: {
    height: '40rem',
    width: '40rem',
    borderRadius: '40rem',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCDCEE',
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
});
