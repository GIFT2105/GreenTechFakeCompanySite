"use client"
import React, { useState } from 'react';
import { supabase } from '../app/supabase' // Import the initialized supabase instance
import { useRouter } from 'next/navigation';


const LoginRegistrationComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      console.error('Error logging in:', error.message);
      console.log('error message:', error.message);
    } else {
      // User authenticated, store in local storage
      localStorage.setItem('authenticated', 'true');
      console.log('User authenticated:', user);
      router.push('/');
    }
  };

  const handleRegistration = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Error registering user:', error.message);
      console.log('error message:', error.message);
    } else {
      // User registered and authenticated, store in local storage
      localStorage.setItem('authenticated', 'true');
      console.log('User registered and authenticated:', user);
    }
  };

  return (
    <div className='items-center justify-center flex  '>
    <div id='contactForm' className='flex flex-col items-center justify-center rounded-lg h-auto w-96  mt-16 bg-black'  >
    <h1 className='text-2xl text-center mt-8    border-black   w-screen font-aBC  text-white '>GreenTech Innovations</h1>
    <h2 className='text-sm   text-center  border-black   w-screen font-aBC mt-1 mb-8  text-white '>
    "Empowering Tomorrow, Today: Innovate, Inspire, Impact!"</h2>
    <form className='flex flex-col gap-2 text-center items-center justify-center'>
    <input className='w-80 h-10 mt-4 text-center text-black rounded-lg' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

    <input className='w-80 h-10 mt-4 text-center text-black  rounded-lg' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <p className='font-aBC text-xs   mt-4  '>Forgot Password?</p>
    <button onClick={handleRegistration} type='submit' className='w-56  h-10 mt-4  rounded-lg bg-green-500 text-white'>Register</button>
    <button onClick={handleLogin}  type='submit' className='w-56 h-10 mt-4 mb-8 rounded-lg bg-blue-500 text-white'>Login</button>
    </form>
    
    </div>
    </div>
  );
  };
  
export default LoginRegistrationComponent;


