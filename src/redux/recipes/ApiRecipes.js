const url = 'https://tasty.p.rapidapi.com/recipes/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '004b7526e0msh627db2d8effe21dp1bc113jsn83fc6a8d711d',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

const apiRecipes = async (search) => {
  const query = search.replace(' ', '%20');
  const response = await fetch(`${url}list?from=0&size=20&q=${query}`, options);
  const data = await response.json();
  const recipes = data.results.map((recipe) => ({
    id: recipe.id,
    title: recipe.name || 'No title available',
    image: recipe.thumbnail_url,
    description: recipe.description || 'No description available',
    user_ratings: recipe.user_ratings,
    yields: recipe.yields || 'No yield information available',
    instructions: recipe.instructions || [{ display_text: 'No instructions available' }],
  }));
  return recipes.filter((recipe) => recipe.user_ratings !== undefined);
};

export default apiRecipes;
