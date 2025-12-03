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




/**1️⃣ What is Lazy Loading?

Normally React loads all components at startup, even if they are not visible.

❌ Slow
❌ Big initial bundle
❌ Bad for mobile networks

Lazy Loading = load only when required.

👉 Example: Only load the ProductDetails component when user opens /product/:id.**/


 /** 
  * import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"; // your custom hook

function ProductDetails() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/" + id
  );

  if (loading) return <h2>Loading Product...</h2>;
  if (error) return <p>Error loading product</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.image} width={150} height={150} alt="" />
      <p>{data.description}</p>
      <h3>₹{data.price}</h3>
    </div>
  );
}

export default ProductDetails;

**/
