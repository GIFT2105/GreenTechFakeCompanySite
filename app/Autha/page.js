import React from 'react'
import LoginRegistrationComponent from '../../components/register'
import Nav from '../../components/nav'
import Footer from '../../components/footer'


const page = () => {
  return (
    <div  className="flex flex-col h-auto w-screen ">
    <Nav/>
<LoginRegistrationComponent/>  
<Footer/>
    </div>
  )
}

export default page
