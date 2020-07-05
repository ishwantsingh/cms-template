import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 100vh;
  .nav {
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 100%;
    text-align: center;
    align-content: center;
    justify-self: flex-end;
    text-decoration: none;
  }
`;

// const Nav = styled.nav`
//   display: flex;
//   flex-direction: column;
//   width: 15vw;
//   height: 100%;
//   text-align: center;
//   align-content: center;
//   justify-self: flex-end;
//   text-decoration: none;
// `;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <div className="nav">
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
      </div>
      <Div>{children}</Div>
    </Container>
  );
};

export default Layout;
