import { RECEITAS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

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
        case SET_FILTERS: 
            const appliedFilters = action.payload;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) return false; // se no filtro aplicado tiver glutenFree e a receita não for 
                if (appliedFilters.vegano && !meal.isVegano) return false; // se no filtro aplicado tiver vegano e a receita não for 
                if (appliedFilters.vegetariano && !meal.isVegetariano) return false; // se no filtro aplicado tiver vegetariano e a receita não for 
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
                return true;
            })
            return { ...state, filteredMeals: updatedFilteredMeals };
        default:
            return state;
    }
}

export default mealsReducer;