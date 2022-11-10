import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
// import PreNavbar from "./Components/PreNavbar";

function App() {
  return (
    <BrowserRouter>
      {/* <PreNavbar /> */}
      <Navbar />
      <Product />
      {/* <Routes>
        <Route path=""></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;