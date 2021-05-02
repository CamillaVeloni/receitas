import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 

const MealCardDetail = ({ children }) => { 
    return ( 
    <View style={styles.container}> 
        {children}
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default MealCardDetail;
