import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-[#FFFFFF] xl:hidden'>
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className='text-3xl cursor-pointer'
      >
        <CgMenuRight />
      </div>

      
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl h-full w-full absolute top-0 bottom-0 right-0 max-w-xs z-20'
      >

        
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'
        >
          <IoMdClose />
        </div>


        {/* menu list */}
        <ul className='h-screen flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
          <Link to='/Experience'>Experience</Link>
          </li>
          {/*<li>*/}
          {/*  <Link to='/contact'>Experience</Link>*/}
          {/*</li>*/}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
