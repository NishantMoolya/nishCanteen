import React, { useState } from 'react'
import '../styles/login.css';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
        return (
           <div className='signup_frame'>
            <form className='flex flex-col gap-1 shadow p-4 rounded w-80'>
              <h2 className='font-bold text-3xl text-green-500 capitalize text-center'>{isLogin?"login":"signup"}</h2>
             {!isLogin && <div className='signup_input_block'>
              <label htmlFor="name">Username</label>
              <input type="text" name='name' className='border border-green-500' required />
              </div>}

              <div className='signup_input_block'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className='border border-green-500' required />
              </div>

              <div className='signup_input_block'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className='border border-green-500' required />
              </div>

              {!isLogin && <div className='signup_input_block'>
              <label>Role</label>
              <select name="role" id="role" className='border border-green-500'>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="outsider">Outsider</option>
              </select>
              </div>}
              <input type="submit" value={isLogin?"login":"register"} className='outline-none border-none py-1 mt-6 capitalize bg-green-500 hover:bg-green-600 hover:scale-95 text-white rounded' />
              {isLogin ? <p className='text-sm font-semibold text-center'>Don't have an account? <span onClick={() => setIsLogin(false)} className='text-green-500'>Signup</span></p>
              : <p className='text-sm font-semibold text-center'>Already have an account? <span onClick={() => setIsLogin(true)} className='text-green-500'>Login</span></p>}
            </form>
           </div>
        )
    }

export default Login;