import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { getFernets } from '../store/actions/fernets.actions';
import FernetItem from '../components/FernetItem';
import { selectFernet } from '../store/actions/fernet.action';
import colors from '../constants/colors';

import { loadPublication } from '../store/actions/publication.action';

import images from '../assets/images.jpg';

const AllFernetsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const Allfernets = useSelector((store) => store.publications.publications);

  const [fernets, setfernets] = useState([]);

  useEffect(() => {
    dispatch(loadPublication());
  }, []);

  const handleSelected = (item) => {
    dispatch(selectFernet(parseInt(item.id)));
    navigation.navigate('Detail', {
      fernet: item,
    });
  };

  const renderItemFernet = ({ item }) => (
    <FernetItem item={item} onSelected={handleSelected} />
  );

  return (
    <>
      {Allfernets?.length > 0 || Allfernets === null ? (
        <FlatList
          style={styles.FlatList}
          data={Allfernets}
          keyExtractor={(item) => item.id}
          renderItem={renderItemFernet}
          numColumns={1}
        />
      ) : (
        <View style={styles.AlertContainer}>
          <View>
            <Image style={styles.image} source={images}></Image>
          </View>
          <Text style={styles.text}>Acá no tiene que haber coca papi...</Text>
        </View>
      )}
    </>
  );
};

export default AllFernetsScreen;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flex: 1,
  },
  FlatList: {
    marginTop: 1,
  },
  AlertContainer: {
    height: 'auto',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').width / 1.1,
    marginHorizontal: 'auto',
    resizeMode: 'cover',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'OpenSans',
    color: colors.secondary,
  },
});
