import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipePage = () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
      setError('Failed to delete recipe. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.cardContainer}>
        {recipes.map(recipe => (
          <div key={recipe.id} style={styles.card}>
            <img src={recipe.image} style={styles.image} alt={recipe.name} />
            <h1 style={styles.title}>{recipe.name}</h1>
            <div style={styles.details}>
              <p><strong>Category:</strong> {recipe.category}</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
              <p><strong>Prep Time:</strong> {recipe.preparationTime}</p>
              <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </div>
            <div style={styles.buttonContainer}>
              <button style={styles.buttonDelete} onClick={() => handleDelete(recipe.id)}>Delete</button>
              <button style={styles.buttonEdit}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  title: {
    margin: '10px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    margin:"3%"
  },
  details: {
    padding: '10px',
    color: '#555',
    flexGrow: 1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },
  buttonDelete: {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width:"45%"
  },
  buttonEdit: {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width:"45%"
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default RecipePage;
