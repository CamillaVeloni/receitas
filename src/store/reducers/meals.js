import { RECEITAS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: RECEITAS,
    filteredMeals: RECEITAS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.payload);
            if (existingIndex >= 0) { // Existe dentro dos favoritos. Precisa deletar
                return { ...state, favoriteMeals: state.favoriteMeals.filter(meal => meal.id !== action.payload) };
            } else { // -1 === não existe dentro dos favoritos. Precisa adicionar
                const mealFavorited = state.meals.find(meal => meal.id === action.payload);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(mealFavorited) }
            }
    
        default:
            return state;
    }
}

export default mealsReducer;