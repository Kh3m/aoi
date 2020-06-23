import React from "react";
import App, { Container } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import configureAuth from "../hooks/store/reducers/auth";
import Persists from "../container/Persists/Persists";

class MyApp extends App {
  
  render() {
    const { Component, pageProps } = this.props;
    configureAuth();

    return (
      <Persists>
        <Layout>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Layout>       
      </Persists>

    );
  }
}

export default MyApp;
