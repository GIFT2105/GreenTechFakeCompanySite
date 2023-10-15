import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer
