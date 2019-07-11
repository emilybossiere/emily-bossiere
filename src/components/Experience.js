import React from "react";

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <div className="container section" id="experience">
          <center className="sectionTitle">EXPERIENCE</center>
          <hr />
          <div className="subSection">
            <p className="employer">
              Web Developer / Marketing Communications for Enrollment Management
            </p>
            <p className="employmentDetails">
              October 2018 - Present, Merced, CA
            </p>
            <div className="jobDescr">
              <ul>
                <li>
                  {" "}
                  Create and design content for the UC Merced's Student Affairs
                  and Housing & Residence Life websites using Drupal, HTML, and
                  CSS{" "}
                </li>
                <li>
                  {" "}
                  Work directly with the Vice Chancellor for Student Affairs to
                  update the website to the department’s specifications
                </li>
                <li>
                  Take given content and ideas and implement them into
                  responsive, efficient, and clean web pages
                </li>
              </ul>
            </div>
            <br />
            <p className="employer">IT Intern / NBCUniversal Media</p>
            <p className="employmentDetails">
              May 2018 - August 2018, San Diego, CA
            </p>
            <div className="jobDescr">
              <ul>
                <li>
                  Created and edited a knowledge base website, in HTML, for
                  FAQ’s, general information, tools, etc. for NBC 7 employees
                </li>
                <li>
                  Set up an IP address management tool website and manually
                  entered the necessary prefixes, IP addresses, VLANs, and
                  devices for data management
                </li>
                <li>
                  Completed technical writing tasks on how-to’s for various
                  procedures and devices used by the news and production teams
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
