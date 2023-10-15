// login.js
"use client"
import { useState } from 'react';
import { supabase } from '../app/supabase';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleLogin = async () => {
      try {
        const { user, error } = await supabase.auth.signIn({
          email,
          password,
        });
  
        if (error) {
          console.error('Error logging in:', error.message);
          return;
        }
  
        // Store authentication status locally
        localStorage.setItem('authenticated', 'true');
        router.push('/dashboard'); // Redirect to the dashboard or any other authenticated route
      } catch (error) {
        console.error('Error logging in:', error.message);
      }
    };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
