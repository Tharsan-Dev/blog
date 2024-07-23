import React from 'react';
import './posts.css';  // Import the CSS file for the Posts component

function Posts() {
  return (
    <div className='recent-posts'>
      <h2>Recent Posts</h2>
      <ul>
        <li><a href="#post1">JavaScript</a></li>
        <li><a href="#post2">Data Structure</a></li>
        <li><a href="#post3">Algorithm</a></li>
        <li><a href="#post4">Computer Network</a></li>
      </ul>
    </div>
  );
}

export default Posts;