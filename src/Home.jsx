import React, { useEffect } from 'react'
import HeroSection from "./components/HeroSection";
import Contact from "./Contact"
import About from "./About"
import { useGlobalContext } from './context';

const Home = () => {
  // const data = {
  //   name: "Ankit Khare",
  //   image: "./images/hero.svg",
  // };

  const {updateHomePage} = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return ( 
  <> 
  <HeroSection />
  <Contact />
  </> 
  )
}

export default Home;
