import React from "react";
import Nav from "./components/pages/Nav.jsx";
import Hero from "./components/pages/Hero.jsx";
import Short from "./components/pages/Short.jsx";
import Body from "./components/pages/Body.jsx";
import BodyBottom from "./components/pages/BodyBottom";
import Footer from "./components/pages/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Short />
      <Body />
      <BodyBottom />
      <Footer />
    </div>
  );
}

export default App;
