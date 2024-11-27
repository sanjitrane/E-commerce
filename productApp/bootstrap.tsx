import { createRoot } from "react-dom/client";
import App from "./src/ProductApp";

const bootstrap = ()=>{
  const domNode = document.getElementById('root');
  const root = createRoot(domNode)
  
  root.render(
    <App/>
  )
}

export default bootstrap;
