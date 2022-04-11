import React from "react";
import Header from "../components/Header";
import "../css/callForPapers.css";
import "../javascript/call-For-Papers"

const CallForPapers = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="paper-heading">
          <span className="heading-text">
            Call For <span className="red-text">Regular Papers</span>
          </span>
          <div className="line"></div>
        </div>
        <div className="paper-list">
          <div className="call-des">
            First International Conference on Emerging Electronics & Automation
            (E2A) will be organized by Department of Electronics and
            Instrumentation Engineering, NIT Silchar from 7th - 9th December
            2022. Prospective authors are requested to submit their original
            work for publication in the proceedings of E2A. The thrust areas are
            as follows but not limited to this.
          </div>
          <div className="list-accordion">
            <div className="list-accordian-item">
              <div className="list-heading">Control And Robotics</div>
              <div className="list-items">
                <ol>
                  <li>Linear Control</li>
                  <li>Non-linear Control</li>
                  <li>Robust Control</li>
                  <li>Decentralized Control</li>
                  <li>Robotics</li>
                  <li>Industrial Automation</li>
                  <li>Stability Analysis</li>
                  <li>Fractional Order Control</li>
                </ol>
              </div>
            </div>
            <div className="list-accordian-item">
              <div className="list-heading">Signal Processing</div>
              <div className="list-items">
                <ol>
                  <li>Image and Video Signal Processing</li>
                  <li>Multimedia Applications</li>
                  <li>Signal Processing for Big Data</li>
                  <li>Speech and Audio Processing</li>
                  <li>Computer Vision</li>
                  <li>Biomedical Applications, Bio-Signal Analysis</li>
                  <li>Language Identification</li>
                  <li>Information Forensics & Security</li>
                  <li>Sparse Signal Processing</li>
                  <li>Time-Frequency Analysis</li>
                  <li>Active Noise Control</li>
                  <li>Adapative Signal Processing</li>
                  <li>Array Signal Processing</li>
                </ol>
              </div>
            </div>
            <div className="list-accordian-item">
              <div className="list-heading">Communication Systems</div>
              <div className="list-items">
                <ol>
                  <li>5G &amp; beyond Communication</li>
                  <li>IoT &amp; IIoT Communication</li>
                  <li>UDN</li>
                  <li>MIMO</li>
                  <li>D2D</li>
                  <li>RF & Microwave</li>
                  <li>Antennas</li>
                  <li>THz Communication</li>
                  <li>Small Cells</li>
                  <li>mmWave communication</li>
                  <li>Quantum Communication</li>
                  <li>Radar Systems </li>
                  <li>Optical Communication etc.</li>
                </ol>
              </div>
            </div>
            <div className="list-accordian-item">
              <div className="list-heading">Sensors and Instrumentation</div>
              <div className="list-items">
                <ol>
                  <li>Methods of Measurements</li>
                  <li>
                    Electromagnetics, Digital Holography, Laser based
                    Instrumentation for Measurement and Monitoring systems
                  </li>
                  <li>Sensors and Sensing Technology</li>
                  <li>Non-Destructive Testing</li>
                  <li>Smart and Intelligent Sensors</li>
                  <li>
                    Biomedical Sensors, Signal Analysis & Health Monitoring
                    Applications
                  </li>
                  <li>IoT Applications in Instrumentation</li>
                  <li>Sensors& Sensor Data Fusion</li>
                  <li>Robotics & Mechatronics Systems</li>
                  <li>Process Control & Instrumentation.</li>
                </ol>
              </div>
            </div>
            <div className="list-accordian-item">
              <div className="list-heading">MEMS &amp; VLSI</div>
              <div className="list-items">
                <ol>
                  <li>MEMS, Energy Harvesters</li>
                  <li>
                    Nanotechnology, Renewable Energy, Nano Lithography Processes
                  </li>
                  <li>Solar Cells, Photonics</li>
                  <li>FinFet Technology</li>
                  <li>Memory Devices</li>
                  <li>VLSI Device Modelling</li>
                  <li>Advanced Materials, Characterization and Applications.</li>
                </ol>
              </div>
            </div>
            <div className="list-accordian-item">
              <div className="list-heading">AI &amp; Soft Computing</div>
              <div className="list-items">
                <ol>
                  <li>AI and Machine Learning</li>
                  <li>CAD System</li>
                  <li>Deep Learning Applications </li>
                  <li>AI in Healthcare</li>
                  <li>Pattern Recognition</li>
                  <li>Biometrics</li>
                  <li>Evolutionary Computing</li>
                  <li>Hybrid Intelligent Systems</li>
                  <li>E-commerce, E-medicine</li>
                  <li>Morphic Computing</li>
                  <li>Pervasive computing and Ambient Intelligence</li>
                  <li>Data Visualization.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CallForPapers;
