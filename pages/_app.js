import React from "react";
import App from "next/app";
import styled from "styled-components";
import "C:/nextjs/cms-template/pages/reset.css";

import Layout from "../components/layout/index.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
