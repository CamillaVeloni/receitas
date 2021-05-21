import React, { useState, useEffect, useCallback } from 'react'; 
import { View, Text, StyleSheet, Platform } from 'react-native'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import { setFilter } from '../store/actions/meals'
import ButtonSwitch from '../components/ButtonSwitch';
import HeaderBtn from '../components/HeaderBtn';

const FiltersScreen = ({ navigation }) => { 
    const [filters, setFilters] = useState({ // states para appliedFilters
        isGlutenFree: false,
        isVegano: false,
        isVegetariano: false, 
        isLactoseFree: false
    });

    const dispatch = useDispatch();

    function filterHandler (value, name) { // handler para clique do switch button 
        setFilters(prevState => ({
            ...prevState,
            [name]: value
        })); 
    };

    // Uma function em uma function
    // Esse function object (armazenado da const 'saveFilters') é constantemente reconstruida
    // Para ser mais precisa: É reconstruida quando a tela (FiltersScreen) é reconstruida
    // FilterScreen é reconstruida quando seus 'props' ou seus 'states' são mudados
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: filters.isGlutenFree,
            vegano: filters.isVegano,
            vegetariano: filters.isVegetariano,
            lactoseFree: filters.isLactoseFree
        }

        dispatch(setFilter(appliedFilters));
    }, [filters, dispatch]); 

    useEffect(() => {
        // useEffect 'chama' saveFilters e por isso deve ser declarado como uma dependencia
        // Se não for colocado como dependencia ou seja algo mudar no saveFilters (e.g. os dados que é usa), o useEffect iria 'rodar' uma 
        // versão anterior de saveFilters
        navigation.setParams({ save: saveFilters })
    }, [saveFilters]);

    return ( 
     <View style={styles.screen}> 
        <Text style={styles.title}>Filtros disponiveis / Restrições</Text>
        <ButtonSwitch
            label='Sem Glúten'
            state={filters.isGlutenFree}
            onChange={newValue => filterHandler(newValue, 'isGlutenFree')}
        />
        <ButtonSwitch
            label='Vegano'
            state={filters.isVegano}
            onChange={newValue => filterHandler(newValue, 'isVegano')}
        />
        <ButtonSwitch
            label='Vegetariano'
            state={filters.isVegetariano}
            onChange={newValue => filterHandler(newValue, 'isVegetariano')}
        />
        <ButtonSwitch
            label='Livre de Lactose'
            state={filters.isLactoseFree}
            onChange={newValue => filterHandler(newValue, 'isLactoseFree')}
        />
     </View>
)};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'cookie-regular',
        fontSize: 25,
        margin: 20,
        textAlign: 'center'
    },
});

FiltersScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Filtros Receitas',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item
                    title='Menu'
                    iconName={Platform.OS === 'android' ? 'menu-outline' : 'ios-menu'}
                    iconSize={23}
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item
                    title='Salvar'
                    iconName={Platform.OS === 'android' ? 'save' : 'ios-save'}
                    iconSize={23}
                    onPress={navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    }
};

export default FiltersScreen;
