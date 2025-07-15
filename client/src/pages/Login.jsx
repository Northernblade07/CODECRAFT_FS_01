import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar.jsx'

const Login = () => {

    const navigate = useNavigate()

    const {backendUrl, setIsLoggedin ,setUserData} = useContext(AppContext)

    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 

    const onSubmitHandler=async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true
            if(state==='Sign Up'){
              const response = await axios.post(backendUrl+'/api/auth/register',{name, email, password})
 console.log(response.data)
              if(response.data.success){
                  setState("login")
              }else{
                // toast.error(response.data)
              }
            }
            else{
              const res = await axios.post(backendUrl+'/api/auth/login',{email, password})
               console.log(res.data)
              if(res.data.success){
                  setIsLoggedin(true)
                  setUserData(res.data.user)
                  navigate('/')
              }else{
                toast.error(res.message)
              }  
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
         <div className='flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white relative'>
      {/* <img
        onClick={() => navigate('/')}
        src={'logo2.webp'}
        alt="Logo"
        className='absolute rounded-full top-1 left-2  cursor-pointer h-18 z-10'
      /> */}

      <Navbar/>

      <div className='bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full sm:w-96 z-20'>
        <h2 className='text-3xl text-white text-center font-bold mb-2'>
          {state === 'Sign Up' ? 'Create account' : 'Login'}
        </h2>

        <p className='text-center text-sm text-indigo-200 mb-6'>
          {state === 'Sign Up'
            ? 'Create your account to get started'
            : 'Login to your account'}
        </p>

        <form onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-indigo-800 bg-opacity-30'>
              <img src={assets.person_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='bg-transparent outline-none text-white placeholder-indigo-300 w-full'
                type="text"
                placeholder='Full Name'
                required
              />
            </div>
          )}

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-indigo-800 bg-opacity-30'>
            <img src={assets.mail_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='bg-transparent outline-none text-white placeholder-indigo-300 w-full'
              type="email"
              placeholder='Email'
              required
            />
          </div>

          <div className='mb-6 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-indigo-800 bg-opacity-30'>
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='bg-transparent outline-none text-white placeholder-indigo-300 w-full'
              type="password"
              placeholder='Password'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition'
          >
            {state}
          </button>
        </form>

        {state === 'Sign Up' ? (
          <p className='text-indigo-200 text-center text-xs mt-5'>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className='text-pink-300 cursor-pointer underline'
            >
              Login here
            </span>
          </p>
        ) : (
          <p className='text-indigo-200 text-center text-xs mt-5'>
            Don't have an account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className='text-pink-300 cursor-pointer underline'
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
    )
}

export default Login