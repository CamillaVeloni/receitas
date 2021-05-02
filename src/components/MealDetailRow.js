import React from 'react'; 
import { View, StyleSheet} from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import DefaultText from '../components/DefaultText';

const MealDetailRow = ({ iconName, iconSize, nameText }) => { 
    return ( 
    <View style={styles.mealRow}>
        <Ionicons name={iconName} size={iconSize} color={Colors.primaryColor} style={{ marginRight: 5 }}/>
        <DefaultText>{ nameText }</DefaultText>
    </View>
)};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
});

export default MealDetailRow;
