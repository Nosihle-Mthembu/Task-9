import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = { username, password };

    try {
      const response = await axios.post('http://localhost:3001/users', newUser);
      if (response.status === 201) {
        setSuccessMessage('Registration successful! You can now sign in.');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      setErrorMessage('Registration failed. Username might already exist.');
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-6">Register</h2>
        <form onSubmit={handleRegister}>
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
            Register
          </button>
        </form>
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        <p className="mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500">
            Sign In here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
