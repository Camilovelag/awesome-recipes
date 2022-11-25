import { enableFetchMocks } from 'jest-fetch-mock';
import store from '../redux/configureStore';
import { getRecipes } from '../redux/recipes/recipesSlice';

enableFetchMocks();

beforeEach(() => {
  fetch.resetMocks();
});

const initialState = {
  loading: false,
  recipes: [],
  error: '',
  view: 'all',
  noResults: false,
  sort: 'title',
  _persist: { version: -1, rehydrated: true },
};

const response = [
  {
    id: '1',
    title: 'pizza',
    image: 'https://fakeurl.com.jpg',
    description: 'Some description',
    user_ratings: [1, 2, 3],
    yields: '4',
    instructions: [{ display_text: 'No instructions available' }],
    ingredients: [],
  },
];

describe('redux state tests', () => {
  test('Should initially set state to initial state', () => {
    const state = store.getState().persistedReducer;
    expect(state).toStrictEqual(initialState);
  });

  test('Should set loading to true when fetching recipes', () => {
    store.dispatch(getRecipes('pizza'));
    const state = store.getState().persistedReducer;
    expect(state.loading).toBe(true);
  });

  test('Should set loading to false when fetching recipes is successful', async () => {
    fetch.mockResponseOnce(JSON.stringify(response));
    await store.dispatch(getRecipes('pizza'));
    const state = store.getState().persistedReducer;
    expect(state.loading).toBe(false);
  });
});
