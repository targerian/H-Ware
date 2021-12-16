import React from "react";
import FAQS from "../components/FAQS";
import Features from "../components/Features";
import Footer from "../components/Footer";
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
      <FAQS />
      <Footer />
    </div>
  );
};

export default Home;
