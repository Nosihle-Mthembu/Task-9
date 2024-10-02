import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import axios from 'axios';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(''); 

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Error fetching recipes');
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div style={styles.container}>
      {error && <p style={styles.error}>{error}</p>}
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default RecipePage;
