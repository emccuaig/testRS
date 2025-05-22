// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Homepage from './Homepage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <div style={{ padding: '2rem' }}>
                <h1>Welcome</h1>
                <button onClick={() => loginWithRedirect({ appState: { returnTo: "/homepage" } })}>
                  Log In
                </button>
              </div>
            ) : (
              <Navigate to="/homepage" />
            )
          }
        />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
