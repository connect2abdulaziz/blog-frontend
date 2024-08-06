import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/pages/Home";
import LoginPage from "./containers/pages/LoginPage";
import SignupPage from "./containers/pages/SignupPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* Add other routes here */}
          </Routes>
        </Router>
      </AuthProvider>
  );
};

export default App;
