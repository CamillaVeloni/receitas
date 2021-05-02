import React, { useEffect } from 'react'; 
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Platform,
    TouchableNativeFeedback, 
    Dimensions
} from 'react-native'; 

const CardItem = ({ titulo, cor, onNavigation }) => { 

    let TouchableComp = TouchableOpacity;
    Platform.OS === 'android' && Platform.Version >= 21 ? TouchableComp = TouchableNativeFeedback : null;

    return ( 
    <View style={styles.gridStyle}>
        <TouchableComp 
            style={{ flex: 1 }}
            onPress={onNavigation}
        >
            <View style={[styles.cardStyle, { backgroundColor: cor }]}> 
                <Text style={styles.titleStyle} numberOfLines={2}>{ titulo }</Text>
            </View>
        </TouchableComp>
    </View>
)};

const styles = StyleSheet.create({
    gridStyle: {
        flex: 1,
        margin: 15,
        height: '80%',
        maxHeight: '95%',
        minHeight: Dimensions.get('window').width > 320 ? 140 : 130, 
        elevation: 5,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 
        ? 'hidden' 
        : 'visible',
    },
    cardStyle: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    titleStyle: {
        fontFamily: 'cookie-regular',
        fontSize: Dimensions.get('window').width > 320 ? 32 : 22,
        textAlign: 'right'
    }
});

export default CardItem;
