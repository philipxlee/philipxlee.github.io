import React from 'react';
// import images
import Headshot from '../img/about/Headshot.jpeg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
import Socials from '../components/Socials';



const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}

            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col
                      justify-center items-center lg:items-start'
          >
            <h1 className='h1'>
              Hi, I'm Philip 👋
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              I study Computer Science <br/> at Duke University
            </p>
            {/*<Link to={'/contact'} className='btn mb-[30px]'>*/}
            {/*  Remove This Button Maybe ? */}
            {/*</Link>*/}
             <Socials/>
             <h1 className="h1">⬇ </h1>
          </motion.div>
          {/* image */}

          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40 overflow-hidden'
            >
              <motion.img
                whileHover={{ scale: 0.9 }}
                transition={transition1}
                src={Headshot}
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </div>
      <br/>
        {/*ABOUT ME SECTION*/}
      <br/>
      <br/>
      <br/>
        <div className="bio">
          <h1 className='h1'>About Me</h1>
            <p>
              I'm a current student at Duke University majoring in Computer Science.
              I'm enthusiastic about exploring new technologies, solving problems,
              furthering innovation, and conducting research.
              <br />
              <br />
              I began my programming journey in high school, creating front-end projects 
               using HTML and CSS. At college, I started exploring more programming languages and 
               back-end technologies, gaining a deeper appreciation for software development.
              <br />
              <br />
              Outside of working on my own projects, I enjoy playing basketball, following Formula 1,
              and exploring the outdoors. I also love playing strategy-based board games like Chess, 
              working out, and watching historical documentaries.
            </p>
          <br />
          <br />
          <br />
          <br />
        </div>

      {/*TECHNICAL SKILLS SECTION*/}

      <div className="chapel">
        <br/>
        <br/>
         <br />
         <br />
         <br />
          <h1 className='h1White'>Techical Skills</h1>
           <br />
           <br />
          <div className="bio2">
            <p>
               <b> Languages: </b> C++, Python, Java, JavaScript, Scheme
              <br />
              <br />
              <b> Libaries: </b> Pygame, NumPy, Requests, Matplotlib, pandas
              <br />
              <br />
              <b> Web: </b> HTML, CSS, ReactJS, Bootstrap, Flask, Streamlit
             <br />
             <br />
              <b> Miscellaneous: </b> Git, GitHub, LaTeX, Jupyter
             <br />
             <br />
             <b> Relevant Coursework: </b> Object-Oriented Programming, Data Structures & Algorithms,
                Computer Architecture, Linear Algebra, Discrete Maths, Probability, Calculus
              <br />
              <br />
              <br />
              <div className="sourceCode">

              <a href="https://github.com/philipxlee/philipxlee.github.io">  Website Source Code </a>
              </div>
            </p>
            </div>
            
          <br /> <br /> <br /> 
          

        </div>

    </motion.section>
  );
};

export default About;
