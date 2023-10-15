import Image from 'next/image'
import Nav from '../components/nav'
import exampleImage from '../public/pexels-dom-j-310435.jpg'; 
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col h-auto w-screen ">
<Nav />
<div className='flex flex-col items-center justify-center h-64 w-screen bg-black'>
    <h1 className='text-7xl text-center  border-black   w-screen font-aBC  text-white '>GreenTech Innovations</h1>
    <h2 className='text-2xl  text-center  border-black   w-screen font-aBC mt-8  text-white '>
    "Empowering Tomorrow, Today: Innovate, Inspire, Impact!"</h2>
</div>

   <div className='flex flex-row gap-10   items-center justify-center   '>
<div className='flex flex-col items-center rounded-md mt-16 w-96 h-96  justify-center  bg-black'>

<Image className='w-52 rounded-md mt-5 mb-5   ' src="/pexels-dom-j-310435.jpg" alt="Example Image" width={300} height={300} />
<h2 className='text-center font-aBC justify-center    ' >Innovation</h2>
<p className='text-center font-serif justify-center    '>GreenTech Innovations is a visionary company that envisions a sustainable future powered by innovative green technologies. Based in South Africa, we specialize in developing eco-friendly solutions that address environmental challenges. Our focus areas include renewable energy, waste management, and sustainable agriculture.</p>
</div>

<div className='flex flex-col items-center mt-10 w-96 rounded-md h-96  justify-center  bg-black'>

<Image className='w-52 rounded-md mt-5 mb-5   ' src="/pexels-tuur-tisseghem-240566.jpg" alt="Example Image" width={300} height={300} />
<h2 className='text-center font-aBC justify-center    ' >Insight</h2>
<p className='text-center font-serif justify-center    '>At GreenTech Innovations, our mission is to pioneer eco-friendly technologies that preserve the planet for future generations. We are dedicated to researching, developing, and implementing innovative solutions that reduce the ecological footprint, promote renewable resources, and create a healthier environment for all living beings.</p>
</div>

<div className='flex flex-col items-center mt-10 w-96 h-96 rounded-md  justify-center  bg-black'>

<Image className='w-52 rounded-md mt-5 mb-5   ' src="/pexels-suhail-lone-2908194.jpg" alt="Example Image" width={300} height={300} />
<h2 className='text-center font-aBC justify-center    ' >Innovation</h2>
<p className='text-center font-serif justify-center    '>At GreenTech Innovations, we are committed to revolutionizing the way we interact with the environment. Our team of dedicated scientists, engineers, and environmentalists work tirelessly to create sustainable solutions that benefit both humanity and the Earth.</p>
</div>



</div>

<div className='flex flex-row gap-10     items-center justify-center   '>
<div className='bg-black mt-16 rounded-md    '>
<h3  className='text-center text-2xl font-aBC justify-center mt-8    '>  
Why Choose GreenTech Innovations?
</h3>
<p  className='text-center font-serif justify-center  mt-8    mb-8  '  >
Environmental Impact: Our technologies contribute significantly to reducing carbon emissions and conserving natural habitats.
Innovation: We are at the forefront of green technology, continuously researching and developing new, sustainable solutions.
Collaborative Approach: We work closely with communities, businesses, and governments to implement eco-friendly practices on a large scale.
Global Vision: Our initiatives extend beyond borders, aiming to create a greener planet for everyone.

</p>
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
