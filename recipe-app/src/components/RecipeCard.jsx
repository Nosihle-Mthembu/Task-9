import React from 'react';
// import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe = {}, isAuthenticated }) => {
//   const {
//     title = 'Unknown Title',
//     category = 'Unknown Category',
//     image = '',
//     servings = 'N/A',
//     prepTime = 'N/A',
//     cookTime = 'N/A',
//   } = recipe; // Default values for missing properties

  return (
    <div style={styles.card}>
      <div to={isAuthenticated ? `/recipes/${recipe.id}` : '/login'} style={styles.link}>
        <img src={image} alt={title} style={styles.image} />
        <h3 style={styles.title}>{title}</h3>
        <p>Category: {category}</p>
        <p>Servings: {servings}</p>
        <p>Prep Time: {prepTime}</p>
        <p>Cooking Time: {cookTime}</p>
      </div>
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
    objectFit: 'cover', // Ensures the image covers the space
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
