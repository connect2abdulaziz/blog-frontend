// src/pages/PostDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/layout/header/Header';
import ImageSection from '../components/post/ImageSection';
import TitleSection from '../components/post/TitleSection';
import AuthorInfoSection from '../components/post/AuthorInfoSection';
import ContentSection from '../components/post/ContentSection';
import TagSection from '../components/post/TagSection';
import CommentsSection from '../components/post/CommentsSection';
import { useAuth } from '@/context/AuthContext';
const PostDetails = () => {
  const { id } = useParams();
  //const [post, setPost] = useState(null);
  const {isLoggedIn, user} = useAuth();

  // useEffect(() => {
  //   const fetchPostDetails = async () => {
  //     try {
  //       const postResponse = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${id}`);
  //       setPost(postResponse.data.data); 
  //     } catch (error) {
  //       console.error('Error fetching post details:', error);
  //     }
  //   };

  //   fetchPostDetails();
  // }, [id]);
  // Sample post data
const post = {
  imageUrl: '../../../public/default.png',
  title: 'I Created a Developer Rap Video - Here\'s What I Learned',
  author: 'Jesica Koli',
  date: '02 December 2022',
  content: 'Did you come here for something in particular or just general Riker-bashing? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like',
  tag: 'Travel',
  comments: [
    { text: 'Great post!', author: 'John Doe' },
    { text: 'Very informative.', author: 'Jane Smith' },
  ],
};


  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full justify-center bg-white mx-auto">
      <Header isLoggedIn={isLoggedIn} user={user} />
      <div className = "flex flex-col mt-100 gap-5 mx-32 p-6 ">
        <TagSection tag={post.tag} />
        <TitleSection title={post.title} />
        <AuthorInfoSection author={post.author} date={post.date} />
        <ImageSection imageUrl={post.imageUrl} />
        <ContentSection content={post.content} />
        
        <CommentsSection/>
        {/* <CommentsSection comments={post.comments} /> */}
      </div>
    </div>
  );
};

export default PostDetails;

    
