import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories';
import GridItem from '../components/GridItem';

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate('MyFernets', {
      categoryID: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      style={styles.FlatList}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  FlatList: {
    padding: 1,
  },
});
