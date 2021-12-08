import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = ({ setOpen }) => {
  return (
    <div
      className='home-container'
      onClick={() => setOpen(false)}
      onScroll={() => setOpen(false)}
    >
      <Hero />
      <Logo />
      <Services />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
