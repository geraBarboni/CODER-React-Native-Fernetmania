import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewFernetScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}>New Fernet Screen</Text>
      </View>
    </View>
  );
};

export default NewFernetScreen;

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
