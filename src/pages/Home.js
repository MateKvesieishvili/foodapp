import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Card from '../components/Card';
import { fetchMeals } from '../api/api';

const Home = ({ searchQuery }) => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const data = await fetchMeals();
      setMeals(data);
      setFilteredMeals(data);
    };
    getMeals();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredMeals(meals);
    } else {
      const filtered = meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMeals(filtered);
    }
  }, [searchQuery, meals]);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        Discover Delicious Meals
      </Typography>
      <Grid container spacing={3}>
        {filteredMeals.map((meal) => (
          <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
            <Card meal={meal} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
