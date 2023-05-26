import React from 'react';
// import images
import HKUMed from '../img/projects/HKUMed.png';
import YouTubePic from '../img/projects/Youtube.png';
import Battleship from '../img/projects/BattleshipProject.jpg';
import DukeBackground from '../img/about/Chapel.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';


const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >

      {/*INTRODUCTION*/}
      <div className="dukeBackground">
        <br/>
        <br/>
        <br/>
        <div className="h1White"> Projects</div>
        <div className="bio2">
          <br/>
          <br/>
          <p>In this page you will find some of the personal projects I have worked on in the past.
             I created them to learn more about different technologies and to practice programming.
             More importantly, they were fun and interesting to work on.
          <br/>
          <br/>
          <br/>
          Please visit my GitHub page for more details about each project and to view archived projects
            that I have chosen not to show here.
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>


    {/*PROJECTS BELOW*/}
      <div className='container mx-auto  relative'>
        {/* text & img wrapper */}
        <div className=' flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-20'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={HKUMed} alt='' />
          </div> <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-10 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h3 className='h3'>Word Processor</h3>
            <div className="projectDescriptionsMobile">
            <p>
              An online word processor for Hong Kong University's medical students to record notes,
              flashcards, diagrams, and virtual-reality demos. The web application features a log-in and registration system.
              <br />
              <br />
              Implemented back-end using Python, Flask and MySQL to store user passwords, usernames, other information,
              and academic data. Implemented front-end with HTML/CSS (Bootstrap).
              <br />
              <br />
            </p>
            </div>
          </motion.div>
        </div>
        </div> <div className='container mx-auto relative'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-20'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={YouTubePic} alt='' />
          </div> <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-10 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h3'>YouTube Data Analysis</h1>
            <div className="projectDescriptionsMobile">
            <p>
              A data visualization framework using Jupyter that scrapes video statistics of desired YouTube channels
              using YouTube's API and Python.
              <br />
              <br />
              Used Matplotlib, pandas, and NumPy to show and analyze different video statistics such as channel
              views in relation to upload dates, like count, and other metrics.
              <br />
              <br />
            </p>
            </div>
          </motion.div>
        </div>
        </div><div className='container mx-auto  relative'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-20'>
          {/* image */}
          <div className='flex-1 max-h-80 lg:max-h-max order-2 lg:order-none overflow-hidden' >
            <img src={Battleship} alt='' />
          </div> <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-10 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h3'>Battleship Robots</h1>
            <div className="projectDescriptionsMobile">
            <p>
              Recreated the game of Battleship in C++ but with three robots of different intelligence
              (GoodPlayer, MediocrePlayer, and AwfulPlayer) that competes with each other.
              <br />
              <br />
              Developed recursive point placement algorithm for robots to place battleships of different sizes
              in the text-based grid. Implemented an optimized back-tracking algorithm for the GoodPlayer AI
              to beat a human player with 80% consistency.
              <br />
              <br />
            </p>
            </div>
          </motion.div>
        </div>


      <br />
      <br />
      <br />
      <br />
        </div>



    </motion.section>

  );
};

export default Projects;
