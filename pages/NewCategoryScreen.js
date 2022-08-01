import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  InputText,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const NewCategoryScreen = () => {
  const [borderColor, setBorderColor] = useState();
  return (
    <View style={styles.container}>
      <View>
        <Text>Categoria</Text>
        <TextInput
          onFocus={() => setBorderColor(colors.secondary)}
          style={{ ...styles.input, borderColor }}
        />
      </View>
      <View>
        <Text>Imagen</Text>
        <TouchableOpacity style={styles.addFile}>
          <Ionicons name="image-outline" size={27} color={colors.blackTwo} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addCategory}>
        <Ionicons name="duplicate-outline" size={27} color={colors.blackTwo} />
      </TouchableOpacity>
    </View>
  );
};

export default NewCategoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: Dimensions.get('window').height / 1,
    width: Dimensions.get('window').width / 1,
  },
  input: {
    height: Dimensions.get('window').height / 22,
    padding: 10,
    borderWidth: 2,
    marginVertical: 10,
  },
  addFile: {
    height: Dimensions.get('window').height / 20,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  addCategory: {
    height: Dimensions.get('window').height / 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
