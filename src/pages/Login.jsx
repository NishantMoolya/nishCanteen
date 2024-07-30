import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/login.css';
import { login } from '../redux/reducers/userReducer';
import { getUserProfile } from '../redux/api/userApi';
import useRegister from '../hooks/useRegister';
import { showToast } from '../redux/reducers/toastReducer';

const InputField = ({ label,name,type='text' }) => {
  return(
    <input type={type} name={name} id={name} placeholder={label} className='outline-none border border-slate-200 py-1 px-3 rounded-lg focus:border-slate-900 placeholder:capitalize placeholder:text-slate-500' required autoComplete='off' />
  )
}
const AuthButton = ({ label,type='button' }) => {
  return(
    <input type={type} value={label} className='outline-none border-none py-1 mt-4 capitalize bg-green-500 hover:bg-green-600 hover:scale-95 text-white rounded' />
  )
}
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
    type:'student'
  }

  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email,password } = formData;
      const data = await registerData(baseURL+'/user/login','POST',{ email,password },200);
      if (!data) {
        throw new Error();
      }
      if(data.status === 200){
        dispatch(login());
        dispatch(showToast({ message:'Login successful',type:'success'}));
        dispatch(getUserProfile());
        return navigate('/');
      }else if(data.status === 400){
         return dispatch(showToast({ message:'Invalid credentials',type:'info'}));
      }else if(data.status === 401){
        dispatch(showToast({ message:'Not a registered user',type:'info'}));
        return setIsLogin(false);
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`An error occurred in login user:${err}`);
      dispatch(showToast({ message:'An error occurred in server',type:'error'}));
    }
  }

  const handleSignup = async (e) => {
    try {
      const { name,email,password,type } = formData;
      e.preventDefault();
      const data = await registerData(baseURL+'/user/signup','POST',{ name,email,password,type },201);
      if (!data) {
        throw new Error();
      }
      if(data.status === 200){
        dispatch(showToast({ message:'User already registered',type:'info'}));
        return setIsLogin(true);
      }else if(data.status === 201){
        dispatch(showToast({ message:'User account created',type:'success'}));
        return setIsLogin(true);
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`En error occurred in registering user:${err}`);
      dispatch(showToast({ message:'An error occurred in server',type:'error'}));
    }
  }

  const [isLogin, setIsLogin] = useState(true);
  const { formData,handleUserInput,registerData} = useRegister(initialData);

  const handleEnter = (e) => { 
    if (e.key.toLowerCase() === 'enter') {
      isLogin?handleLogin(e):handleSignup(e);
    }
  }

        return (
           <div className='signup_frame'>
            <form className='flex flex-col gap-2 p-4 rounded-md shadow sm:w-80 w-72' method='POST' onSubmit={isLogin?handleLogin:handleSignup} onChange={handleUserInput} onKeyDown={handleEnter}>
              <h2 className='font-bold text-3xl text-green-500 capitalize text-center mb-1'>{isLogin?"Welcome back😀":"signup"}</h2>
              {!isLogin && <InputField name={'name'} label={'username'}  />}
              <InputField type={'email'} name={'email'} label={'email'}  />
              <InputField type={'password'} name={'password'} label={'password'}  />
              {!isLogin && <select name="type" id="type" className='outline-none border border-slate-200 py-1 px-3 rounded-lg focus:border-slate-900 placeholder:capitalize placeholder:text-slate-500' value={formData.type}>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="outsider">Outsider</option>
              </select>}
              <AuthButton type={'submit'} label={`${isLogin?'login':'signup'}`} />
              {isLogin ? <p className='text-sm font-semibold text-center'>Don't have an account? <span onClick={() => setIsLogin(false)} className='text-green-500'>Signup</span></p>
                : <p className='text-sm font-semibold text-center'>Already have an account? <span onClick={() => setIsLogin(true)} className='text-green-500'>Login</span></p>} 
            </form>
           </div>
        )
    }

export default Login;