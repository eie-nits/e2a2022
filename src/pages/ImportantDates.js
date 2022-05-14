import React from 'react'

const ImportantDates = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <div className='main-content' ref={container}>
        <div className='paper-heading'>
          <span className='red-text'>IMPORTANT DATES FOR PAPER SUBMISSION</span>
          <div className='line'></div>
        </div>

        <ul>
          <li style={{textAlign: "start"}} className='mtb-1'>
            Paper Submission Opens: 31.05.2022
          </li>
          <li style={{textAlign: "start"}} className='mtb-1'>
            Submission Deadline: 15.08.2022
          </li>
          <li style={{textAlign: "start"}} className='mtb-1'>
            Acceptance Notification: 15.10.2022
          </li>
          <li style={{textAlign: "start"}} className='mtb-1'>
            Dealine For Final Paper: 15.11.2022
          </li>
        </ul>
        <div className="mb-4" />
      </div>
  )
}

export default ImportantDates