import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import InfoEvakor from "./Pages/InfoEvakor";
import Marks from "./Pages/Marks";
import Contact from "./Pages/Contact";
import Delivery from "./Pages/Delivery";
import Return from "./Pages/Return";
import Marks2 from "./Pages/Marks2";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<InfoEvakor />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/return" element={<Return />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/marks2/:id" element={<Marks2 />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
