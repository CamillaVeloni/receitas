import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './src/navigation/MealsNavigator';
import mealsReducer from './src/store/reducers/meals'



enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {

  const [loadedFonts, setLoadedFonts] = useState(false);

   useEffect(() => {
     async function fetchFonts() {
      try {
        await Font.loadAsync({
          'cookie-regular': require('./assets/fonts/Cookie-Regular.ttf'),
        })
        setLoadedFonts(true);
      }catch(err){
        console.log(err);
      }
     }
     fetchFonts();
  }, [])

  if(!loadedFonts){
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.disableYellowBox = true;
