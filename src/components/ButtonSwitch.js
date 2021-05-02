import React from 'react'; 
import { View, Text, StyleSheet, Switch } from 'react-native'; 

import Colors from '../constants/Colors';

const ButtonSwitch = ({ label, state, onChange }) => { 
    return ( 
    <View style={styles.filterContainer}>
        <Text style={styles.label}>{label}</Text>
        <Switch 
            trackColor={{ false: '#ddd', true: Colors.primaryColor }}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            value={state}
            onValueChange={onChange}
        />
    </View>
)};

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    label: {
        fontFamily: 'cookie-regular',
        fontSize: 21
    }
});

export default ButtonSwitch;
