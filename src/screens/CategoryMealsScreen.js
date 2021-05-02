import React from 'react'; 
import { useSelector } from 'react-redux'; // Permite selecionar um 'pedaço' do state global e usá-lo no componente
// Estamos usando o hook porque estamos usando um comp funcional

import { CATEGORIAS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation }) => { 

    const categID = navigation.getParam('categoryID');
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const receitasSelect = availableMeals.filter(({ categoryIds }) => categoryIds.includes(categID));

    return ( 
        <MealList receitasList={receitasSelect} navigation={navigation}/>
    );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
    const categID = navigation.getParam('categoryID');
    const { titulo } = CATEGORIAS.find(({ id }) => id === categID);

    return {
        headerTitle: titulo,
    };
};


export default CategoryMealsScreen;
