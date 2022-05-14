import React from 'react';
import '../css/commitee.css';
import members from "../assets/members"

const Committee = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <div className='main-content' ref={container}>
        <div className='paper-heading'>
          <span className='red-text'>COMMITTEE MEMBERS</span>
          <div className='line'></div>
        </div>

        <div className='list'>
          <h1 style={{ marginBottom: '-5px' }}>Patron</h1>
          <h3>Prof. Sivaji Bandyopadhyay, Director, NIT Silchar</h3>
        </div>
        <div className='list'>
          <h1 style={{ marginBottom: '-5px' }}>Honorary Chair</h1>

          <h3>
            Prof. Jagannathan Sarangapani, Missouri Institute of Science and
            Technology, USA
          </h3>
        </div>

        <div className='list'>
          <h1 style={{ marginBottom: '-5px' }}>General Chair</h1>

          <h3>Prof. Moncef Gabbouj, Tampere University, Finland</h3>
          <h3>Dr. Ranjay Hazra, NIT Silchar</h3>
          <h3>Prof. Quan Xin Zhen, Hunan Normal University, China</h3>
          <h3>Prof. Shyam Sudhir Pandey, Kyushu Institute of Technology, Japan</h3>
        </div>
        <div className='list'>
          <h1 style={{ marginBottom: '-5px' }}>Convenor</h1>

          <h3>Dr. Manas Kumar Bera, NIT Silchar</h3>
        </div>

        <div className='list'>
          <h1>Organizing Chairs/Secretary</h1>

          <h3>Dr. Rajdeep Dasgupta, NIT Silchar</h3>
          <h3>Dr. Lalu Seban, NIT Silchar</h3>
          <h3>Dr. Shivendra Kumar Pandey, NIT Silchar</h3>
          <h3>Dr. Vipin Chandra Pal, NIT Silchar</h3>
        </div>

        <div className='list'>
          <h1>Technical Program Chairs</h1>
          <h3>
            <strong>Control & Robotics: </strong> Dr. Vipin Chandra Pal
          </h3>
          <h3>
            <strong>Signal Processing: </strong>Dr. Shankar K.
          </h3>
          <h3>
            <strong>Communication System: </strong>Dr. Ranjay Hazra
          </h3>
          <h3>
            <strong>MEMS & VLSI: </strong>Dr. Shivendra Kumar Pandey
          </h3>
          <h3>
            <strong>AI & Soft Computing: </strong>Dr. Lalu Seban
          </h3>
          <h3>
            <strong>Sensors & Instrumentation: </strong>Dr. Rajdeep Dasgupta
          </h3>
          <h3>
            <strong>Energy, Power Systems & Power Electronics: </strong>Dr. Munmun
            Khanra
          </h3>
        </div>

        <div className='list'>
          <h1>Publication Chairs</h1>
          <h3>
            Dr. Rajdeep Dasgupta, NIT Silchar
          </h3>
          <h3>
            Dr. Munmun Khanra
          </h3>
          <h3>
            Dr. Arun Kumar Sunaniya, NIT Silchar
          </h3>
          <h3>
            Dr. Wasim Arif, NIT Silchar
          </h3>
        </div>

        <div className='list'>
          <h1>Publicity Chairs</h1>
          <h3>
            Dr. Shahedul Haque Laskar, NIT Silchar
          </h3>
          <h3>
            Dr. Shankar K., NIT Silchar
          </h3>
          <h3>
            Dr. Rajeeb Dey, NIT Silchar
          </h3>
          <h3>
            Dr. Ripon Patgiri, NIT Silchar
          </h3>
        </div>

        <div className='list'>
          <h1>Hospitality Chairs</h1>
          <h3>
            Dr. Jupitara Hazarika, NIT Silchar
          </h3>
          <h3>
            Dr. Sudarsan Sahoo, NIT Silchar
          </h3>
          <h3>
            Dr. Anup Kumar Sharma, NIT Silchar
          </h3>
          <h3>
            Dr. Bipul Das, NIT Silchar
          </h3>
        </div>

        <div className='list'>
          <h1>Finance Chairs</h1>
          <h3>
            Dr. Mansa Kumar Bera, NIT Silchar
          </h3>
          <h3>
            Dr. Shivendra Kumar Pandey, NIT Silchar
          </h3>
          <h3>
            Dr. Dipankar Bhanja, NIT Silchar
          </h3>
          <h3>
            Dr. Pulok Nath, NIT Silchar
          </h3>
        </div>

        <div className='list'>
          <h1>Registration Committee</h1>
          <h3>
            Dr. Mansa Kumar Bera, NIT Silchar
          </h3>
          <h3>
            Dr. Koena Mukherjee, NIT Silchar
          </h3>
          <h3>
            Dr. Shankar K., NIT Silchar
          </h3>
          <h3>
            Dr. Anup Kumar Sharma, NIT Silchar
          </h3>
        </div>

        <div className='list'>
          <h1>Website & Online Platform Commitee</h1>
          <h3>
            Dr. Lalu Seban, NIT Silchar
          </h3>
          <h3>
            Dr. Ranjay Razra, NIT Silchar
          </h3>
          <h3>
            Dr. Sudipta Chakraborty, NIT Silchar
          </h3>
          <h3>
            Dr. Naresh Babu, NIT Silchar
          </h3>
        </div>

        <div className='list'>
          <h1>Website & Online Platform Commitee</h1>
          <h3>
            Dr. Manas Kumar Bera, NIT Silchar
          </h3>
          <h3>
            Dr. Bipul Das, NIT Silchar
          </h3>
          <h3>
            Dr. Shivendra Kumar Pandey, NIT Silchar
          </h3>
        </div>

        <div className='list'>
          <h1 className="mtb-2">Technical Program Committee </h1>
          <table className='committeeTable mb-4'>
            <tr>
              <th>S. No.</th>
              <th>Name of TPC Member</th>
              <th>Affiliation</th>
            </tr>
            {
              members.map((el, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{el.member}</td>
                  <td>{el.affiliation}</td>
                </tr>
              ))
            }
          </table>
        </div>
      </div>
    </>
  );
};

export default Committee;
