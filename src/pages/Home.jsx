// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Header from '../components/layout/header/Header';
import Title from '../components/common/Title';
import PostsPage from '../components/post/PostsPage';

const Home = () => {
  const { isLoggedIn, user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
        setPosts(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <main className="mt-24">
        <Title text={isLoggedIn ? `Welcome back, ${user.name}` : 'Welcome to our Blog'} />
        <PostsPage posts={posts} />
      </main>
    </div>
  );
};

export default Home;
