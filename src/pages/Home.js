import React from 'react';
import Header from '../components/Header';
import '../css/callForPapers.css';
const Home = () => {
  return (
    <>
      <Header />
      <div className='home-page'>
        <div className='registration-note'>REGISTRATION IS OPEN NOW</div>
        <div className='home-about'>
          <div className='about-heading'>ABOUT</div>
          <div className='home-about-content'>
            Emerging Electronics and Automation (E2A) 2021 is the First annual
            International Conference organized by the Department of Electronics
            and Instrumentation Engineering at NIT Silchar, Assam. E2A 2021 is
            scheduled to be held online for three days between 17th and 19th
            December 2021. <br /> This conference focuses on trending research
            and product outcomes in the domain of control and robotics, signal
            processing, communication systems, sensors and instrumentation, MEMS
            and VLSI, AI and soft computing. E2A 2021 will pave a common
            platform for the academicians.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
