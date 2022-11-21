import React from 'react';
import apiAutoComplete, { apiRecipe } from '../redux/recipes/ApiRecipes';

const Home = () => (
  <div>
    <h1>Home</h1>
    <button type="button" onClick={apiAutoComplete}>Auto-complete</button>
    <button type="button" onClick={apiRecipe}>Recipe</button>

  </div>
);

export default Home;
