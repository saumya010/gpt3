import React from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Header,
  Footer,
  Blog,
  Features,
  About,
  Possibility,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <About />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
