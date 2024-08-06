// src/pages/Home.jsx
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/layout/header/Header";
import Title from "../../components/common/Title";

const Home = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <main className="mt-24">
        <Title isLoggedIn={isLoggedIn} />
        {/* Other content for the home page can go here */}
      </main>
    </div>
  );
};

export default Home;
