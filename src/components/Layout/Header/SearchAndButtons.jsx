/* eslint-disable react/prop-types */

import { Box, Button, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

// Reusable button component
const StyledButton = ({ to, children, variant }) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        color: variant === 'login' ? 'black' : 'white',
        backgroundColor: variant === 'login' ? 'white' : 'black',
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: 3,
        fontWeight: 500,
        fontSize: '1rem',
        padding: '7px 16px',
        textTransform: 'none',
        width: '100px',
        marginRight: 2,
        '&:hover': {
          backgroundColor: variant === 'login' ? 'white' : 'black',
          opacity: 0.8,
        },
      }}
    >
      {children}
    </Button>
  );
};

const SearchAndButtons = ({ isLoggedIn, user }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1}}>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', mr: 2 }}>
        <InputBase
          placeholder="Search"
          sx={{
            color: 'inherit',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: 5,
            padding: '0.5rem 1rem',
            pl: 6, 
            width: '300px',
          }}
        />
        <IconButton sx={{ position: 'absolute', left: 10, padding: '0.5rem' }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {!isLoggedIn ? (
        <>
          <StyledButton to="/login" variant="login">Log in</StyledButton>
          <StyledButton to="/signup" variant="signup">Sign up</StyledButton>
        </>
      ) : (
        <>
          <StyledButton to="/create-article" variant="default">Create Article</StyledButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              {user?.name} {/* Display user name or a placeholder */}
            </Typography>
            <img
              src={user?.profilePicture || '/path/to/default-avatar.png'} // Display user profile picture or a default
              alt="User Avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default SearchAndButtons;
