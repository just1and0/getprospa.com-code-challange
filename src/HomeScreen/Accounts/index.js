import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fadeIn, fromBottom} from 'react-navigation-transitions';

import P17 from './extra/17';
import P18 from './extra/18';
import P19 from './extra/19';
const handleCustomTransition = ({scenes}) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === 'Login' &&
    nextScene.route.routeName === 'Forgetpass'
  ) {
    return fromBottom(500);
  }
  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === 'Signup' &&
    nextScene.route.routeName === 'Otp'
  ) {
    return fromBottom(500);
  }

  return fadeIn(500);
};

const AppNavigator = createStackNavigator(
  {
    P17: {
      screen: P17,
      navigationOptions: {
        header: null,
      },
    },

    P18: {
      screen: P18,
      navigationOptions: {
        header: null,
      },
    },

    P19: {
      screen: P19,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    transitionConfig: nav => handleCustomTransition(nav),
  },
);

export default createAppContainer(AppNavigator);
