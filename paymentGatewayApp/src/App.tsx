import React from "react";

type AppProps={
  greet: string
}

const App = ({greet}:AppProps)=>{
  return <h1>{greet}</h1>
}

export default App;