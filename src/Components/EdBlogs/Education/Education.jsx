import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <>
      <section className="education-container">
 
        <div className="education-info">
          <h6>Education🎓</h6>
          <div className="education-info-content">
            <div className="uni-content">
              <div className="details">
                <div className="headerr">
                  <h7 style={{ marginLeft: "20px" }}>University of Kelaniya</h7>
                  <div className="repo">
                    <a
                      href="https://www.kln.ac.lk/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/Assets/images/uok.png"}
                        alt="hackerrank"
                        title="https://www.kln.ac.lk/"
                      />
                    </a>
                  </div>
                </div>
                <h7>2022-Present</h7>
              </div>
              <div className="details">
                <h8 className="content" style={{ marginLeft: "20px" }}>
                  BSc (Hons) in Software Engineering
                </h8>
                <h8 className="content">2022-Present</h8>
              </div>

              <h9>CGPA: 3.16</h9>
              <br />
              <h9>Domains:</h9>
              <ul>
                <li>- Net Centric Application</li>
                <li>- Data Science and Engineering Application</li>
                <li>- Business Engineering Application</li>
              </ul>
              <h9>Key Concepts:</h9>
              <ul>
                <li>-DataStructure and Algorithms (DSA)</li>
                <li>-Object Oriented Programming (OOP)</li>
              </ul>
            </div>
            <div className="school-content">
              <div className="details">
                <div className="headerr">
                  <h7 style={{ marginLeft: "20px" }}>
                    Vembadi Girls' High School/Jaffna
                  </h7>
                  <div className="repo">
                    <a href="https://vghs.lk/" rel="noreferrer" target="_blank">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/Assets/images/vembadi.png"
                        }
                        alt="hackerrank"
                        title="https://vghs.lk/"
                      />
                    </a>
                  </div>
                </div>
                <h7>2012-2020</h7>
              </div>
              <div className="details">
                <h8 style={{ marginLeft: "20px" }}>G.C.E Advanced Level</h8>
                <h8>2020</h8>
              </div>
              <h9>Z-score: 1.6995</h9>
              <br />
              <h9>Stream:Physical Science</h9>
              <ul>
                <li>Combined Mathematics: 'A'</li>
                <li>Chemistry: 'A'</li>
                <li>Physics: 'C'</li>
                <li>General English: 'A'</li>
              </ul>
              <div className="details">
                <h8 style={{ marginLeft: "20px" }}>G.C.E Ordinary Level</h8>
                <h8>2017</h8>
              </div>
              <h9>got '8A's and a 'B'</h9>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
