/**Listing of products */
import React, { useCallback, useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () =>{
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  //TODO: get the url from props
  const fetchProducts = useCallback(async()=>{
    try{
    const resp = await fetch('https://dummyjson.com/products')
    const respData = await resp.json();
    setProducts(respData.products)
  }catch(err){
    setError('Error loading data')
  }finally{
    setIsLoading(false)
  }
  },[])

  useEffect(()=>{
    setIsLoading(true)
    fetchProducts()
  },[])

return(
  <>
  {isLoading && <p>Loading Data...</p>}
  {error && <p>{error}</p>}
  <ul className="grid grid-cols-5 gap-3 ">
    {products.map((product:any)=>{
      return(<li key={product.id} className="py-4 ml-3 flex"><Product {...product}/></li>)
    })}
  </ul>
  </>
)

}

export default ProductList;