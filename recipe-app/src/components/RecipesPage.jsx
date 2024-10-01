// import React, { useEffect, useState } from 'react';

// const RecipesPage = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/recipes');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setRecipes(data);
//       } catch (error) {
//         console.error('Failed to fetch recipes:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   if (loading) {
//     return <div>Loading recipes...</div>;
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Recipes</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {recipes.map((recipe) => (
//           <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', borderRadius: '5px', width: '200px', padding: '10px' }}>
//             <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
//             <h2 style={{ fontSize: '18px' }}>{recipe.name}</h2>
//             <p><strong>Category:</strong> {recipe.category}</p>
//             <p><strong>Servings:</strong> {recipe.servings}</p>
//             <p><strong>Prep Time:</strong> {recipe.preparationTime}</p>
//             <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
//             <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
//             <p><strong>Instructions:</strong> {recipe.instructions}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipesPage;


import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import axios from 'axios';

const RecipePage = ({ isAuthenticated }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div style={styles.container}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} isAuthenticated={isAuthenticated} />
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
};

export default RecipePage;

