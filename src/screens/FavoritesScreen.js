import React from 'react'; 
import { Platform, StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import EmptyComponent from '../components/EmptyComponent';
import HeaderBtn from '../components/HeaderBtn';

const FavoritesScreen = ({ navigation }) => { 
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    // Renderizar EmptyComponent se não tiver nenhuma receita favoritada
    if (favMeals.length === 0 || !favMeals) return <EmptyComponent text='Você ainda não possui nenhuma receita favoritada!' />

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

const styles = StyleSheet.create({
    containerEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;
