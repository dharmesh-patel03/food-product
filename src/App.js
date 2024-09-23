import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:barcode" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
