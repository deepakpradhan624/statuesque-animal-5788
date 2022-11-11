import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Product from "./Components/Product";
// import PreNavbar from "./Components/PreNavbar";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <PreNavbar /> */}
      <Navbar />

      <Home />
      {/* <Product /> */}
      {/* <Routes>
        <Route path=""></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;