import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        alert('Login successful!');
        navigate('/AddRecipe');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-6">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded w-full p-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
