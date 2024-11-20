import React from "react";
import "./Blogs.css";
import { certificates } from "../../../utils/data";

const Blogs = () => {
  return (
    <>
      <section className="certificates-container">
        <div className="blogs-info">
          <h6>Certificates📑</h6>
          <div className="blogs-info-content">
            <div className="headerr">
              <h7 style={{ marginLeft: "20px" }}>HackerRank</h7>
              <div className="repo">
                <a
                  href="https://www.hackerrank.com/profile/r2001piriya"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/Assets/images/hackerrank.png"
                    }
                    alt="hackerrank"
                    title="Click to visit my HackerRank profile"
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>

            <ul>
              {certificates
                .filter((certificate) => certificate.category === "HackerRank")
                .map((certificate) => (
                  <li key={certificate.name}>
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      {certificate.name}
                    </a>
                  </li>
                ))}
            </ul>
            <div className="headerr">
              <h7 style={{ marginLeft: "20px" }}>Coursera</h7>
              <div className="repo">
                <a
                  href="https://www.coursera.org/user/46bc8fc67ee2a0df3ac50aacdb035dc9"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/Assets/images/cousera1.png"
                      }
                      title="Click to visit my Coursera profile"
                      alt="hackerrank"
                    />
                  </div>
                </a>
              </div>
            </div>

            <ul>
              {certificates
                .filter((certificate) => certificate.category === "Coursera")
                .map((certificate) => (
                  <li key={certificate.name}>
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      {certificate.name}
                    </a>
                  </li>
                ))}
            </ul>
            <div className="headerr">
              <h7 style={{ marginLeft: "20px" }}>SoloLearn</h7>
              <div className="repo">
                <a
                  href="https://www.sololearn.com/en/profile/26436535"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/Assets/images/sololearn.png"
                    }
                    title="Click to visit my SoloLearn profile"
                    alt="hackerrank"
                  />
                </a>
              </div>
            </div>

            <ul>
              {certificates
                .filter((certificate) => certificate.category === "SoloLearn")
                .map((certificate) => (
                  <li key={certificate.name}>
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      {certificate.name}
                    </a>
                  </li>
                ))}
            </ul>
            <div className="headerr">
              <h7 style={{ marginLeft: "20px" }}>Alison</h7>
              <div className="repo">
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/alison.png"}
                  alt="hackerrank"
                />
              </div>
            </div>

            <ul>
              {certificates
                .filter((certificate) => certificate.category === "Alison")
                .map((certificate) => (
                  <li key={certificate.name}>
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      {certificate.name}
                    </a>
                  </li>
                ))}
            </ul>

            <div className="headerr">
              <h7 style={{ marginLeft: "20px" }}>CODL UOM</h7>
              <div className="repo">
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/uom.png"}
                  alt="hackerrank"
                />
              </div>
            </div>

            <ul>
              {certificates
                .filter((certificate) => certificate.category === "CODL UOM")
                .map((certificate) => (
                  <li key={certificate.name}>
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      {certificate.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
