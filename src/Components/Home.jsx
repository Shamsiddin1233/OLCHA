import { Routes, Route } from "react-router-dom";
import Cotalog from "./Catalog";
import Navbar from "./Navbar";
import Swippers from "./Swippers";
import Cardlist from "./Obj-Cards/Card-list";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Cotalog />
      <Swippers />
      <Cardlist />
      <Footer/>  
    </>
  );    
}
export default Home;
