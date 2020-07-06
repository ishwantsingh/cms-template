import { Component } from "react";
import styled from "styled-components";

import { attributes, react, content } from "../../content/projects.md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 3.5rem;
    height: 10%;
    width: 100%;
    justify-self: flex-start;
    text-align: center;
  }
  img {
    width: 20vw;
    height: 25vw;
  }
  .project-content {
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    align-self: center;
    text-align: left;
    // border: 1px solid #cdc9c9;
    // border-radius: 6px;
  }
`;

export default class Home extends Component {
  render() {
    let { title, project } = attributes;
    console.log(attributes, react, content);
    return (
      <Container>
        <h1 className="text">{title}</h1>
        <div className="project-content">
          <div className="text">{project.title}</div>
          <img src={project.image} alt="project" />
          <div className="text">{project.body}</div>
        </div>
      </Container>
    );
  }
}
