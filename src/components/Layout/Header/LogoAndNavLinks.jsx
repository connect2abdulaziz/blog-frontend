/* eslint-disable react/prop-types */
import { Box, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const LogoAndNavLinks = ({ isLoggedIn }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Avatar sx={{ bgcolor: '#D8D8D8', width: 40, height: 40, fontSize: '1.5rem' }}>B</Avatar>
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ textTransform: 'none' }} 
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            color="inherit"
            component={Link}
            to="/articles"
            sx={{ textTransform: 'none' }} 
          >
            My Articles
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default LogoAndNavLinks;
