import React from 'react'
import Blogs from './Blogs';


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
              return <div className="blog" key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="sub-content">
                {
                  blog.content.map((item,ind)=>{
                     return <div className='sub-card' key={ind}>
                         <h4>{item.heading}</h4>
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
