import React from 'react'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer';
import { useContext } from 'react';
import { AppContext, useProductContext } from './context/productcontext';
const About = () => {
    const data={
        name:"About section"
    };
   const {myName}=useProductContext();
  return (
    <>
   <h1> {myName}</h1>
     <HeroSection myData={data}/>
   
    </>
  
  )
}

export default About