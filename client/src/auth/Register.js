import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
      <div className='w-60 rounded p-3'>
        <form>
          <h2>Register your account</h2>
          <div className='mb-4'>
          <label htmlFor=''>Email address</label>
          <input type='email' placeholder='e.g email@gmail.com' required  />
          </div>
          <div className='mb-4'>
          <label htmlFor=''>Confirm Password</label>
          <input type='password' placeholder='*password' required />
          </div>
          <div className='mb-2'>
          <label htmlFor=''>Password</label>
          <input type='password' placeholder='*password' required />
          </div>
          <div className='col'><Link to="/" className='btn btn-success'>Submit</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Register

