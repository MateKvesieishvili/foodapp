import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { fetchMealDetails } from '../api/api';

const FoodDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const getMealDetails = async () => {
      const data = await fetchMealDetails(id);
      setMeal(data);
    };
    getMealDetails();
  }, [id]);

  if (!meal) return <Typography variant="h6" color="white">Loading...</Typography>;

  return (
    <Container sx={{ marginTop: 6, paddingBottom: 6 }}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* Image Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="img"
            src={meal.strMealThumb}
            alt={meal.strMeal}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 450,
              borderRadius: 3,
              boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.4)', // Add shadow to image for depth
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} sm={6} md={7}>
          <Typography
            variant="h3"
            color="white"
            fontWeight="bold"
            gutterBottom
            sx={{
              textAlign: 'left',
              textTransform: 'uppercase',
              letterSpacing: 1.5,
            }}
          >
            {meal.strMeal}
          </Typography>
          <Paper
            sx={{
              padding: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)', // Add a blur effect for the background
            }}
          >
            <Typography variant="h5" color="white" fontWeight="bold" gutterBottom>
              Ingredients
            </Typography>
            <ul style={{ color: 'white', listStyleType: 'disc', paddingLeft: 20 }}>
              {Object.keys(meal)
                .filter((key) => key.startsWith('strIngredient') && meal[key])
                .map((key, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    {meal[key]}
                  </li>
                ))}
            </ul>

            <Typography variant="h5" color="white" fontWeight="bold" gutterBottom sx={{ marginTop: 3 }}>
              Instructions
            </Typography>
            <Typography variant="body1" color="white">
              {meal.strInstructions}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FoodDetails;
