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
    // console.log(data.results);
  } catch (error) {
    console.error(error);
  }
};

const apiRecipe = async () => {
  try {
    const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=chicken%20noodle%20soup', options);
    const data = await response.json();
    data.results.forEach((item) => (console.log(item.name)));
    // console.log(data.results);
  } catch (error) {
    console.error(error);
  }
};

export default apiAutoComplete;
export { apiRecipe };
