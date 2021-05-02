import React from 'react'; 
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import HeaderBtn from '../components/HeaderBtn';
import { RECEITAS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => { 
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    return ( 
        <MealList receitasList={favMeals} navigation={navigation}/>
    );
};

FavoritesScreen.navigationOptions = ({ navigation }) => {

    return {
        headerTitle: 'Meus favoritos',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item 
                    title='Menu'
                    iconName={Platform.OS === 'android' ? 'menu-outline' : 'ios-menu'}
                    iconSize={23}
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    }
};


export default FavoritesScreen;
