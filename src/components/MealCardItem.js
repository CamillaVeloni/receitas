import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'; 

import MealCardDetail from '../components/MealCardDetail';
import MealDetailRow from '../components/MealDetailRow';

const ICON_SIZE = Dimensions.get('window').width > 320 ? 22 : 20;

const MealCardItem = ({ titulo, duracao, dificuldade,  preço, image, onNavigation }) => { 
    return ( 
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={onNavigation}>
            <View>
                <View style={[styles.mealRow, styles.mealHeader]}>
                    <ImageBackground 
                        source={{ uri: image }}
                        style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{ titulo }</Text>
                            </View>
                    </ImageBackground>
                </View>
                <MealCardDetail>
                    <MealDetailRow iconName='timer' iconSize={ICON_SIZE} nameText={`${duracao} m`} />
                    <MealDetailRow iconName='bar-chart' iconSize={ICON_SIZE} nameText={dificuldade} />
                    <MealDetailRow iconName='cash' iconSize={ICON_SIZE} nameText={preço} />
                </MealCardDetail>
            </View>
        </TouchableOpacity>
        </View>
)};

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },  
    mealRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mealHeader: {
        height: Dimensions.get('window').height > 600 ? 180 : 160,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    iconDetail: {
        marginRight: 5
    },
    mealDetail: {   
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(146, 106, 166, 0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },  
    title: {
        fontFamily: 'cookie-regular',
        fontSize: Dimensions.get('window').width > 320 ? 24 : 18,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealCardItem;
