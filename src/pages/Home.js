//src/pages/home.js
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import New from '../components/New';

export default function Home() {
  const natigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Icon name="search" />
          <TextInput placeholder="O que está procurando" style={styles.input} />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <New
          cover={require('../assets/house1.jpg')}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugra seguro e monitorado 24horas"
          onPress={() => natigation.navigate('Detail')}
        />
        <New
          cover={require('../assets/house2.jpg')}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugra seguro e monitorado 24horas"
          onPress={() => {}}
        />
        <New
          cover={require('../assets/house3.jpg')}
          name="Rancho SP"
          description="Casa nova uma quadra do mar, lugra seguro e monitorado 24horas"
          onPress={() => {}}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#fff',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%',
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#4f4a4a',
  },
});
