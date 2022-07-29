import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import colors from '../constants/colors';

const FernetItem = ({ item, onSelected }) => (
  <TouchableOpacity onPress={() => onSelected(item)}>
    <View style={styles.fernetItem}>
      <View>
        <Image style={styles.image} source={{ uri: item.uri }}></Image>
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.details}>{item.autor}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default FernetItem;

const styles = StyleSheet.create({
  fernetItem: {
    padding: 20,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: colors.blackTwo,
  },
  image: {
    backgroundColor: 'red',
    height: Dimensions.get('window').width / 1,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'OpenSans',
  },
  details: {
    fontSize: 18,
  },
});
