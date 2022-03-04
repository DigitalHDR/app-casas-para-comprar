import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyles={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderWindth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#fff"
      activeDotStyle={{
        borderColor: '#000',
        borderWindth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}>
      <View style={styles.slide}>
        <Image
          source={require('../assets/house2.jpg')}
          style={{width: '100%', height: 400}}></Image>
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../assets/house3.jpg')}
          style={{width: '100%', height: 400}}></Image>
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../assets/house4.jpg')}
          style={{width: '100%', height: 400}}></Image>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
