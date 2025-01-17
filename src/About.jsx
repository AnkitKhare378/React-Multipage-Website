import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';

const About = () => {

  // const data = {
  //   name: "Vinod Thapa",
  //   image: "./images/about1.svg",
  // };

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);


  return <HeroSection />
}

export default About