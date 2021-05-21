import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealCardItem from './MealCardItem';

const MealList = ({ receitasList, navigation }) => {
  // Inicial state para favorite icon
  const mealsFavorites = useSelector(({ meals }) => meals.favoriteMeals);
  const RenderReceitaItem = ({ item }) => {
    const isFavorited = mealsFavorites.some(meal => meal.id === item.id);

    return (
      <MealCardItem
        titulo={item.titulo}
        dificuldade={item.dificuldade}
        image={item.imageURL}
        duracao={item.duracao}
        preço={item.preço}
        onNavigation={() =>
          navigation.navigate('MealDetail', {
            mealId: item.id,
            mealTitle: item.titulo,
            isFav: isFavorited,
          })
        }
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={receitasList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={RenderReceitaItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
