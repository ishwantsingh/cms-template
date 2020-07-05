import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 15%;
  text-align: center;
  align-content: center;
  justify-self: flex-end;
  justify-content: space-evenly;
  text-decoration: none;
  font-size: 1.1rem;
  a {
    text-decoration: none !important;
    color: black;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/page1"}>
          <a>Page 1</a>
        </Link>
        <Link href={"/page2"}>
          <a>Page 2</a>
        </Link>
        <Link href={"/page3"}>
          <a>Page 3</a>
        </Link>
        <Link href={"/page4"}>
          <a>Page 4</a>
        </Link>
      </Nav>
      <Div>{children}</Div>
    </Container>
  );
};

export default Layout;
