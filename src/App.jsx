import React from "react";
import Navbar from "./components/Navbar";
import PurpleBar from "./components/PurpleBar";
import About from "./pages/About";
import Home from "./pages/Home";
import PetCare from "./pages/PetCare";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

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
    case '/Contact':
      page = <Contact />
      break
    default:
      page = <Home />
      break
  }
  return (
    <>
      <Navbar />  
      <PurpleBar />
      {page}
      <Footer />
    </>
  );
}

export default App;
