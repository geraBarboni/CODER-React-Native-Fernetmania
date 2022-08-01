import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const DetailFernetScreen = ({ route, fernet }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.fernetItem}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: route.params.fernet.uri }}
          ></Image>
        </View>
        <View>
          <Text style={styles.title}>{route.params.fernet.name}</Text>
        </View>
        <View style={styles.deatailsHeader}>
          <Text style={styles.details}>{route.params.fernet.autor}</Text>
          <View style={styles.deatailsHeaderUbi}>
            <Ionicons
              name="location-outline"
              size={21}
              color={colors.blackTwo}
            />
            <Text style={styles.details}>{route.params.fernet.ubication}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.details}>{route.params.fernet.desc}</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default DetailFernetScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontFamily: 'OpenSans',
  },
  fernetItem: {
    padding: 20,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2,
    height: '99.6%',
    backgroundColor: colors.black,
  },
  image: {
    height: Dimensions.get('window').width / 1,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'OpenSans',
    color: colors.secondary,
  },
  deatailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: 18,
    color: colors.blackTwo,
  },
  deatailsHeaderUbi: {
    flexDirection: 'row',
  },
});
