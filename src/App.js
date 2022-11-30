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

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Blog />
      <About />
      <Brand />
      <Cta />
      <Possibility />
      <Features />
      <Footer />
    </>
  );
};

export default App;
