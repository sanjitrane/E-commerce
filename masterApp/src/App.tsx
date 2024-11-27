import React, { lazy, Suspense } from "react";

const ProductListing = lazy(()=>import("ProductInHost/ProductsList"))

const App = ()=>{
  return (<>
  <h1>Hello World</h1>
  <Suspense fallback={<p>Loading...</p>}>
  <ProductListing/>
  </Suspense>
  </>)
}

export default App;