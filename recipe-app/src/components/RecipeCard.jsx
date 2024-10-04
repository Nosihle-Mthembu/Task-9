import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes. Please try again.');
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div style={styles.container}>
      {error && <p style={styles.error}>{error}</p>}
      {recipes.map(recipe => (
        <div key={recipe.id} style={styles.card}>
          <img src={recipe.image} style={styles.image} alt={recipe.name} />
          <h3 style={styles.title}>{recipe.name}</h3>
          <p>Category: {recipe.category}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Prep Time: {recipe.preparationTime}</p>
          <p>Cooking Time: {recipe.cookingTime}</p>
          <Link to="/login"><button style={styles.button}>See Ingredients</button></Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    width: '250px',
    height: '350px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  title: {
    margin: '10px 0',
    fontSize: '18px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 0',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default RecipeCard;
