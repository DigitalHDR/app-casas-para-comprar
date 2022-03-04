//src/pages/detail.js
import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SwiperComponent from '../components/SwiperComponent';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%',
  },
});
