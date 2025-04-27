import React from 'react'

export default function Categories() {
  return (
    <div className='category'>
       <div className='cate'>
          <h2>Frontend Development</h2>
          <p>Frontend Development focuses on the visual aspects of a website — everything a user sees and interacts with. A frontend developer builds user interfaces using technologies like HTML, CSS, and JavaScript. They ensure the website looks good, works smoothly, and offers a great user experience. Popular frameworks and libraries like React, Angular, and Vue.js are often used to build dynamic and responsive frontends.
           </p>
       </div>
       <div className='cate'>
         <h2>Backend Development</h2>
         <p>Backend Development is all about how a website works behind the scenes. Backend developers manage databases, server logic, authentication, and APIs. They ensure that the data flows correctly between the frontend and the server. Technologies commonly used in backend development include Node.js, Django, Ruby on Rails, Laravel, and databases like MySQL, MongoDB, and PostgreSQL</p>
       </div>
       <div className='cate'>
         <h2>Full Stack Development</h2>
         <p>Full Stack Web Development covers both frontend and backend development. A full stack developer can build complete web applications independently — from designing user interfaces to handling server-side operations. Mastering both ends gives you a better understanding of how a system works as a whole and opens up more career opportunities. Technologies like MERN (MongoDB, Express.js, React, Node.js) or MEAN (MongoDB, Express.js, Angular, Node.js) stacks are popular choices.</p>
       </div>
    </div>
  )
}
