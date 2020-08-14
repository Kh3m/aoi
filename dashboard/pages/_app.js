import React from "react";
import App, { Container } from "next/app";
import Layout from "../components/Layout";
import configureProduct from "../hooks/store/reducers/product";

class MyApp extends App {
  render() {
    // configure store
    configureProduct();

    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
