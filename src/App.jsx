import React from "react";
import Navbar from "./components/Navbar";
import PurpleBar from "./components/PurpleBar";
import About from "./pages/About";
import Home from "./pages/Home";
import PetCare from "./pages/PetCare";

function App() {
  let page
  switch (window.location.pathname) {
    case '/':
      page = <Home />
      break
    case '/About':
      page = <About />
      break
    case '/PetCare':
      page = <PetCare />
      break
  }
  return (
    <>
      <Navbar />  
      <purpleBar />
    </>
  );
}

export default App;
