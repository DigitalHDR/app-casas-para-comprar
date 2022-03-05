//src/pages/detail.js
import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SwiperComponent from '../components/SwiperComponent';
import Stars from 'react-native-stars';
import {Icon} from 'react-native-elements';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.headerContent}>
        <View style={{width: '65%'}}>
          <Text style={styles.house}>Casa de Praia</Text>
        </View>
        <View style={{width: '35%'}}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Icon name="star" size={24} style={styles.myStarStyles} />
              }
            />
          </View>
        </View>
      </View>
      <Text style={styles.price}>R$ 1.200,00</Text>
      <Text style={styles.description}>
        Casa nova um quadra do mar, lugar seguro e monitorado 24horsaa
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15, marginTop: 20}}>
        <View style={styles.slide}>
          <Image
            source={require('../assets/house5.jpg')}
            style={{width: 90, height: 90, borderRadius: 8}}
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../assets/house6.jpg')}
            style={{width: 90, height: 90, borderRadius: 8}}
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../assets/house2.jpg')}
            style={{width: 90, height: 90, borderRadius: 8}}
          />
        </View>
      </ScrollView>
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
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  house: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#4f4a4a',
  },
  rating: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 9,
    color: 'blue',
  },
  myStarStyles: {
    color: 'blue',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  price: {
    paddingHorizontal: 20,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#000',
  },
  description: {
    fontFamily: '',
    paddingHorizontal: 20,
    color: '#ddd',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 90,
    width: 90,
    borderRadius: 8,
    marginRight: 20,
  },
});
