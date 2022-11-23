import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiRecipes from './ApiRecipes';

const getRecipes = createAsyncThunk('recipes/getRecipes', apiRecipes);

const recipesReducer = createSlice({
  name: 'recipes',
  initialState: {
    loading: false,
    recipes: [],
    error: '',
    view: 'all',
  },
  reducers: {
    sortByScore: (state) => {
      state.recipes.sort((a, b) => b.user_ratings.score - a.user_ratings.score);
    },
    sortByPositive: (state) => {
      state.recipes.sort((a, b) => b.user_ratings.count_positive - a.user_ratings.count_positive);
    },
    sortByTitle: (state) => {
      state.recipes.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
    viewByPositive: (state) => ({
      ...state,
      view: 'positive',
    }),
    viewByScore: (state) => ({
      ...state,
      view: 'score',
    }),
    viewByAll: (state) => ({
      ...state,
      view: 'all',
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getRecipes.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getRecipes.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      recipes: action.payload,
    }));
    builder.addCase(getRecipes.rejected, (state, action) => ({
      ...state,
      loading: false,
      recipes: [],
      error: action.error.message,
    }));
  },
});

export default recipesReducer.reducer;
export { getRecipes };
export const {
  sortByScore, sortByPositive, sortByTitle,
  viewByPositive, viewByAll, viewByScore,
} = recipesReducer.actions;
