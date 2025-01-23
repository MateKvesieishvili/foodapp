import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async () => {
  const { data } = await axios.get(`${BASE_URL}/search.php?s=`);
  return data.meals;
};

export const fetchMealDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return data.meals[0];
};