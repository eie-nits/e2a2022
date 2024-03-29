import React from 'react'

const Header = () => {
  return (
    <>
        <div className="header">
        <div className="nav-bar">
          <div className="logo">
            <img src="/logos/nit-white-logo.png" alt="" className="nit-logo" />
          </div>
          <div className="links" id="links">
            <div className="nav-btn-box">
              <a href="/" className="nav-btn home-btn">
                Home
              </a>
            </div>
            <div className="nav-btn-box">
              <a href="#" className="nav-btn about-btn">
                About
              </a>
            </div>
            <div className="nav-btn-box">
              <a href="#" className="nav-btn Registration-btn">
                Registration
              </a>
            </div>
            <div className="nav-btn-box">
              <a href="/callForPapers" className="nav-btn papers-btn">
                Call For Papers
              </a>
            </div>
            <div className="nav-btn-box">
              {" "}
              <a href="#" className="nav-btn program-btn">
                Program
              </a>
            </div>
            <div className="nav-btn-box">
              <a href="#" className="nav-btn dates-btn">
                Important Dates
              </a>
            </div>
            <div className="nav-btn-box">
              <a href="/committee" className="nav-btn commitee-btn">
                Commitee
              </a>
            </div>
            <div className="nav-btn-box">
              <a href="#" className="nav-btn contact-btn">
                Contact Us
              </a>
            </div>
          </div>
          <div className="menu" id="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="heading">
          INTERNATIONAL CONFERENCE{" "}
          <span className="red-text">ON EMERGING ELECTRONICS</span> AND
          AUTOMATION
        </div>
        <div className="date">
          7th-9th Dec, <span className="red-text">2022</span>
        </div>
        <div className="organised-by">
          Organised By <br /> Department Of Electronics And Instrumentation
          Engineering
        </div>
        <div className="college-name">
          NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR
        </div>
      </div>
    </>
  )
}

export default Header