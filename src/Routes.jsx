import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import { Toaster } from 'sonner';
// Import other pages here

const AppRoutes = () => {
  return (
    <Router>
      <Toaster position="bottom-right" richColors />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
