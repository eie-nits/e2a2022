import React from "react";
import Header from "../components/Header";
import "../css/global.css";
import "../css/home.css"
import location from "../assets/svg/location.svg"
import time from "../assets/svg/time.svg"
import meetingRoom from "../assets/svg/meeting-room.svg"
import ProfileCard from "../components/ProfileCard";
import users from "../assets/users"


const Home = () => {
  return (
  <>
    <Header />
    <section className="container home-page">
        <div className="about">
          <h2 className="about-heading mb-1">About The Conference</h2>
          <div className="home-about-content">
            <p className="text1">Emerging Electronics and Automation (E2A) 2021 is the First annual International Conference organized by the Department of Electronics and Instrumentation Engineering at NIT Silchar, Assam. E2A 2021 is scheduled to be held online for three days between 17th and 19th December 2021.</p>

            <div className="mtb-2" />

            <p className="text1">This conference focuses on trending research and product outcomes in the domain of control and robotics, signal processing, communication systems, sensors and instrumentation, MEMS and VLSI, AI and soft computing. E2A 2021 will pave a common platform for the academicians.</p>
          </div>
        </div>

        <div className="mlr-2" />

        <div className="datetime">
          <div className="mb-2">
            <div className="mb-1">
              <img src={location} alt="location" />
              <h4 className="ml-1">Venue</h4> 
            </div>
            <p>National Institute Of Technology, Silchar <br />NIT Road, Fakiratilla, Silchar, Assam 788010</p>
          </div>
          <div className="mb-2">
            <div className="mb-1">
              <img src={time} alt="location" />
              <h4 className="ml-1">Date</h4> 
            </div>
            <p>21-22, April 2022</p>
          </div>
          <div className="mb-2">
            <div className="mb-1">
              <img src={meetingRoom} alt="location" />
              <h4 className="ml-1">Mode</h4>
            </div>
            <p>Online & Offline</p>
          </div>
        </div>
    </section>

    {/* Keynote Speakers */}

    <section className="keynote-speakers pt-4">
      <h3>Key Note Speakers</h3>
      <p className="mtb-1">Here are our Key note Speakers</p>
      <div className="user-container">
        {users.map((user, i) => {
          const props = {
            img: user.img,
            name: user.name,
            bio: user.bio,
            designation: user.designation
          }
          return (
            <ProfileCard key={i} {...props} />
          )
        })}
      </div>
    </section>
  </>
  );
};

export default Home;
