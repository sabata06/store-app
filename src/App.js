import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"



export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
    </Router>

  )
    
}

