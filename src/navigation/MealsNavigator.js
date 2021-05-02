import React from 'react';
import { Platform, Text, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

// Padrão do app
/// Font igual
/// Estilo do cabeçalho, texts do drawer, do tab
const headerFont = {
    fontFamily: 'cookie-regular',
    fontSize: 16
}
const headerStack = {
    fontSize: Dimensions.get('window').width > 320 ? 25 : 18
}
const headerTab = {
    fontSize: Dimensions.get('window').width > 320 ? 20 : 13
}

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: [headerFont, headerStack],
    headerBackTitleStyle: [headerFont, headerStack],
    headerBackTitleVisible: false,
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: defaultStackNavOptions
});

const FavoritesNavigator = createStackNavigator({
    Favoritos: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, 
{
    defaultNavigationOptions: defaultStackNavOptions
});

const tabDefaultConfig = {
    Receitas: 
    { 
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: tabInfo => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            ,
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={[headerFont, headerTab]}>Receitas</Text> : 'Receitas',
        },
    },
    Favoritos: 
    { 
        screen: FavoritesNavigator, 
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={[headerFont, headerTab]}>Favoritos</Text> : 'Favoritos',
        },
    }
};

const filtersNavigator = createStackNavigator({
    Filtros: FiltersScreen
}, 
{
    defaultNavigationOptions: defaultStackNavOptions
});

const MealsTabNavigator = Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabDefaultConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor,
        }
    }) 
    : createBottomTabNavigator(tabDefaultConfig, {
    tabBarOptions: {
        labelStyle: [headerFont, headerTab],
        activeTintColor: Colors.primaryColor,
    }
});

const MainNavigator = createDrawerNavigator({
    Home: MealsTabNavigator,
    Filtros: filtersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        inactiveTintColor: 'gray',
        labelStyle: headerFont
    }
});

export default createAppContainer(MainNavigator);