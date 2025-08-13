import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./Components/Obj-Cards/Card";
import Search from "./Components/Search";
import Home from "./Components/Home";
import Addwishlis from "./Components/wishlist";
import AddedCard from "./Components/AddedCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/search" element={<Search />} />
        <Route path="/addwishlis" element={<Addwishlis />} />
        <Route path="/addedCard" element={<AddedCard />} />
      </Routes>
    </>
  );
}

export default App;


// 1200 900 632 480