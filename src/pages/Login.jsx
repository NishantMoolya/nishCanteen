import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/login.css';
import { login } from '../redux/reducers/userReducer';
import { getUserProfile } from '../redux/api/userApi';

const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.user.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(auth) return navigate('/');
  },[auth]);

  let initialData = {
    name:'',
    email:"",
    password:"",
    role:'student'
  }

  const [formData, setFormData] = useState(initialData);
  const handleUserInput = (e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,[name]:value
    });
  }
  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email,password } = formData;
      const data = await fetch(`${baseURL}/user/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({ email:email.trim(),password:password.trim() })
      });
      const res = await data.json();
      if(data.status === 200){
        dispatch(login());
        alert("Login successful");
        dispatch(getUserProfile());
        return navigate('/');
      }else if(data.status === 400){
        return alert("invalid credentials");
      }else if(data.status === 401){
        alert("Not a registered user");
        return navigate('/signup');
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`An error occurred in login user:${err}`);
      alert("An error occurred in server");
    }
    setFormData(initialData);
  }

  const handleSignup = async (e) => {
    const { name,email,password } = formData;
    try {
      e.preventDefault();
      const data = await fetch(`${baseURL}/user/signup`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:name.trim(),email:email.trim(),password:password.trim()})   
      });
      const response = await data.json();
      //console.log(response);
      if(data.status === 200){
        alert("User already registered");
        return navigate('/login');
      }else if(data.status === 201){
        alert("User account created");
        return navigate('/login');
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`En error occurred in registering user:${err}`);
      alert("An error occurred in server");
    }
    setFormData(initialData);
  }

  const [isLogin, setIsLogin] = useState(true);
        return (
           <div className='signup_frame'>
            <form className='flex flex-col gap-1 shadow p-4 rounded w-80' method='POST' onSubmit={isLogin?handleLogin:handleSignup} onChange={handleUserInput}>
              <h2 className='font-bold text-3xl text-green-500 capitalize text-center'>{isLogin?"login":"signup"}</h2>
             {!isLogin && <div className='signup_input_block'>
              <label htmlFor="name">Username</label>
              <input type="text" name='name' value={formData.name} className='border border-green-500' required />
              </div>}

              <div className='signup_input_block'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' value={formData.email} className='border border-green-500' required />
              </div>

              <div className='signup_input_block'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' value={formData.password} className='border border-green-500' required />
              </div>

              {!isLogin && <div className='signup_input_block'>
              <label>Role</label>
              <select name="role" id="role" className='border border-green-500' value={formData.role}>
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