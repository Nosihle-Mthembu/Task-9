import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeCard = () => {
 
  const [recipes, setRecipes] = useState([]);

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
    <div >
      {recipes.map(recipe => (
      <div key={recipe.id} recipe={recipe} style={styles.card}>
        <img src={recipe.image} style={styles.image} />
        <h3 style={styles.title}>{recipe.name}</h3>
        <p>Category: {recipe.category}</p>
        <p>Servings: {recipe.servings}</p>
        <p>Prep Time: {recipe.preparationTime}</p>
        <p>Cooking Time: {recipe.cookingTime}</p>
        <Link to="/login"><button>See Ingredients</button></Link>
      </div>
      
    ))}
    </div>
  );
};

const styles = {
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
  },
  image: {
    width: '100%',
    height: '50%',
    objectFit: 'cover', 
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  title: {
    margin: '10px 0',
    fontSize: '18px',
  },
};

export default RecipeCard;
