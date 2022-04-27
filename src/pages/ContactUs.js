import React from 'react'
import "../css/contactUs.css";

const ContactUs = () => {
  return (
    <div className="container ptb-4">
      <div className="card">
        <div className="members">
          <h3>Got a query?</h3>
          <p className="mt-1 mb-4">Contact or send your query</p>
          <ul className="ml-3">
            <li className="member mt-3">
              <p>Dr. Shivendra Kumar Pandey</p>
              <p className="mt-1">Assistant Professor, E&I Dept., NIT Silchar</p>
              <p className="mt-1">Phone: +91-8011-886745 </p>
              <p className="mt-1">Email:  <a href="mailto:skpandey@ei.nits.ac.in" target="_blank" rel="noreferrer">skpandey@ei.nits.ac.in</a></p>
            </li>
            <li className="member mt-4">
              <p>Dr. Lalu Seban</p>
              <p className="mt-1">Assistant Professor, E&I Dept., NIT Silchar</p>
              <p className="mt-1">Phone: +91-9425472154 </p>
              <p className="mt-1">Email: <a href="mailto:seban@ei.nits.ac.in" target="_blank" rel="noreferrer">seban@ei.nits.ac.in</a></p>
            </li>
            <li className="member mt-4">
              <p className="mt-1">Email: <a href="mailto:e2a2022@nits.ac.in" target="_blank" rel="noreferrer">e2a2022@nits.ac.in</a></p>
            </li>
          </ul>
        </div>
            <form>
              <label htmlFor="name" className="mb-1">Your Name</label>
              <input id="name" type="text" placeholder="Your Name" />
              <div className="mtb-2" />
              <label htmlFor="email" className="mb-1">Mail</label>
              <input id="email" type="text" placeholder="Enter your email" />
              <div className="mtb-2" />
              <label htmlFor="message" className="mb-1">Message</label>
              <textarea rows="4" id="message" type="text" placeholder="Type your message" />
              <button className="mt-3 mb-1" type="submit">Send</button>
            </form>
      </div>
    </div>
  )
}

export default ContactUs