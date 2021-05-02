import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealCardItem from './MealCardItem';

const MealList = ({ receitasList, navigation }) => {
  const RenderReceitaItem = ({ item }) => {
    return (
      <MealCardItem
        titulo={item.titulo}
        dificuldade={item.dificuldade}
        image={item.imageURL}
        duracao={item.duracao}
        preço={item.preço}
        onNavigation={() =>
          navigation.navigate('MealDetail', { mealId: item.id, mealTitle: item.titulo })
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
