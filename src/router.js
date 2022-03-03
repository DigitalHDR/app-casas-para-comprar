//src/Router.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'ALUGUE',
            headerTitleStyle: {
              fontFamily: 'OpenSans-Bold',
            },

            headerRight: () => (
              <TouchableOpacity style={{marginRight: 15}}>
                <Icon name="work" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'DETALHE',
            headerTitleStyle: {
              fontFamily: 'OpenSans-Bold',
            },

            headerRight: () => (
              <TouchableOpacity style={{marginRight: 15}}>
                <Icon name="work" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
