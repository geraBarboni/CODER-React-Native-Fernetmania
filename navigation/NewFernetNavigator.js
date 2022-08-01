import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewFernetScreen from '../pages/NewFernetScreen';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const NewFernetNavigator = () => (
  <Stack.Navigator
    initialRouteName="NewFernet"
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.secondary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: {
        justifyContent: 'center',
      },
    }}
  >
    <Stack.Screen
      name="NewFernet"
      component={NewFernetScreen}
      options={{ title: 'Fernecito nuevo' }}
    />
  </Stack.Navigator>
);

export default NewFernetNavigator;
