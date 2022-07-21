import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

const MyFernets = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}>MyFernets</Text>
        <Button
          title="new Fernet"
          color={Colors.primaryThree}
          onPress={() => {
            navigation.navigate('NewFernet');
          }}
        />
      </View>
    </View>
  );
};

export default MyFernets;

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
