import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCALE = 375; // constant, 375 is standard width of  iphone 6 / 7 / 8 

export const scaleFontSize = (fontSize) => {
    console.log(SCREEN_WIDTH);
    const ratio = fontSize / SCALE; // get ratio based on your standard scale 
    const newSize = Math.round(ratio * SCREEN_WIDTH);
    return newSize; 
}