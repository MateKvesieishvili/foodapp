import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ meal }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Semi-transparent card background
        borderRadius: 4,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', // Shadow for depth
        transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transitions on hover
        '&:hover': {
          transform: 'scale(1.05)', // Slight zoom effect on hover
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.5)', // Darker shadow on hover
        },
      }}
    >
      <CardActionArea onClick={() => navigate(`/food/${meal.idMeal}`)}>
        <CardMedia
          component="img"
          height="200"
          image={meal.strMealThumb}
          alt={meal.strMeal}
          sx={{
            objectFit: 'cover',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        />
        <CardContent sx={{ padding: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: '#fff',  // White text for better contrast
              fontWeight: 'bold',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Shadow for text readability
            }}
          >
            {meal.strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FoodCard;
