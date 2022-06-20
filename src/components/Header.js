import React from 'react'
import "../assets/css/header.css"
import DropDown from "./DropDown";

const navItems = [
  {
    pathname: "/",
    name: "Home",
  },
  {
    pathname: "/about",
    name: "About us",
  },
  {
    // pathname: "/registration",
    name: "For Authors",
    subItems: [
      {
        name: "Registration",
        pathname: "/author-registration"
      },
      {
        name: "Regular Paper Submission",
        pathname: "/author-regular-paper-submission"
      },
    ]
  },
  {
    pathname: "/call-for-papers",
    name: "Call for Papers",
  },
  {
    // pathname: "/program",
    name: "Program",
    subItems: [
      {
        name: "Brochure",
        pathname: "/program-brochure"
      },
      {
        name: "Schedule",
        pathname: "/program-schedule"
      },
    ]
  },
  {
    pathname: "/important-dates",
    name: "Important Dates",
  },
  {
    pathname: "/comittee",
    name: "Comittee",
  },
  {
    pathname: "/sponsorship",
    name: "Sponsorship",
  },
  {
    pathname: "/contact-us",
    name: "Contact us",
  },
]

const Header = () => {
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) setScrolled(true);
    else setScrolled(false);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
    <div className="header">
      <nav className={isScrolled ? "moved nav-bar" : "nav-bar"}>
        <div className="logo">
          <img src="/logos/logo.png" alt="" className="nit-logo" />
        </div>
        <div className="links">
        {
            navItems.map((item, i) => 
            (item.subItems && item.subItems.length > 0 ) ? (
              <div key={i} >
                <DropDown subItems={item.subItems}>
                  <a className="nav-btn">{item.name}</a>
                </DropDown>
              </div>
            ) : 
            (
              <div key={i} className={item.pathname == window.location.pathname ? "nav-btn-box active-btn" : "nav-btn-box"}>
                <a href={item.pathname==="/about" ? "/#about" : item.pathname} className="nav-btn">{item.name}</a>
              </div>
            ))
          }
        </div>
      </nav>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
              <ul id="menu">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <a href={item.pathname==="/about" ? "/#about" : item.pathname}>{item.name}</a>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      <div>
      <div className="content-container">
        <div className="heading">
          INTERNATIONAL CONFERENCE{" "}
          <span className="red-text">ON EMERGING ELECTRONICS</span> AND
          AUTOMATION
        </div>
        <div className="date">
          16<sup>th</sup> - 18<sup>th</sup> Dec, <span className="red-text">2022</span>
        </div>
        <div className="organised-by">
          Organised by <br /> Department Of Electronics and Instrumentation
          Engineering
        </div>
        <div className="logo log-15x mt-2">
            <img src="/logos/logo2.png" alt="" className="nit-logo" />
          </div>
        <div className="college-name mt-1">
          NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR
        </div>
        <div>
          <h6 className="organised-by bold mb-1">Technically Co-Sponsored by</h6>
          <img className="logo2" src="/logos/logo_springer.jpg" alt="" />
        </div>
      </div>
      </div>
  </div>
  <div>

  {/* mobile nav */}
  </div>
</>
  )
}

export default Header