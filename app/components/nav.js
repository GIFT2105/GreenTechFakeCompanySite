"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Nav = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status when the component mounts on the client side
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    setAuthenticated(isAuthenticated);
  }, []); // Empty dependency array ensures this effect runs once after initial render on the client side

  const handleLogout = () => {
    // Clear local authentication status and redirect to the login page
    localStorage.removeItem('authenticated');
    router.push('/login');
  };

  return (
    <main className="flex   flex-col w-screen items-center    ">
    <nav className='font-aBC text-xl border-2 mt-10 mb-10
     border-white   flex flex-row items-center justify-center h-16 rounded-full gap-10    w-1/2  bg-black  '   >
    <Link className='flex' href="/">Home</Link>
    <Link href="/About">About</Link>
    <Link href="/About">Our Mission</Link>
    <Link href="/contact">Contact us</Link>
    {authenticated ? (
      <button onClick={handleLogout}>Logout</button>
    ) : (
      <Link href="/Autha">
        Login
      </Link>
    )}
    </nav>  
   
    </main>
  );
};

export default Nav;