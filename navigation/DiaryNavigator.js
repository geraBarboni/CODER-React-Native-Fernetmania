import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllFernetsScreen from '../pages/AllFernetsScreen';
import DetailFernetScreen from '../pages/DetailFernetScreen';

import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const DiaryNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.black,
      },
      headerTintColor: Colors.secondary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: {
        justifyContent: 'center',
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={AllFernetsScreen}
      options={{ title: 'Mi queridísimo diario' }}
    />
    <Stack.Screen
      name="Detail"
      component={DetailFernetScreen}
      options={({ route }) => ({
        title: route.params.fernet.name + ' de ' + route.params.fernet.autor,
      })}
    />
  </Stack.Navigator>
);

export default DiaryNavigator;
