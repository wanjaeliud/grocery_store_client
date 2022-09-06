<<<<<<< HEAD
import React from 'react';

function Blogs() {
  return (
      <div>
        Blogs
      </div>
  );
}

=======

import React from "react";
import './blogs.css';
import TopBar from './Topbar/TopBar';
import Bar from './Bar/Bar';
import Posts from './Posts/Posts';


function Blogs() {
  return (
    
    <>
      <TopBar />
      <Posts />
      <Bar />
    </>
  );
}
>>>>>>> victor
export default Blogs;