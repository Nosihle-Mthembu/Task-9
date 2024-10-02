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
    <div style={{ padding: '20px' }}>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ingredients (comma-separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Preparation Time"
            value={preparationTime}
            onChange={(e) => setPreparationTime(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Cooking Time"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>


      <RecipePage />
    </div>
  );
};

export default AddRecipePage;
