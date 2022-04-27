import React from 'react';
import '../css/commitee.css';
import members from "../assets/members"

const Committee = () => {
  return (
    <>
      <div className='main-content'>
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
        </div>
        <div className='list'>
          <h1 style={{ marginBottom: '-5px' }}>Convenor</h1>

          <h3>Dr. Manas Kumar Bera, NIT Silchar</h3>
        </div>

        <div className='list'>
          <h1>Organizing Chairs/Secretary</h1>

          <h3>Dr. Rajdeep Dasgupta, NIT Silchar</h3>
          <h3>Dr. Lalu Seban, NIT Silchar</h3>
          <h3>Dr. S.K. Pandey, NIT Silchar</h3>
          <h3>Dr. V.C. Pal, NIT Silchar</h3>
        </div>

        <div className='list'>
          <h1>Technical Program Chairs</h1>
          <h3>
            <strong>Control & Robotics: </strong> Dr. V.C. Pal
          </h3>
          <h3>
            <strong>Signal Processing: </strong>Dr. Shankar K.
          </h3>
          <h3>
            <strong>Communication System: </strong>Dr. Ranjay Hazra
          </h3>
          <h3>
            <strong>MEMS & VLSI: </strong>Dr. S.K. Pandey
          </h3>
          <h3>
            <strong>AI & Soft Computing: </strong>Dr. Lalu Seban
          </h3>
          <h3>
            <strong>Sensors & Instrumentation: </strong>Dr. R. Dasgupta
          </h3>
          <h3>
            <strong>Energy, Power Systems & Power Electronics: </strong>Dr. M.
            Khanra
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
