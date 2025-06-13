import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogoLoader from "./components/LogoLoader";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!loadingComplete && <LogoLoader />}
      {loadingComplete && (
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main className='flex-grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
