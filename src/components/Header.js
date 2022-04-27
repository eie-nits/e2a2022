import React from 'react'

const navItems = [
  {
    pathname: "/",
    name: "Home",
  },
  {
    pathname: "/about",
    name: "About",
  },
  {
    pathname: "/registration",
    name: "Registration",
  },
  {
    pathname: "/call-for-papers",
    name: "Call For Papers",
  },
  {
    pathname: "/program",
    name: "Program",
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
    pathname: "/contact-us",
    name: "Contact Us",
  },
]

const Header = () => {
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) setScrolled(true);
    else setScrolled(false);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  console.log(window.location.pathname)

  return (
    <>
        <div className="header">
          <div className={isScrolled ? "moved nav-bar" : "nav-bar"}>
            <div className="logo">
              <img src="/logos/nit-white-logo.png" alt="" className="nit-logo" />
            </div>
            <div className="links">
            {
              navItems.map((item, i) => (
                <div key={i} className={item.pathname == window.location.pathname ? "nav-btn-box active-btn" : "nav-btn-box"}>
                  <a href={item.pathname} className="nav-btn">{item.name}</a>
                </div>
              ))
            }
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