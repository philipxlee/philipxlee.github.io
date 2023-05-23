import React, { useContext } from 'react';
// import icons
import {
  ImGithub, ImLink,
  ImLinkedin,
    ImMail,
} from 'react-icons/im';


const Socials = () => {
  return (
    <div
      className='hidden xl:flex ml-2'
    >
      <ul className='flex gap-x-5 h2'>
        <li className>
          <a href='http://linkedin.com/in/philipxlee/' target='_blank'>
            <ImLinkedin/>
          </a>
        </li>
        <li>
          <a href='https://github.com/philipxlee' target='_blank'>
            <ImGithub/>
          </a>
        </li>
        <li>
          <a href='mailto:philipleektx@gmail.com' target='_blank'>
            <ImMail />
          </a>
        </li>
        <li>
          {/*<a href='http://www.instagram.com' target='_blank'>*/}
          {/*  <ImInstagram />*/}
          {/*</a>*/}
        </li>
        <li>
          {/*<a href='http://www.youtube.com' target='_blank'>*/}
          {/*  <ImYoutube />*/}
          {/*</a>*/}
        </li>
      </ul>
    </div>
  );
};

export default Socials;
