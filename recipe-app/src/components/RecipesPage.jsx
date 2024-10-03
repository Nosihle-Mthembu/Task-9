import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {recipes.map(recipe => (
      <div key={recipe.id} recipe={recipe} style={styles.card}>
        <img src={recipe.image} style={styles.image} />
        <h1 style={styles.title}>{recipe.name}</h1>
        <p><strong>Category:</strong> {recipe.category}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Prep Time:</strong> {recipe.preparationTime}</p>
        <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
        <p><strong>instructions:</strong> {recipe.instructions}</p>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
        
      </div>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
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

export default RecipePage;
