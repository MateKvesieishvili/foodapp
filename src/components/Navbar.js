import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, InputBase, InputAdornment } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate('/'); 
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(17, 17, 29, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Toolbar>
      <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            cursor: 'pointer', 
            color: 'white'
          }}
          onClick={handleLogoClick} 
        >
          Food App
        </Typography>


        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            px: 1,
          }}
        >
          <InputBase
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
            sx={{
              color: '#ffffff',
              width: '200px',
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#ffffff' }} />
              </InputAdornment>
            }
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
