import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import Router from './src/router';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Router />
    </>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 40,
    fontFamily: 'OpenSans-LightItalic',
  },
});
