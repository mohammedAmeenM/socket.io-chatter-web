import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../axiosIndersptor';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async ()=>{
        try {
            const response = await api.post('/auth/login',{email,password})
            if(response.status===200){
                localStorage.setItem('token',response.data.token)
                navigate('/')
            }
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="relative bg-white block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="relative bg-white block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <span
          className="pb-3 flex justify-end opacity-30 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          signup!
        </span>
        <button
         
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  </div>
  )
}

export default Login
