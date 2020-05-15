import React, {useEffect} from 'react';
import {Text, View, Dimensions, Animated, Easing} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const deviceWidth = Dimensions.get('window').width;

export default function Spendings(props) {
  const {moneyIn, moneyOut} = props;
  const totalMoney = moneyIn + moneyOut;

  useEffect(() => animateCharts(), []);
  const currencyformatter = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const animatedViewIn = new Animated.Value(0);
  const animatedViewOut = new Animated.Value(0);
  const animateMoneyIn = {height: animatedViewIn};
  const animateMoneyOut = {height: animatedViewOut};

  const animateCharts = () => {
    const moneyInHeight = (moneyIn / totalMoney) * 100;
    const moneyOutHeight = (moneyOut / totalMoney) * 100;
    Animated.timing(animatedViewIn, {
      toValue: moneyInHeight,
      duration: 1000,
      easing: Easing.linear,
    }).start();

    Animated.timing(animatedViewOut, {
      toValue: moneyOutHeight,
      duration: 1000,
      easing: Easing.linear,
    }).start();
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.moneyView}>
        <Text style={[styles.txt1, {color: '#00AF3F'}]}>
          ₦ {currencyformatter(moneyIn)}
        </Text>
        <Text style={styles.txt2}>Money in</Text>
      </View>
      <View style={[{flex: 1, justifyContent: 'space-evenly'}, styles.chart]}>
        <Animated.View style={[styles.moneyOutChart, animateMoneyIn]} />
        <Animated.View style={[styles.moneyInChart, animateMoneyOut]} />
      </View>
      <View style={styles.moneyView}>
        <Text style={[styles.txt1, {color: '#5D6262'}]}>
          ₦{currencyformatter(moneyOut)}
        </Text>
        <Text style={styles.txt2}>Money out</Text>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  moneyView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txt1: {
    fontSize: '20rem',
    fontWeight: '800',
  },
  txt2: {
    fontSize: '13rem',
    color: '#9CA0A5',
  },
  chart: {
    flexDirection: 'row',
  },
  moneyOutChart: {
    backgroundColor: '#00AF3F',
    width: '10rem',
    borderRadius: '2rem',
    alignSelf: 'flex-end',
  },
  moneyInChart: {
    backgroundColor: '#5D6262',
    width: '10rem',
    alignSelf: 'flex-end',
    borderRadius: '2rem',
  },
});
