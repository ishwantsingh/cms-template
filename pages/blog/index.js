import { Component } from "react";
import styled from "styled-components";

// import { attributes } from "../../content/page3.md";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export default class Blog extends Component {
  render() {
    // let { title } = attributes;
    return (
      <Container>
        <h1>Blog</h1>
        {/* <div className="about-content">
          <div className="text">{about}</div>
        </div> */}
      </Container>
    );
  }
}
