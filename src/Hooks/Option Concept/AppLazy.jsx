import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy components
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <Suspense fallback={<h2>Loading Page...</h2>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;
