import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function card(props) {
  const {data} = props;
  const currencyformatter = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => props.onPress()}>
      <View style={styles.cardView1}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.titleSub}>{data.acct_no}</Text>
        <Text style={styles.titlecost}>₦{currencyformatter(data.cost)}</Text>
      </View>
      <View style={styles.cardView2}>{data.icon}</View>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '327rem',
    height: '100rem',
    borderRadius: '5rem',
    marginBottom: '20rem',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '15rem',
    paddingHorizontal: '15rem',
  },
  cardView1: {
    flex: 6,
    flexDirection: 'column',
  },
  cardView2: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#5D6262',
    fontSize: '13rem',
    marginBottom: '5rem',
  },
  titleSub: {
    color: '#9CA0A5',
    fontSize: '11rem',
    marginBottom: '5rem',
  },
  titlecost: {
    color: '#270450',
    fontSize: '28rem',
  },
});
