import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="navbar fixed-bottom">
        <div className="row footer">
          <div className="col-4 icon">
            <a href="http://github.com/emilybossiere" target="a">
              <i
                className="fab fa-github"
                style={{ cursor: "pointer", color: "black" }}
              />
            </a>
          </div>

          <div className="col-4 icon">
            <a href="https://www.linkedin.com/in/emilybossiere/" target="a">
              <i
                className="fab fa-linkedin"
                style={{ cursor: "pointer", color: "black" }}
              />
            </a>
          </div>

          <div className="col-4 icon">
            <a href="mailto:emilybossiere@gmail.com">
              <i
                className="fas fa-envelope"
                style={{ cursor: "pointer", color: "black" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
