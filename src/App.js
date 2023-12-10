import React from "react";
import { Route, Routes } from "react-router-dom";
import browserRoutes from './assets/data/browerRoutes'
import Navbar from "./components/layoutComponents/Navbar";
import '/'
import Footer from "./components/layoutComponents/Footer";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/home" element={<Home />} />

        {browserRoutes.map(item => <Route key={item.id} path={item.path} element={item.element} />)}

      </Routes>
      <Footer />
    </>
  );
}

export default App;
