import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
