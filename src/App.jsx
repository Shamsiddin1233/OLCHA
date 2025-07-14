import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cotalog from "./Components/Catalog";
import Navbar from "./Components/Navbar";
import Swippers from "./Components/Swippers";
import Cardlist from "./Components/Obj-Cards/Card-list";
import Card from "./Components/Obj-Cards/Card";
function App() {
  return (
    <>


      <Navbar />
      <Cotalog />
      <Swippers />
    <Routes>
      <Route path="/" element={<Cardlist/>}/>
      <Route path="/card/:id" element={<Card/>}/>
    </Routes>
      
    </>
  );
}

export default App;
