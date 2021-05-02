import React from 'react'; 
import { Text, StyleSheet, Dimensions } from 'react-native'; 

const DefaultText = ({ children }) => { 
    return <Text style={styles.text}>{children}</Text>
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'cookie-regular',
        fontSize: Dimensions.get('window').width > 320 ? 22 : 16
    }
});

export default DefaultText;
