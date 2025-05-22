// src/homepage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Homepage = () => {
  const { user } = useAuth0();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome back, {user?.name}</p>
    </div>
  );
};

export default Homepage;
