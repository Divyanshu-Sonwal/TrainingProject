// import { useState } from 'react'
// import './App.css'
import Navbar from "./Layouts/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Features from "./Components/Features/features";
import Testimonial from "./Components/Testimonial/testimonial";
import Footer from "./Layouts/Footer/footer";

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
