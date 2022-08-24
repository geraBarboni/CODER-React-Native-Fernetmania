import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import ImageSelector from '../components/ImageSelector';

import { addPlublication } from '../store/actions/publication.action';

const NewFernetScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [autor, setAutor] = useState('');
  const [desc, setDesc] = useState('');
  const [ubication, setUbication] = useState('');
  const [image, setImage] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (title && autor && image != '') {
      setDisabled(!disabled);
    }
  }, [title, autor, image]);

  const handlepublication = () => {
    const publication = {
      id: Date.now(),
      desc: desc,
      autor: autor,
      name: title,
      //uri: 'https://scontent.fcor11-1.fna.fbcdn.net/v/t1.6435-9/82258869_831134407309008_939405537722761216_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGAHIUtMDzuRpPsSghCAgAm2S_OvTwFRQvZL869PAVFC9SgxgY5sO7xgeFvSfLnsScKdvgrpKvFHxRu-8XdTco5&_nc_ohc=HM2eiD82EU4AX_s6-oo&_nc_ht=scontent.fcor11-1.fna&oh=00_AT_hK9Tj1446QgnFNf4Rzijhj0PlAJsjixCrmNukYrWveQ&oe=632BE99F',
      uri: image,
      ubication: ubication,
    };
    dispatch(addPlublication(publication));
    setTitle('');
    setAutor('');
    setDesc('');
    setUbication('');
    setImage('');
    navigation.navigate('DiaryTab');
  };

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
        <TextInput
          style={{ ...styles.input }}
          onChangeText={(text) => setUbication(text)}
        />
      </View>
      <View>
        <Text>Imagen</Text>
        <ImageSelector onImage={(image) => setImage(image)} />
      </View>
      <TouchableOpacity
        style={styles.addFernet}
        disabled={disabled}
        onPress={() => {
          handlepublication();
        }}
      >
        <Ionicons name="add" size={27} color={colors.blackTwo} />
      </TouchableOpacity>
    </View>
  );
};

export default NewFernetScreen;

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
  addFernet: {
    height: Dimensions.get('window').height / 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

/*



*/
