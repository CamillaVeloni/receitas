import React, { useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import MealCardDetail from '../components/MealCardDetail';
import MealDetailRow from '../components/MealDetailRow';
import { toggleFavorite } from '../store/actions/meals';
import DefaultText from '../components/DefaultText';
import HeaderBtn from '../components/HeaderBtn';
import Colors from '../constants/Colors';

const ICON_SIZE = Dimensions.get('window').width > 320 ? 22 : 20;

// Componente para renderizar lista de ingredientes e o preparo
const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listInfo}>●</Text>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('mealId');

  // Retrieve da receita dentro do redux
  const receita = useSelector((state) =>
    state.meals.meals.find((meal) => meal.id === id)
  );

  // Retrieve true ou false se a receita foi favoritada
  // Mudar icon em tempo real
  const isMealFavorited = useSelector(({ meals }) =>
    meals.favoriteMeals.some((meal) => meal.id === id)
  );

  // Hook para usar dispatch (dispachar algo para redux) action
  const dispatch = useDispatch();

  // Precisa ser usado o useCallback para ser reconstruida quando um dos parametros mudarem
  // É usada no useEffect (logo embaixo) então precisa usar o callback para não ter loops infinitos 
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

 useEffect(() => {
    navigation.setParams({ isFav: isMealFavorited})
  }, [isMealFavorited]);

  function renderLists(list) {
    return list.map((value) => <ListItem key={value}>{value}</ListItem>);
  }

  return (
    <ScrollView>
      <Image source={{ uri: receita.imageURL }} style={styles.image} />
      <MealCardDetail>
        <MealDetailRow
          iconName="timer"
          iconSize={ICON_SIZE}
          nameText={`${receita.duracao} m`}
        />
        <MealDetailRow
          iconName="bar-chart"
          iconSize={ICON_SIZE}
          nameText={receita.dificuldade}
        />
        <MealDetailRow
          iconName="cash"
          iconSize={ICON_SIZE}
          nameText={receita.preço}
        />
      </MealCardDetail>
      <Text style={styles.titleStyle}>Lista de Ingredientes:</Text>
      {renderLists(receita.ingredientes)}
      <Text style={styles.titleStyle}>Preparo da receita:</Text>
      {renderLists(receita.passos)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealTitle = navigation.getParam('mealTitle');
  const toggleFavorite = navigation.getParam('toggleFav');
  const isFavorited = navigation.getParam('isFav');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Favorito"
          iconName={isFavorited ? 'star' : 'star-outline'}
          iconSize={23}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'cookie-regular',
    fontSize: Dimensions.get('window').width > 320 ? 30 : 22,
    color: Colors.primaryColor,
    marginHorizontal: 15,
    marginTop: 20,
  },
  image: {
    flex: 1,
    margin: 15,
    borderRadius: 20,
    height: Dimensions.get('window').height * 0.4,
  },
  listItem: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  listInfo: {
    marginTop: 2,
    marginRight: 5,
    color: Colors.primaryColor,
    fontSize: Dimensions.get('window').width > 320 ? 12 : 10,
  },
});

export default MealDetailScreen;
