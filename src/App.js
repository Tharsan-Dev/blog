import React from 'react';
import './App.css';  
import BlogNav from './Components/BlogNav';
import Posts from './Components/Posts';
import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';


function App() {
  return (
    <div className="App">
      <BlogNav />
      <Posts />
      <Post1 />
      <Post2 />
      <Post3 />
      <Post4 />
    </div>
  );
}

export default App;