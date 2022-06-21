/* eslint-disable react/prop-types */
import React, {useEffect, useRef} from "react";
import "../assets/css/home.css"
import location from "../assets/svg/location.svg"
import time from "../assets/svg/time.svg"
import meetingRoom from "../assets/svg/meeting-room.svg"
import website from "../assets/svg/website.svg"
import ProfileCard from "../components/ProfileCard";
import users from "../assets/users"
import CustomHR from "../components/CustomHR";


const Home = () => {
  return (
  <>
    <section id="about" className="container home-page bg-white">
        <div className="about">
          <h2 className="about-heading mb-1 mt-1">About The Conference</h2>
          <div className="home-about-content">
            <p className="text1">Emerging Electronics and Automation (E2A) 2022 is the 2<sup>nd</sup> annual International Conference organized by the Department of Electronics and Instrumentation Engineering at NIT Silchar, Assam. E2A 2022 is scheduled to be held hybrid between 16th and 18th December 2022.</p>

            <div className="mtb-2" />

            <p className="text1">This conference focuses on trending research and product outcomes in the domain of control and robotics, signal processing, communication systems, sensors and instrumentation, MEMS and VLSI, AI and soft computing. E2A 2022 will pave a common platform for the academicians, researchers, industrial players and budding research scholars to discuss their results, innovations, challenges encountered during research and concerns with peers and update their knowledge by interacting with leading researchers of respective domains. It offers a great opportunity for them to network together, present research progress and addresses new challenges. This conference promises to provide knowledge enriching keynote lectures to the participants by world-renowned researchers in the relevant thematic areas.</p>
          </div>

          <div className="mtb-2" />

          <p className="text1 red">It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series (<a className="link" href="https://www.springer.com/series/7818" target="_blank" rel="noreferrer">https://www.springer.com/series/7818</a>). For detailed instructions for author and editors of conference proceedings, kindly visit the following link: (<a className="link" href="https://www.springer.com/us/authors-editors/conference-proceedings" target="_blank" rel="noreferrer">https://www.springer.com/us/authors-editors/conference-proceedings</a>). Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.</p>
        </div>

        <div className="mlr-2" />

        <div className="datetime">
          <div className="mb-3">
            <div className="mb-1">
              <img src={location} alt="location" />
              <h4 className="ml-1">Venue</h4> 
            </div>
            <p>National Institute of Technology Silchar</p>
          </div>
          <div className="mb-3">
            <div className="mb-1">
              <img src={time} alt="location" />
              <h4 className="ml-1">Date</h4> 
            </div>
            <p>16<sup>th</sup> - 18<sup>th</sup> December 2022</p>
          </div>
          <div className="mb-3">
            <div className="mb-1">
              <img src={meetingRoom} alt="location" />
              <h4 className="ml-1">Mode</h4>
            </div>
            <p>Hybrid</p>
          </div>
          <div className="mb-3">
            <div className="mb-1">
              <img src={website} alt="website" />
              <h4 className="ml-1">Previous Edition</h4>
            </div>
            <p>
              <a className="e2a-link" href="https://e2a.nits.ac.in">e2a2021</a>
            </p>
          </div>
        </div>
    </section>

    {/* Spnosors */}

    <section className="text-center sponsors container">
      <h3 className="heading_h3 mb-1">Technical Co-Sponsor</h3>
        <img className="logo2" src="/logos/logo_springer.jpg" alt="" />
      {/* <CustomHR color="#626E75" /> */}
      <div className="mb-3" />
      {/* <div className="container flex-col pb-4">
        <h5 className="heading_h5 mb-1">Technical Co-Sponsor</h5>
        <img className="logo2" src="/logos/logo_springer.jpg" alt="" />
      </div> */}
      {/* <div className="container flex-col pb-4">
        <h5 className="heading_h5 mb-1">Other Sponsors</h5>
        <span className='red-text'>To be updated soon...</span>
      </div> */}
    </section>
    {/* Keynote Speakers */}

    <section className="keynote-speakers pt-4">
      <h3 className="heading_h3">Key Note Speakers</h3>
      <p className="mt-2 mb-1">Here are our Key note Speakers</p>
      <CustomHR color="#777" />
      <div className="mb-3" />
      <div className="user-container pb-4">
        {/* {users.map((user, i) => {
          const props = {
            img: user.img,
            name: user.name,
            bio: user.bio,
            designation: user.designation
          }
          return (
            <ProfileCard key={i} {...props} />
          )
        })} */}
        <span className='red-text'>To be updated soon...</span>
      </div>
    </section>
  </>
  );
};

export default Home;
