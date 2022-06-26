/* eslint-disable react/prop-types */
import React from 'react'

const Footer = () => {
  console.log(window.location.pathname)
  const isHome = window.location.pathname == "/";
  return (
    <footer style={{ backgroundColor: isHome ? "#fff" : "#eee", color: "#333"}}>
      <p style={{margin: "0 auto", textAlign: "center", fontSize: "13px"}}>Copyright &copy; E2A 2022. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer