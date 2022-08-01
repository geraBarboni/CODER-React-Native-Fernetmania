import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../pages/CategoriesScreen';
import CategoryFernetScreen from '../pages/CategoryFernetScreen';
import DetailFernetScreen from '../pages/DetailFernetScreen';

import Colors from '../constants/colors';
import NewCategoryScreen from '../pages/NewCategoryScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
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
      component={CategoriesScreen}
      options={{ title: 'Todo esto te mamaste' }}
    />
    <Stack.Screen
      name="MyFernets"
      component={CategoryFernetScreen}
      options={({ route }) => ({
        title: 'Los que salieron ' + route.params.name,
      })}
    />
    <Stack.Screen
      name="Detail"
      component={DetailFernetScreen}
      options={({ route }) => ({
        title: route.params.fernet.name + ' de ' + route.params.fernet.autor,
      })}
    />
    <Stack.Screen
      name="NewCategory"
      component={NewCategoryScreen}
      options={{ title: 'Como salio eso?' }}
    />
  </Stack.Navigator>
);

export default ShopNavigator;
