import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bestseller" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
