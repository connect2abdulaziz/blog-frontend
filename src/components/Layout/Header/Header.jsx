import { useContext } from "react";
import { AppBar, Toolbar, Divider } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import LogoAndNavLinks from "./LogoAndNavLinks";
import SearchAndButtons from "./SearchAndButtons";

const Header = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <AppBar
      position="fixed" 
      sx={{
        backgroundColor: "white",
        color: "black",
        width: "100%", 
        top: 0, 
        left: 0,
        right: 0,
        zIndex: 1200, 
        border: '0 0 1px 0',
        borderColor: 'black',
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <LogoAndNavLinks isLoggedIn={isLoggedIn} />
        <SearchAndButtons isLoggedIn={isLoggedIn} user={user} />
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Header;
