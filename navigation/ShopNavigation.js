import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../pages/CategoriesScreen';
import CategoryFernetScreen from '../pages/CategoryFernetScreen';
import NewFernetScreen from '../pages/NewFernetScreen';

import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryOne,
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
        options={{ title: 'Como salio eso?' }}
      />
      <Stack.Screen
        name="MyFernets"
        component={CategoryFernetScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="NewFernet"
        component={NewFernetScreen}
        options={{ title: 'Nuevo Fernet' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default ShopNavigator;
