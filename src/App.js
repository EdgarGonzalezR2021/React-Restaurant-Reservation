import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Menu from "./components/Menu";
import Booktable from "./components/Booktable";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Body />

      <main id="main">
        <About />
        <Menu />
        <Booktable />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <div id="preloader"></div>
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}
