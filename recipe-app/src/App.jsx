import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/LoginPage';
import Register from './components/RegistrationPage';
import Navigate from './components/Navbar';
import Home from './components/Home';
import AddRecipePage from './components/AddRecipesPage';
import RecipeCard from './components/RecipeCard';

const App = () => {
  return (
    <Router>
      <Navigate />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/RecipeCard" element={<RecipeCard />} />
        <Route path="AddRecipe" element={<AddRecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;

