import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="container section" id="aboutMe">
          <center className="sectionTitle">ABOUT ME</center>
          <hr />
          <p className="subSection">
            My name is Emily Bossiere and I am recent graduate of UC Merced
            where I studied Computer Science and Engineering. I am currently
            seeking a web development position to apply my skills and gain more
            experience in JavaScript, HTML, CSS, React.
          </p>
          <p className="subSection">
            When I'm not working, I enjoy hanging out with my friends, playing
            my favorite video games, and trying out new baking and cooking
            recipes.
          </p>
        </div>
      </div>
    );
  }
}
