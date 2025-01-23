import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FoodDetails from './pages/FoodDetails';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar onSearch={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/food/:id" element={<FoodDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
