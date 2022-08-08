import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FernetItem from '../components/FernetItem';

import { useSelector, useDispatch } from 'react-redux';
import { filteredFernet, selectFernet } from '../store/actions/fernet.action';

const CategoryFernetScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryFernets = useSelector((state) => state.fernets.filteredFernet);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredFernet(category.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectFernet(item.id));
    navigation.navigate('Detail', {
      fernet: item,
    });
  };

  const renderItemFernet = ({ item }) => (
    <FernetItem item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      style={styles.FlatList}
      data={categoryFernets}
      keyExtractor={(item) => item.id}
      renderItem={renderItemFernet}
    />
  );
};

export default CategoryFernetScreen;

const styles = StyleSheet.create({
  FlatList: {
    marginTop: 1,
  },
});
