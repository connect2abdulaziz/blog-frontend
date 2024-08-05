import { Container, Typography, Paper } from '@mui/material';
import Signup from '../components/Auth/Signup';

const SignupPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Sign Up</Typography>
        <Signup />
      </Paper>
    </Container>
  );
};

export default SignupPage;
