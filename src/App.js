import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Marks from "./Pages/Marks";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/marks" element={<Marks />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
