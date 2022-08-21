import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  InputText,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FernetItem from '../components/FernetItem';
import { useSelector } from 'react-redux';

const NewCategoryScreen = () => {
  const [title, setTitle] = useState();
  const [autor, setAutor] = useState();
  const [desc, setDesc] = useState();

  return (
    <View style={styles.container}>
      <View>
        <Text>Titulo</Text>
        <TextInput
          style={{ ...styles.input }}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View>
        <Text>Autor</Text>
        <TextInput
          style={{ ...styles.input }}
          onChangeText={(text) => setAutor(text)}
        />
      </View>
      <View>
        <Text>Descripcion</Text>
        <TextInput
          style={{ ...styles.input }}
          onChangeText={(text) => setDesc(text)}
        />
      </View>
      <View>
        <Text>Lugar</Text>
        <TouchableOpacity style={styles.addFile}>
          <Ionicons name="location-outline" size={27} color={colors.blackTwo} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Imagen</Text>
        <TouchableOpacity style={styles.addFile}>
          <Ionicons name="image-outline" size={27} color={colors.blackTwo} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addCategory}
        onPress={() => {
          console.log(title, autor, desc);
        }}
      >
        <Ionicons name="add" size={27} color={colors.blackTwo} />
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
    marginVertical: 20,
  },
});

/*



*/
