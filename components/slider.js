import React from 'react';
import {
  ScrollView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {deviceWidth} from './CustomHomeHeader';
// import console = require('console');
export default class Slider extends React.Component {
  state = {
    currentPage: 'page1',
    position: 0,
  };

  scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView

  getPosition = event => {
    position = event.nativeEvent.contentOffset.x;
    this.props.currentPosition(position);
    if (position < 320) {
      this.setState({position: 0});
    } else if (position > 320 && position < 690) {
      this.setState({position: 1});
    } else if (position > 690) {
      this.setState({position: 2});
    }
  };

  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            height: 100,
            width: deviceWidth,
          }}
          pagingEnabled={true}
          horizontal={true}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsHorizontalScrollIndicator={false}
          onScroll={event => this.getPosition(event)} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
          scrollEventThrottle={16}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.priceText,
                this.state.position == 0 && styles.activeText,
              ]}>
              {data[0].cost}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.priceText,
                this.state.position == 1 && styles.activeText,
              ]}>
              {data[1].cost}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.priceText,
                this.state.position == 2 && styles.activeText,
              ]}>
              {data[2].cost}
            </Text>
          </View>
        </ScrollView>

        {/* indicators */}
        <View style={styles.indicatorContainer}>
          {[1, 2, 3].map((_, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      this.state.position === i ? 'purple' : '#ddd',
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  activeText: {color: '#fff', fontSize: 40, fontWeight: 'bold'},
  dot: {
    height: '10rem',
    width: '10rem',
    backgroundColor: 'purple',
    margin: '8rem',
    borderRadius: '5rem',
  },
  swiperContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  indicator: {
    width: '13rem',
    height: '13rem',
    borderRadius: '7rem',
    marginRight: '10rem',
  },
  indicatorContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '20rem',
    alignSelf: 'center',
  },

  textContainer: {
    width: '$dw',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    height: 100,
    width: deviceWidth,
  },
});
