import React from "react";
import ProductList from "./Products/ProductList";
import './styles.css';


const App = ()=>{
  return (<div className="p-3">
  <h1 className="text-sky-950 text-2xl font-semibold subpixel-antialiased">Product List</h1>
  <ProductList/>
  </div>)
}

export default App;