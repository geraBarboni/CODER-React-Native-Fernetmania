import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../constants/colors';

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={{ ...styles.container }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 1,
    backgroundColor: colors.blackTwo,
    width: Dimensions.get('window').width / 2.02,
    height: Dimensions.get('window').width / 2.02,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  title: {
    fontFamily: 'OpenSans',
    color: 'white',
  },
});
