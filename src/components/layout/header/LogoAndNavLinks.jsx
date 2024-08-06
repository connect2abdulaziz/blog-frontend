/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

const LogoAndNavLinks = ({ isLoggedIn }) => {
  return (
    <div className="relative flex items-center space-x-8 ml-8">
      <Link to="/" className="text-black font-bold text-xl flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          {/* Placeholder for the logo, can be replaced with an image or SVG */}
          Logo
        </div>
      </Link>
      <nav className="flex space-x-8">
        <Link to="/" className="opacity-100">
          <Button variant="link" className="text-lg">
            Home
          </Button>
        </Link>
        {isLoggedIn && (
          <Link to="/articles" className="opacity-100">
            <Button variant="link" className="text-lg">
              My Articles
            </Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default LogoAndNavLinks;
