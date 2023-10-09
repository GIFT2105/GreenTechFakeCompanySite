"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

const page = () => {
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

<div  className='flex flex-row gap-10  items-center justify-center   '>
<div id='circle1' className={`flex flex-col items-center rounded-full mt-16 w-auto h-96 justify-center text-center bg-black ${activeCircle === 1 ? 'visible' : 'hidden'}`}>
  
<h2 className='text-2xl  text-center  border-black   font-aBC mt-8 mb-6   text-white '>About Us:</h2>
<p className='mb-10 ml-10 mr-10 '>
GreenTech Innovations is a visionary company <br/>
that envisions a sustainable future powered <br/>
by innovative green technologies. Based in <br/>
South Africa, we specialize in developing <br/>
eco-friendly solutions that address environmental<br/> 
challenges. Our focus areas include <br/>
renewable energy, waste management, <br/>
and sustainable agriculture.
</p>
</div>

<div id='circle2' className={`flex flex-col items-center rounded-full mt-16 w-auto h-96 justify-center text-center bg-black ${activeCircle === 2 ? 'visible' : 'hidden'}`}>
  
<h2 className='text-2xl  text-center  border-black   font-aBC mt-8 mb-6   text-white '>Focus Areas:</h2>
<p className='mb-10 ml-10 mr-10 '>
Renewable Energy: We harness the power of wind,solar,<br/>
 and hydro energy to create clean,<br/>
  renewable power sources for <br/>
  communities and industries.<br/>
Waste Management: Our innovative <br/>
waste management solutions<br/>
 aim to reduce landfill waste and<br/> 
 promote recycling, composting, <br/>
 and upcycling.<br/>
Sustainable Agriculture: We develop<br/> 
technologies that enhance agricultural<br/>
 productivity while conserving natural <br/>
 resources and promoting biodiversity.<br/>
</p>
</div>

<div id='circle3' className={`flex flex-col items-center rounded-full mt-16 w-auto h-96 justify-center text-center bg-black ${activeCircle === 3 ? 'visible' : 'hidden'}`}>
   
<h2 className='text-2xl  text-center  border-black   font-aBC mt-8 mb-6   text-white '>Mission:</h2>
<p className='mb-10 ml-10 mr-10 '>
GreenTech Innovations is a visionary company <br/>
that envisions a sustainable future powered <br/>
by innovative green technologies. Based in <br/>
South Africa, we specialize in developing <br/>
eco-friendly solutions that address environmental<br/> 
challenges. Our focus areas include <br/>
renewable energy, waste management, <br/>
and sustainable agriculture.
</p>
</div>


</div>
<Footer/>

    </main>
  )
}

export default page
