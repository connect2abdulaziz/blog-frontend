import { Container, Typography, Paper } from "@mui/material";
import Login from "../../components/Auth/Login";

const LoginPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Login</Typography>
        <Login />
      </Paper>
    </Container>
  );
};

export default LoginPage;
