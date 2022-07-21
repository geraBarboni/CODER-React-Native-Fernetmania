import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexAppScreen from './pages/IndexAppScreen';
import MyFernetsScreen from './pages/MyFernetsScreen';
import NewFernetScreen from './pages/NewFernetScreen';

import Colors from './constants/colors';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
  });

  if (!loaded) return <AppLoading />;

  //Navigation
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
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
        <Stack.Screen name="Index" component={IndexAppScreen} />
        <Stack.Screen name="MyFernets" component={MyFernetsScreen} />
        <Stack.Screen name="NewFernet" component={NewFernetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans',
  },
});
