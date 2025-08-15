import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
// Import other pages here

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
