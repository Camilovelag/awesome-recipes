import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiRecipes } from './ApiRecipes';

const getRecipes = createAsyncThunk('recipes/getRecipes', apiRecipes);

const recipesReducer = createSlice({
  name: 'recipes',
  initialState: {
    loading: false,
    recipes: [],
    error: '',
  },
  reducers: {
    // Add your reducers here
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
