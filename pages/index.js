import Head from "next/head";
import { Component } from "react";
import { attributes } from "../content/home.md";
import content from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title } = attributes;
    console.log(attributes, content.html);
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div>{title}</div>
      </>
    );
  }
}
