import React from 'react'

export default function Categories() {
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h1 className='text-2xl font-bold text-center text-green-600 mb-10'>Categories</h1>
     <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      
      <div className='p-6 border rounded-lg shadow-md hover:shadow-xl transition'>
          <h2 className='text-2xl font-semibold text-green-500 mb-4'>Frontend Development</h2>
          <p className='text-gray-700m leading-relaxed'>Frontend Development focuses on the visual aspects of a website — everything a user sees and interacts with. A frontend developer builds user interfaces using technologies like HTML, CSS, and JavaScript. They ensure the website looks good, works smoothly, and offers a great user experience. Popular frameworks and libraries like React, Angular, and Vue.js are often used to build dynamic and responsive frontends.
           </p>
       </div>
       <div className='p-6 border rounded-lg shadow-md hover:shadow-xl transition'>
         <h2 className='text-2xl font-semibold text-green-500 mb-4'>Backend Development</h2>
         <p className='text-gray-700m leading-relaxed'>Backend Development is all about how a website works behind the scenes. Backend developers manage databases, server logic, authentication, and APIs. They ensure that the data flows correctly between the frontend and the server. Technologies commonly used in backend development include Node.js, Django, Ruby on Rails, Laravel, and databases like MySQL, MongoDB, and PostgreSQL</p>
       </div>
       <div className='p-6 border rounded-lg shadow-md hover:shadow-xl transition'>
         <h2 className='text-2xl font-semibold text-green-500 mb-4'>Full Stack Development</h2>
         <p className='text-gray-700m leading-relaxed'>Full Stack Web Development covers both frontend and backend development. A full stack developer can build complete web applications independently — from designing user interfaces to handling server-side operations. Mastering both ends gives you a better understanding of how a system works as a whole and opens up more career opportunities. Technologies like MERN (MongoDB, Express.js, React, Node.js) or MEAN (MongoDB, Express.js, Angular, Node.js) stacks are popular choices.</p>
       </div>

      </div>
    </div>
  )
}
