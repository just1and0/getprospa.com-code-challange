import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import React from 'react';

import Bottomtab from './../../components/bottomTab';

import Accounts from './Accounts/index';
// import Support from './Support/index';
// import Orders from './Orders/Index';
// import Cart from './Orders/cart';

const TabScreens = createBottomTabNavigator(
  {
    Accounts: {
      screen: Accounts,
    },
    Orders: {
      screen: Accounts,
    },
    Support: {
      screen: Accounts,
    },
    Account: {
      screen: Accounts,
    },
    more: {
      screen: Accounts,
    },
  },
  {
    initialRouteName: 'Accounts',

    tabBarComponent: ({focused, navigation, ...options}) => {
      return (
        <Bottomtab {...options} navigation={navigation} focused={focused} />
      );
    },
  },
);

export default createAppContainer(TabScreens);
