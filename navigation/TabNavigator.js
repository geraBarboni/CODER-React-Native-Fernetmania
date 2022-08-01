import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

import ShopNavigator from './ShopNavigation';
import NewFernetNavigator from './NewFernetNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    <BottomTabs.Screen
      name="ShopTab"
      component={ShopNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'grid' : 'grid-outline'}
            size={24}
            color={focused ? colors.secondary : colors.blackTwo}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="NewFernetTab"
      component={NewFernetNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'add-circle' : 'add-circle-outline'}
            size={27}
            color={focused ? colors.secondary : colors.blackTwo}
          />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
    height: Dimensions.get('window').height / 12,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
