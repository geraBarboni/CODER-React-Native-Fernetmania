import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation';

import Colors from './constants/colors';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
  });

  if (!loaded) return <AppLoading />;

  return <MainNavigation />;
}

const styles = StyleSheet.create({});
