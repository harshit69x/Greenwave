import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Header from "./components/Header";
import Features from "./components/Features";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Content from "./components/content";
import React from 'react'; // Import React
import { Link } from "react-scroll";

const menuItems = [{
  id:1,
  title:"features"
},{
  id:2,
  title:"services"
},{
  id:3,
  title:"contact"
},]
function App() {
  return (
    <>
      <Header />
      <Home/>
      <Content/>
      <Features />
      <Gallery/>
      <Services/>
      <ContactUs/>
    </>
  );
}

export default App;
