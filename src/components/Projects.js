import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tictactoe from "../media/tictactoe.png";
import Colorguess from "../media/colorguess.png";
import Grabbag from "../media/grabbag.png";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="container section" id="projects">
          <center className="sectionTitle">HIGHLIGHTED PROJECTS</center>
          <hr />
          <Container>
            <Row>
              <Col className="projectItem">
                <div
                  className="projContainer"
                  style={{ backgroundImage: `url(${Tictactoe})` }}
                >
                  <div className="overlay">
                    <div className="items" />
                    <div className="items head">
                      <p>Tic Tac Toe</p>
                      <hr className="hrr" />
                    </div>
                    <div className="items cap">
                      <p className="new">
                        A simple tic tac toe game created using JavaScript,
                        HTML, CSS, and Bootstrap. Features user vs. user
                        functionality, a responsive layout, and undo/new game
                        buttons.
                      </p>
                      <p className="projLink">
                        <a
                          href="https://emilybossiere.github.io/tic-tac-toe-js/"
                          target="h"
                        >
                          demo
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/emilybossiere/tic-tac-toe-js"
                          target="h"
                        >
                          repository
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="projectItem">
                <div
                  className="projContainer"
                  style={{ backgroundImage: `url(${Grabbag})` }}
                >
                  <div className="overlay">
                    <div className="items" />
                    <div className="items head">
                      <p>Grab Bag</p>
                      <hr className="hrr" />
                    </div>
                    <div className="items cap">
                      <p>
                        Using iFixit.com’s API, created a “grab bag” for users
                        to search for devices they own and associate them with
                        their current browser session. Users can add and remove
                        devices from their bag.
                      </p>
                      <p className="projLink">
                        <a
                          href="https://emilybossiere.github.io/GrabBag/"
                          target="g"
                        >
                          demo
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/emilybossiere/GrabBag"
                          target="f"
                        >
                          repository
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="projectItem">
                <div
                  className="projContainer"
                  style={{ backgroundImage: `url(${Colorguess})` }}
                >
                  <div className="overlay">
                    <div className="items" />
                    <div className="items head">
                      <p>Color Guessing Game</p>
                      <hr className="hrr" />
                    </div>
                    <div className="items cap">
                      <p className="new">
                        A game that generates a randon RBG value with 3 or 6
                        different color blocks with which to match the value
                        given.
                      </p>
                      <p className="projLink">
                        <a
                          href="https://emilybossiere.github.io/Color-Guessing-Game/"
                          target="c"
                        >
                          demo
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/emilybossiere/Color-Guessing-Game"
                          target="d"
                        >
                          repository
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <p className="subSection">
            For a complete list of my projects, please visit my{" "}
            <a
              className="cleanLink"
              href="http://github.com/emilybossiere"
              target="e"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
