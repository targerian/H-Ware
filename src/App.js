import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useWindowSize } from "./hooks/useWindowSize";
import HabmurgerNav from "./components/HabmurgerNav";
import { useState } from "react";

function App() {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <div className='container'>
      {size.width > 900 ? (
        <Navbar />
      ) : (
        <HabmurgerNav setOpen={setOpen} open={open} />
      )}
      <Routes>
        <Route path='/' element={<Home setOpen={setOpen} />} />
      </Routes>
    </div>
  );
}

export default App;
