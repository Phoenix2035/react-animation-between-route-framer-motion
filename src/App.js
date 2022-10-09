import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

import Products from "./Products";
import SingleProduct from "./SingleProduct";

function App() {
  return (
    <AnimateSharedLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </AnimateSharedLayout>
  );
}

export default App;
