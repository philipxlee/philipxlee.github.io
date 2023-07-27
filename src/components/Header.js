import React from 'react';
// import components
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=' w-full px-[30px] lg:px-[170px] z-30 h-[100px] lg:h-[80px] flex items-center bg-[#21325e]'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          to={'/'}
          className='max-w-[200px]'
        >
          {/*<img src={INSERT LOGO HERE} alt='' />*/}
        </Link>
        {/* nav - initially hidden - show on desktop mode
        text-[30] edits nav bar text size */}
        <nav
          className='hidden xl:flex gap-x-10 font-semibold text-[25px]'
        >
          <Link
            to={'/'}
            className='text-[#FFFFFF] hover:text-primary transition '
          >
            About
          </Link>
          <Link
            to={'/Projects'}
            className='text-[#FFFFFF] hover:text-primary transition'
          >
            Projects
          </Link>
          <Link
          to={'/Experience'}
          className='text-[#FFFFFF] hover:text-primary transition'
          >
          Experience
          </Link>
        </nav>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
