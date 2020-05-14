import React from 'react';
import {SvgXml} from 'react-native-svg';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationActions} from 'react-navigation';

import accountA from './../assets/svg/account.svg';
import accountI from './../assets/svg/account-d.svg';

import invoiceI from './../assets/svg/invoice-d.svg';
import invoiceA from './../assets/svg/invoice.svg';

import payI from './../assets/svg/pay-d.svg';
import payA from './../assets/svg/pay.svg';

import summaryI from './../assets/svg/summary-d.svg';
import summaryA from './../assets/svg/summary.svg';

import menuI from './../assets/svg/menu-d.svg';
import menuA from './../assets/svg/menu.svg';

export default function Bottomtab(props) {
  const currentScreen = props.navigation.state.index;

  return (
    <View style={[{}, styles.container]}>
      {currentScreen == 0 ? (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('Accounts')}>
          <SvgXml width="17" height="22" xml={accountA} />
          <Text style={[{color: '#FA4A84'}, styles.iconText]}>Accounts</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('Accounts')}>
          <SvgXml width="17" height="22" xml={accountI} />
          <Text style={[{color: '#414042'}, styles.iconText]}>Accounts</Text>
        </TouchableOpacity>
      )}

      {currentScreen == 1 ? (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() =>
            props.navigation.navigate(
              'Orders',
              {},
              NavigationActions.navigate({routeName: 'Tabs'}),
            )
          }>
          <SvgXml width="17" height="22" xml={invoiceA} />
          <Text style={[{color: '#FA4A84'}, styles.iconText]}>Invoice</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() =>
            props.navigation.navigate(
              'Orders',
              {},
              NavigationActions.navigate({routeName: 'Tabs'}),
            )
          }>
          <SvgXml width="17" height="22" xml={invoiceI} />
          <Text style={[{color: '#414042'}, styles.iconText]}>Invoice</Text>
        </TouchableOpacity>
      )}

      {currentScreen == 2 ? (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('Support')}>
          <SvgXml width="17" height="22" xml={payA} />
          <Text style={[{color: '#FA4A84'}, styles.iconText]}>Pay</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('Support')}>
          <SvgXml width="17" height="22" xml={payI} />
          <Text style={[{color: '#414042'}, styles.iconText]}>Pay</Text>
        </TouchableOpacity>
      )}

      {currentScreen == 3 ? (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('Account')}>
          <SvgXml width="17" height="22" xml={summaryA} />
          <Text style={[{color: '#FA4A84'}, styles.iconText]}>Summary</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('Account')}>
          <SvgXml width="17" height="22" xml={summaryI} />
          <Text style={[{color: '#414042'}, styles.iconText]}>Summary</Text>
        </TouchableOpacity>
      )}
      {currentScreen == 4 ? (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('more')}>
          <SvgXml width="17" height="22" xml={menuA} />
          <Text style={[{color: '#FA4A84'}, styles.iconText]}>More</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[{flex: 1}, styles.iconHolder]}
          onPress={() => props.navigation.navigate('more')}>
          <SvgXml width="17" height="22" xml={menuI} />
          <Text style={[{color: '#414042'}, styles.iconText]}>More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    height: '56rem',
    flexDirection: 'row',
  },
  iconHolder: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: '9rem',
    marginTop: '7rem',
  },
  fab: {
    backgroundColor: '#EDF6F6',
    width: '144rem',
    height: '47rem',
    position: 'absolute',
    top: '-50rem',
    left: '120rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '20rem',
    borderRadius: '3rem',
  },
  downfab: {
    position: 'absolute',
    top: '32rem',
    left: '-75rem',
  },
  fabtext: {
    color: '#2B8C8A',
    fontSize: '17rem',
  },
});
