import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const auth = firebase_auth;

    // const signIn = async () => {
    //     try {
    //       const response = await signInWithEmailAndPassword(auth, email, password);
    //       console.log(response);
    //       alert("Logged in successfully");
    //     } catch (error) {
    //       console.log("error");
    //       alert("Sign in failed:" + error.message);
    //   };
    

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
      <div className='w-60 rounded p-3'>
        <form>
          <h2>Login your account</h2>
          <div className='mb-4'>
          <label htmlFor=''>Email address</label>
          <input type='email' placeholder='e.g email@gmail.com'  required  />
          </div>
          <div className='mb-4'>
          <label htmlFor=''>Password</label>
          <input type='password' placeholder='*password'  required />
          </div>
          <div className='row'>
          <div className='col'><Link to="/home" className='btn btn-success' >Login</Link></div>
          <div className='col'><Link to="/Register" className='btn btn-success'>Register</Link></div>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login
