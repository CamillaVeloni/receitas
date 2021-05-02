import React from 'react'; 
import { FlatList, Platform } from 'react-native'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderBtn from '../components/HeaderBtn';
import { CATEGORIAS } from '../data/dummy-data';
import CategoryCardItem from '../components/CategoryCardItem';

const CategoriesScreen = ({ navigation }) => {

    const renderGridItem = ({ item }) => {
        return (
            <CategoryCardItem 
                titulo={item.titulo}  
                cor={item.cor}
                onNavigation={() => { 
                    navigation.navigate('CategoryMeals', { categoryID: item.id })
                }}
            />
        );
    }

    return ( 
     <FlatList 
        data={CATEGORIAS} 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
    />
)};

CategoriesScreen.navigationOptions = ({ navigation }) => {

    return {
        headerTitle: 'Todas Categorias',
        headerLeft: () => 
            (<HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item 
                    title='Menu'
                    iconName= {Platform.OS === 'android' ? 'menu-outline' : 'ios-menu'}
                    iconSize={23}
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    }
}

export default CategoriesScreen;
