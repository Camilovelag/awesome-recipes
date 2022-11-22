const url = 'https://tasty.p.rapidapi.com/recipes/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '004b7526e0msh627db2d8effe21dp1bc113jsn83fc6a8d711d',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

const apiAutoComplete = async () => {
  try {
    const response = await fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options);
    const data = await response.json();
    data.results.forEach((item) => (console.log(item.display)));
  } catch (error) {
    console.error(error);
  }
};

const apiRecipes = async (search = 'trendy') => {
  const query = search.replace(' ', '%20');
  const response = await fetch(`${url}list?from=0&size=20&q=${query}`, options);
  const data = await response.json();
  const recipes = data.results.map((recipe) => ({
    id: recipe.id,
    title: recipe.name,
    image: recipe.thumbnail_url,
    description: recipe.description,
  }));
  console.log(recipes);
  return recipes;
};

export default apiAutoComplete;
export { apiRecipes };
