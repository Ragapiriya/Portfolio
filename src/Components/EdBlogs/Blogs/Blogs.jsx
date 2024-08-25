import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <>
      <div className="blogs-info">
        <h6>Medium Blogs</h6>
        <div className="blogs-info-content">
          <div className="header">
            <h7>Software Licenses</h7>
            <div className="medium">
              <a
                href="https://medium.com/@r2001piriya/software-licenses-688eab7ab1e5"
                rel="nonreferrer"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/medium.png"}
                  alt="medium"
                />
              </a>
            </div>
            <br></br>
            <h9>
              It is a document or an agreement that legally permits the users to
              use and distribute the software. It is given by the company or
              organization who is the owner or developer of the software
              product.
            </h9>
          </div>
          <div className="header">
            <h7>Encapsulation</h7>
            <div className="medium">
              <a
                href="https://medium.com/@r2001piriya/encapsulation-1409451b6821"
                rel="nonreferrer"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/medium.png"}
                  alt="medium"
                />
              </a>
            </div>
            <br></br>
            <h9>
              Encapsulation is a core concept in object-oriented programming
              (OOP) that plays a critical role in protecting data integrity
              within an application. By wrapping variables and methods inside a
              class, encapsulation restricts direct access from outside code,
              ensuring that data can be only accessed and modified in controlled
              ways.
            </h9>
          </div>

          <div className="header">
            <h7>Access Modifiers</h7>
            <div className="medium">
              <a
                href="https://medium.com/@r2001piriya/access-modifiers-8b3463e37e97"
                rel="nonreferrer"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/medium.png"}
                  alt="medium"
                />
              </a>
            </div>
            <br></br>
            <h9>
              As the prefix “Access” says, access modifiers limit the
              accessibility or the scope of the code. It adds extra layers of
              security to the program and restricts unauthorized access.
            </h9>
          </div>
          <div className="header">
            <h7>Method Overloading</h7>
            <div className="medium">
              <a
                href="https://medium.com/@r2001piriya/method-overloading-a718f71aadf2"
                rel="nonreferrer"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/medium.png"}
                  alt="medium"
                />
              </a>
            </div>
            <br></br>
            <h9>
              It allows us to have more than one method within the same class
              with the same name if the parameters of methods are different in
              count or data types.
            </h9>
          </div>
          <div className="header">
            <h7>Understanding Inheritance in Java</h7>
            <div className="medium">
              <a
                href="https://medium.com/@r2001piriya/understanding-inheritance-in-java-9c1df555117a"
                rel="nonreferrer"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/medium.png"}
                  alt="medium"
                />
              </a>
            </div>
            <br></br>
            <h9>
              Inheritance is a fundamental object-oriented programming concept
              that allows a class to inherit the properties and behaviors of
              another class.
            </h9>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
