import React from 'react'
import Blogs from './Blogs';


export default function Home() {
  return (
    <div className='max-w-6xl mx-auto p-6'>
       <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-5xl font-bold text-green-600 mb-4 '> Welcome to <span className='text-black'>Pixels-to-Projects</span></h1>
        <p className='text-gray-700 text-lg md:text-xl'>Explore Exciting Web development topics and careers like Never Before!</p>
       </div>

       <div className="latest-blogs">
         <h2 className='text-2xl font-semibold text-center text-green-500 mb-10'>Latest Posts</h2>
        <div className="grid gap-8 md:grid-cols-2"> 
         {
           Blogs.map((blog,index)=>{
              return <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition"  key={index}>
              <h3 className='text-2xl font-semibold  text-indigo-500 mb-4'>{blog.title}</h3>
              <p className='text-gray-600 mb-6'>{blog.description}</p>
              <div className="space-y-6">
                {
                  blog.content.map((item,ind)=>{
                     return <div key={ind} className='bg-gray-100 p-4 rounded-lg'>
                         <h4 className='text-xl font-semibold text-gray-800 mb-2'>{item.heading}</h4>
                         <p  className='text-gray-600'>{item.text}</p>
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
