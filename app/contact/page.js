"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from '../../components/nav';

const Page = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeCircle, setActiveCircle] = useState(1);

  useEffect(() => {
    // Check authentication status when the component mounts on the client side
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    setAuthenticated(isAuthenticated);

    // Change the active circle every 3 seconds
    const interval = setInterval(() => {
      setActiveCircle((prevActiveCircle) => (prevActiveCircle % 3) + 1);
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs once after initial render on the client side

  const handleLogout = () => {
    // Clear local authentication status and redirect to the login page
    localStorage.removeItem('authenticated');
    router.push('/login');
  };

  return (
    <main className="flex flex-col h-auto w-screen ">
    <Nav />
    <div className='flex flex-col items-center justify-center h-64 w-screen bg-black'>
        <h1 className='text-7xl text-center  border-black   w-screen font-aBC  text-white '>GreenTech Innovations</h1>
        <h2 className='text-2xl  text-center  border-black   w-screen font-aBC mt-8  text-white '>
        "Empowering Tomorrow, Today: Innovate, Inspire, Impact!"</h2>
    </div>
    <div className='items-center justify-center flex  '>
<div id='contactForm' className='flex flex-col items-center justify-center rounded-lg h-auto w-96  mt-16 bg-black'  >
<h1 className='text-2xl text-center mt-8    border-black   w-screen font-aBC  text-white '>GreenTech Innovations</h1>
<h2 className='text-sm   text-center  border-black   w-screen font-aBC mt-1 mb-8  text-white '>
"Empowering Tomorrow, Today: Innovate, Inspire, Impact!"</h2>
<form className='flex flex-col gap-2 text-center text-black'>
<input className='w-80 h-10 mt-4 text-center rounded-lg' type="text" id="fname" name="firstname" placeholder="First name.."></input>
<input className='w-80 h-10 mt-4 text-center  rounded-lg' type="text" id="fname" name="secondname" placeholder="Last name.."></input>
<input className='w-80 h-10 mt-4 text-center rounded-lg' type="email" id="email"  placeholder="Email"></input>
<button  type='submit' className='w-80 h-10 mt-4 mb-8 rounded-lg bg-green-500 text-white'>Submit</button>
</form>

</div>


</div>


<footer className='flex flex-col items-center justify-center mt-16 h-64 w-screen bg-black'>
<h1 className='text-4xl  text-center  border-black   w-screen font-aBC  text-white '>GreenTech Innovations</h1>

<ul className='flex flex-row gap-8 mt-8 font-aBC text-lg     '>
<Link href={'/'}>About us</Link>
<Link href={'/'} >Contact us</Link>
<Link href={'/'} >Feedback</Link>
<Link  href={'/'}>Careers</Link>
<Link  href={'/'}>Terms and Conditions</Link>
</ul>

</footer>



    </main>
  )
}

export default Page