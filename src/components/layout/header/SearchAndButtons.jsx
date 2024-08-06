/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

const SearchAndButtons = ({ isLoggedIn, user }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center  space-x-4 mr-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 bg-customGray rounded-full border border-gray-300 focus:outline-none focus:border-gray-500"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.29a1 1 0 01-1.41 1.42l-4.3-4.3zM8 14A6 6 0 108 2a6 6 0 000 12z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      {!isLoggedIn ? (
        <>
          <Link to="/login">
            <Button
              className="w-24 h-10 text-lg border border-black"
              variant="outline"
            >
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="w-24 h-10 text-lg">Sign up</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/create-article">
            <Button variant="outline">Create Article</Button>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-black">{user?.name}</span>
            <img
              src={user?.profilePicture || "/path/to/default-avatar.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchAndButtons;
