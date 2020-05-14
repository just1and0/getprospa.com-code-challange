import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function Transactioncard(props) {
  const {data, componentstyle} = props;
  const currencyformatter = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => props.onPress()}>
      <View style={[styles.cardView1, styles.space]}>{data.icon}</View>
      <View style={[styles.cardView2, styles.bottomLine, styles.space]}>
        <Text style={styles.titlehead}>{data.title}</Text>
        <Text style={[styles.titlecost1, componentstyle.themeColor]}>
          {data.type}
        </Text>
      </View>
      <View style={[styles.cardView3, styles.bottomLine, styles.space]}>
        <Text style={[styles.titlecost, componentstyle.costColor]}>
          ₦{currencyformatter(data.cost)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  card: {
    flexDirection: 'row',
    flex: 1,

    paddingHorizontal: '25rem',
  },
  space: {
    paddingVertical: '20rem',
  },
  cardView1: {
    flex: 1,
  },
  cardView2: {
    flex: 4,
    flexDirection: 'column',
  },
  cardView3: {
    flex: 2,
    justifyContent: 'center',
  },
  titlehead: {
    fontSize: '15rem',
    color: '#270450',
    paddingBottom: '5rem',
  },
  titlecost1: {
    color: '#FA4A84',
    fontSize: '11rem',
  },
  titlecost: {
    fontSize: '16rem',
    alignSelf: 'flex-end',
  },
  bottomLine: {borderBottomColor: '#D8D8D8', borderBottomWidth: 1},
});
