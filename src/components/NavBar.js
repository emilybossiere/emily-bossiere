import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends React.Component {
  state = {
    color: "transparent"
  };

  listenScroll = e => {
    if (e.target.scrollingElement.scrollTop) {
      this.setState({
        color: "#ccb2be"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScroll);
  }

  render() {
    const { color } = this.state;

    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ background: color, transition: "500ms" }}
          id="mainNavbar"
          fixed="top"
          className="navbar navbar-dark py-0"
        >
          <Navbar.Brand className="navbar-brand">
            EMILY <span className="lastName">BOSSIERE</span>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              className="icon"
              href="http://github.com/emilybossiere"
              target="a"
            >
              <i
                className="fab fa-github"
                style={{ cursor: "pointer", color: "black" }}
              />
            </Nav.Link>
            <Nav.Link
              className="icon"
              href="https://www.linkedin.com/in/emilybossiere/"
              target="b"
            >
              <i
                className="fab fa-linkedin"
                style={{ cursor: "pointer", color: "black" }}
              />
            </Nav.Link>
            <Nav.Link className="icon" href="mailto:emilybossiere@gmail.com">
              <i
                className="fas fa-envelope"
                style={{ cursor: "pointer", color: "black" }}
              />
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
