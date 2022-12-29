import React from 'react'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer';
const About = () => {
    const data={
        name:"About section"
    };
  return (
    <>
     <HeroSection myData={data}/>
   
    </>
  
  )
}

export default About