import React from 'react';


export default function User() {
  return (
    <div className='profile'>
      <form>
        <label htmlFor="Username">
          Username:
          <input type="text" placeholder='username' required />
        </label>
        <br />
        <label htmlFor='Email'>
          Email:
          <input type="email" placeholder='email' required />
        </label>

        <br />
        <label htmlFor="Password">
          Password:
          <input type="password" placeholder='password' required />
        </label>
        <br />
        <label htmlFor="confirm Password">
          Confirm Password:
          <input type="password" placeholder='confirm' required />
        </label>
        <br />
        <button type='submit'>SignUp</button>
        <a href="#" id="login"> login if already have account</a>
      </form>
    </div>
  )
}
