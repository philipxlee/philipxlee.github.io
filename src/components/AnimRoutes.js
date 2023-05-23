import React from 'react';
// import pages
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';

// import routes route & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/experience' element={<Experience />} />
        {/*<Route path='/contact' element={<Contact />} />*/}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
