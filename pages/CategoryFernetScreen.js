import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FERNETS } from '../data/fernets';
import FernetItem from '../components/FernetItem';

const CategoryFernetScreen = ({ navigation, route }) => {
  const fernets = FERNETS.filter(
    (fernet) => fernet.category === route.params.categoryID
  );

  const handleSelected = (item) => {
    navigation.navigate('NewFernet', {
      fernet: item,
    });
  };

  const renderItemFernet = ({ item }) => (
    <FernetItem item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      style={styles.FlatList}
      data={fernets}
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
