import React from 'react';
import './BlogNav.css'; 
import logo from '/home/tharsan/Documents/blog/src/Components/Blogger-Logo-2010.png';

function BlogNav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Blog Platform</h1>
      </div>
      <ul className="nav-items">
        <li><a href="#post1">JavaScript</a></li>
        <li><a href="#post2">Data Structure</a></li>
        <li><a href="#post3">Algorithm</a></li>
        <li><a href="#post4">Computer Network</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default BlogNav;