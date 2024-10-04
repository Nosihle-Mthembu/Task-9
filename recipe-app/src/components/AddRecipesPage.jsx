import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipePage from './RecipesPage';

const AddRecipePage = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [servings, setServings] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      name,
      image,
      ingredients: ingredients.split(',').map(ing => ing.trim()),
      instructions,
      category,
      preparationTime,
      cookingTime,
      servings,
    };

    try {
      const response = await fetch('http://localhost:3001/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe),
      });
      if (response.ok) {
        alert('Recipe added successfully!');
        navigate('/recipes');
      } else {
        throw new Error('Failed to add recipe');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
    <div style={styles.container}>
      <h1 style={styles.title}>Add Recipe</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Ingredients (comma-separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <textarea
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            style={styles.textarea}
          ></textarea>
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Preparation Time"
            value={preparationTime}
            onChange={(e) => setPreparationTime(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Cooking Time"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="number"
            placeholder="Servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Add Recipe</button>
      </form>
    </div>
    <RecipePage />
    </div>

  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    width: '100%',
    fontSize: '16px',
  },
  textarea: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    width: '100%',
    fontSize: '16px',
    minHeight: '100px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default AddRecipePage;
