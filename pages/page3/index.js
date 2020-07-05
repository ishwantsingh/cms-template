import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export default class Home extends Component {
  render() {
    return <Container>page3</Container>;
  }
}
