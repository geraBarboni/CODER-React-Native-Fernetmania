import React from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import GridItem from '../components/GridItem';
import colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/actions/category.action';

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('MyFernets', {
      categoryID: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.FlatList}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('NewCategory')}
        style={styles.NewCategory}
      >
        <Ionicons name="add-circle-outline" size={27} color={colors.blackTwo} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flex: 1,
  },
  FlatList: {
    padding: 1,
  },
  NewCategory: {
    backgroundColor: colors.black,
    width: Dimensions.get('window').width / 1.01,
    height: Dimensions.get('window').height / 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  Text: {
    color: colors.blackTwo,
  },
});
