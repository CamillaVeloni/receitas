import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import Lottie from 'lottie-react-native';

import Empty from '../../assets/11646-no-activity-animation.json';
import DefaultText from '../components/DefaultText';

const EmptyComponent = ({ text }) => { 
    return ( 
        <View style={styles.containerEmpty}>
                <Lottie autoSize resizeMode='contain' source={Empty} autoPlay loop />
                <DefaultText>{text}</DefaultText>
        </View>
    );
};

const styles = StyleSheet.create({
    containerEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EmptyComponent;
