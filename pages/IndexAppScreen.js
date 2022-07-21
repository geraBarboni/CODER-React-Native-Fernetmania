import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';

const IndexAppScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}>Este es el index</Text>
        <Button
          style={styles.button}
          title="my fernets"
          color={Colors.primaryThree}
          onPress={() => {
            navigation.navigate('MyFernets');
          }}
        />
      </View>
    </View>
  );
};

export default IndexAppScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    width: '60%',
    height: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'OpenSans',
  },
});
