import React from 'react'
import Blogs from './Blogs';
import './Home.css';

export default function Home() {
  return (
    <div>
       <div className='Heading'>
        <h1> Welcome to <span>Pixels-to-Projects</span></h1>
        <p>Explore Exciting Web development topics and careers like Never Before!</p>
       </div>

       <div className="latest-blogs">
         <h2>Latest Posts</h2>
        <div className="blogs"> 
         {
           Blogs.map((blog,index)=>{
              return <div className="blog">
              <h3 key={index}>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="sub-content">
                {
                  blog.content.map((item,index)=>{
                     return <div className='sub-card'>
                         <h4 key={index}>{item.heading}</h4>
                         <p>{item.text}</p>
                     </div>
                  })
                }
              </div>
              </div>
           })
         }
         </div>
       </div>
    </div>
  )
}
