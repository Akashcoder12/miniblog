import React from 'react';


export default function User() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-50 p-4'>
        
      <form className='bg-white p-8 rounded-lg shadow-md m-full max-w-md'>
      <h2 className='text-3xl font-bold text-center text-blue-600 mb-8 '>Signup</h2>
        
      <div className='mb-6'>
      <label htmlFor="Username" className='block text-gray-700 font-semibold mb-2'>
          Username:
          <input 
            type="text" 
            placeholder='username' 
            required 
            className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'  
            />
        </label>
        <br />
        <label htmlFor='Email' className='block text-gray-700 font-semibold mb-2'>
          Email:
          <input type="email" 
          placeholder='email'
           required
           className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </label>

        <br />
        <label htmlFor="Password" className='block text-gray-700 font-semibold mb-2'>
          Password:
          <input 
          type="password" 
          placeholder='password' 
          required 
          className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </label>
        <br />
        <label htmlFor="confirm Password" className='block text-gray-700 font-semibold mb-2'>
          Confirm Password:
          <input 
          type="password" 
          placeholder='confirm' 
          required
          className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </label>
        <br />
        <button type='submit'
         className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition'
        >SignUp</button>
        <p className='text-center text-sm text-gray-600 mt-4'>
          Already have an account?<a href="#" id="login"  className='text-blue-500 hover:underline'>Login here</a>
        </p>
        
      </div> 
    </form>
    </div>
  )
}
